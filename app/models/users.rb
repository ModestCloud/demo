class Users < ActiveRecord::Base
  attr_accessible :name, :email, :age
end
