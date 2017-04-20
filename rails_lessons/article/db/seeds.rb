# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Unit.delete_all
Comment.delete_all

user_comment = Comment.create(name: "User 1")
writer_comment = Comment.create(name: "Writer 1")

Unit.create(content: "How to become a Web Developer", comment_id: user_comment.id)
Unit.create(content: "What is a hipster", comment_id: user_comment.id)

Unit.create(content: "How to become a Writer", comment_id: writer_comment.id)
Unit.create(content: "Why it's important to write everyday", comment_id: writer_comment.id)
