puts "Destroying Users"
User.destroy_all
puts "Creating Users"
2.times do |i|
    User.create(email: "user-#{i+1}@example.com", password: "password", password_confirmation: "password")
end

puts "Creating Todo Items"
User.all.each do |u|
    10.times do |i|
        u.todo_items.create(title: "To Do Item #{i+1} for #{u.email}", complete: i % 3  == 0 ? true : false  )
    end
end

puts "Finished Seeding"