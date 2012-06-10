# == Schema Information
#
# Table name: users
#
#  created_at :datetime         not null
#  email      :string(255)
#  id         :integer          not null, primary key
#  name       :string(255)
#  updated_at :datetime         not null
#

require 'spec_helper'

describe User do
	before(:each) do
		@attr = {:name=>"Example User", :email =>"user@example.com"}
	end

	it "should create a new instance given a valid attribute" do
		User.create!(@attr) 
	end

	it "should create a new instance given a valid attribute" do
		no_name_user = User.new(@attr.merge(:name=>"")) 
		no_name_user.should_not be_valid
	end

	it "should require an email address" do
		no_email_user = User.new(@attr.merge(:email=>"")) 
		no_email_user.should_not be_valid
	end

	it "should reject names that are too long" do
		long_name = "a" * 51
		long_name_user = User.new(@attr.merge(:name=> long_name))
		long_name_user.should_not be_valid
	end

	it "should accept valid email addresses" do
		addresses = %w[user@foo.com THE_USER@foo.bar.org first.last@site.jp]
		addresses.each do |address|
			valid_email_user = User.new(@attr.merge(:email => address))
			valid_email_user.should be_valid
		end
	end	

	it "should reject invalid email addresses" do
		addresses = %w[user@foo,com foo_bar.org first.last@site.]
		addresses.each do |address|
			valid_email_user = User.new(@attr.merge(:email => address))
			valid_email_user.should_not be_valid
		end
	end	

	it "should reject duplicate email addresses" do
		User.create!(@attr)
		user_with_duplicate_email = User.new(@attr)
		user_with_duplicate_email.should_not be_valid
	end

	it "should reject email addresses identical up to case" do
		upcased_email = @attr[:email].upcase
		User.create!(@attr.merge(:email => upcased_email))
		user_with_duplicate_email = User.new(@attr)
		user_with_duplicate_email.should_not be_valid
	end
end
