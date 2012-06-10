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

class User < ActiveRecord::Base
  attr_accessible :email, :name
end
