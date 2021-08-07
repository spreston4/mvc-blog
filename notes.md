# User Model

- username

# Post Model

- title
- contents
- post creator username (user_id: One-To-Many : One user will have many posts)
- date created

# Comment Model

- comment text
- comment post (post_id)
- comment username (user_id : One-To-Many : One user will have many comments)

# View
- homepage
- single blog post page
- dashboard (posts I have created and option to add a new blog post)
- add post
- edit post