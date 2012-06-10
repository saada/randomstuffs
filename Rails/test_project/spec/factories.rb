FactoryGirl.define do
	  factory :user, :class => User do
		name "Michael Hartl"
		email "mhartl@example.com"
		password "foobar"
		password_confirmation "foobar"
	end
end