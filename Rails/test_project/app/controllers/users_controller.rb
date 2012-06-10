
class UsersController < ApplicationController
  def new
  	@user = User.new
  	@title = "Sign up"
  end

  def show
  	@user = User.find(par ams[:id])
  	@title = @user.name
  end
end
