#My private repo

##Git aliases  
  co = checkout
  ci = commit
  st = status
  br = branch
  fall = fetch --all
  mr = merge
  unstage = reset HEAD
  pl = pull
  ps = push
  ls = stash list
  save = stash save
  pop = stash pop
  verbose = log --graph --stat --pretty=format:'The author of %Cblue%h%Creset was %C(yellow)%an%Creset, %C(blue)%ar%Creset, and they said \n%C(yellow)%s\n%C(green)==========================================================\n%b%C(green)==========================================================\n%Creset'
  gist = log --pretty=format:'%C(red)%h%Creset%C(white)%d %C(green)%an%Creset - %C(yellow)%s %Cgreen(%cr)%Creset' --graph --date=relative
  continue = rebase --continue