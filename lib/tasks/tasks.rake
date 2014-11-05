namespace :db do
  desc "Fill database with sample data"
  task populate: :environment do
    make_users
  end
end

def make_users
  40.times do |n|
    fname = "name#{n}"
    femail = "test#{n}@demo-app.com"
    fage = n + 10
    Users.create!(name: fname,
                  email: femail,
                  age: fage)
  end
end