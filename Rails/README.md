MMMMMMMM               MMMMMMMM                                              d::::::d                        
M:::::::M             M:::::::M                                              d::::::d                        
M::::::::M           M::::::::M                                              d::::::d                        
M:::::::::M         M:::::::::M                                              d:::::d                         
M::::::::::M       M::::::::::M   ooooooooooo      ooooooooooo       ddddddddd:::::dyyyyyyy           yyyyyyy
M:::::::::::M     M:::::::::::M oo:::::::::::oo  oo:::::::::::oo   dd::::::::::::::d y:::::y         y:::::y 
M:::::::M::::M   M::::M:::::::Mo:::::::::::::::oo:::::::::::::::o d::::::::::::::::d  y:::::y       y:::::y  
M::::::M M::::M M::::M M::::::Mo:::::ooooo:::::oo:::::ooooo:::::od:::::::ddddd:::::d   y:::::y     y:::::y   
M::::::M  M::::M::::M  M::::::Mo::::o     o::::oo::::o     o::::od::::::d    d:::::d    y:::::y   y:::::y    
M::::::M   M:::::::M   M::::::Mo::::o     o::::oo::::o     o::::od:::::d     d:::::d     y:::::y y:::::y     
M::::::M    M:::::M    M::::::Mo::::o     o::::oo::::o     o::::od:::::d     d:::::d      y:::::y:::::y      
M::::::M     MMMMM     M::::::Mo::::o     o::::oo::::o     o::::od:::::d     d:::::d       y:::::::::y       
M::::::M               M::::::Mo:::::ooooo:::::oo:::::ooooo:::::od::::::ddddd::::::dd       y:::::::y        
M::::::M               M::::::Mo:::::::::::::::oo:::::::::::::::o d:::::::::::::::::d        y:::::y         
M::::::M               M::::::M oo:::::::::::oo  oo:::::::::::oo   d:::::::::ddd::::d       y:::::y          
MMMMMMMM               MMMMMMMM   ooooooooooo      ooooooooooo      ddddddddd   ddddd      y:::::y           
                                                                                          y:::::y            
                                                                                         y:::::y             
                                                                                        y:::::y              
                                                                                       y:::::y               
                                                                                      yyyyyyy                

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