
Person = Backbone.Model.extend({

    defaults: {
    	name: "Person",
    	age: 27,
    	occupation: "Student"
    },

    validate: function(attrs) {

        if(! attrs.name) {
           return 'Invalid name!';
        }

        if(attrs.age <= 0) {
           return 'Invalid age!';
        }
    },
});

// People Collection 
PeopleCollection = Backbone.Collection.extend({
    
    model: Person,

    initialize: function(models, options) {
    }
});

// PersonView
PersonView = Backbone.View.extend({
	tagName: 'li',
	template: _.template($('#personTemplate').html()),

	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
	}
});

var peopleCollection = new PeopleCollection([new Person]);
