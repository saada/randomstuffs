//Set default sessions here

Meteor.startup(function () {
    console.log((typeof jQuery!="undefined")?"jQuery":"NO jQuery");
    $.getScript('myJs.js', function()
    {
        // script is now loaded and executed.
        // put your dependent JS here.
    });
});

//header
Template.header.subtitle = function () {
  return "Saba7 el de7k!";
};

//footer
Template.footer.year = function () {
  return new Date().getFullYear();
};

Template.posts.topPosts = function() {
  // return Posts.find({});
  return Posts.find({},{sort:{score:-1}}).fetch().slice(0,5);  //get top 20 posts
};

Template.post.events({
  'click': function() {
    Session.set("selected_player", this._id);
  },

  'click .icon-thumbs-up': function() {
    Posts.update(Session.get("selected_player"),{$inc: {score: 1}});
  }
});

Template.post.selected = function() {return Session.equals("selected_player", this._id) ? "info" : '';};

Template.uploadButton.events({
    'click #button' : function () {
        // $("#button").button('loading');
        // $('#button').button('reset');
    }
});

Template.uploadFile.events({
  'change input': function(ev) {
    _.each(ev.srcElement.files, function(file) {
      Meteor.saveFile(file, file.name);
    });
  }
});

/**
 * @blob (https://developer.mozilla.org/en-US/docs/DOM/Blob)
 * @name the file's name
 * @type the file's type: binary, text (https://developer.mozilla.org/en-US/docs/DOM/FileReader#Methods)
 *
 * TODO Support other encodings: https://developer.mozilla.org/en-US/docs/DOM/FileReader#Methods
 * ArrayBuffer / DataURL (base64)
 */
Meteor.saveFile = function(blob, name, path, type, callback) {
  var fileReader = new FileReader(),
    method, encoding = 'binary', type = type || 'binary';
  switch (type) {
    case 'text':
      // TODO Is this needed? If we're uploading content from file, yes, but if it's from an input/textarea I think not...
      method = 'readAsText';
      encoding = 'utf8';
      break;
    case 'binary':
      method = 'readAsBinaryString';
      encoding = 'binary';
      break;
    default:
      method = 'readAsBinaryString';
      encoding = 'binary';
      break;
  }
  fileReader.onload = function(file) {
    Meteor.call('saveFile', file.srcElement.result, name, path, encoding, callback);
  };
  fileReader[method](blob);
}