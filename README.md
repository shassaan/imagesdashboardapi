# imagesdashboardapi
Summary: The app would allow people to login, and upload images.   
Details of project:   Part 1 - Basic login, and users management 
- Two types of dashboard users are: Users and Admins 
- Users/Admins would log in using their email address or employee id (login screen design will be provided) 
- Users/Admins can signup for new accounts by filling up a form (fullname , email , password,dob) 
When Logged in:  
- Users/Admins can change their password and other basic info  
- Admins can create, edit, delete new User/Admin accounts  
- Admins can view new account requests -> make new accounts from those requests 
- Admins can create, edit, delete access groups. Each User shall have multiple access groups attached to it.
- Admins can create, edit, delete images categories.    
Part 2
- Images upload  
- Admins can upload multiple images to dashboard (each file can be in GBs). Admin must select an access group and an image category with it
- After upload, the file is stored in filesystem, and it's path + access group + uploader's info is stored in RabbitMQ 
- Admin can list &amp; remove items in the RabbitMQ 
- (My docker service will take items in rabbitmq, process them, and put them in a database) - Admin can list, delete, edit info of images in db
