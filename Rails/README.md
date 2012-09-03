My Rails Development Cheatsheet
===============================

## Undo GIT commit:  
	git checkout -f

## Create app without test folder (since I'm using RSPEC):  
	rails new app_name --skip-test-unit
For rails generators, use:  
	rails generate controller ControllerName child1 child2 --no-test-framework
To generate rspec tests:  
	rails generate integration_test name_of_test
Prepare a test database:  
	rake db:test:prepare

## Cucumber, to use without bundle exec:  
	bundle --binstubs=./bundler_stubs
## Cucumber generate:  
	rails g cucumber:install

## Sample Gemfile:  
[CLICK HERE](bit.ly/rails_tutorial_gemfile)

## Undo a Rails Generation:  
	rails generate controller ControllerName child1 child2
We undo with this:  
	rails destroy controller ControllerName child1 child2

## Migrate database
	rake db:migrate