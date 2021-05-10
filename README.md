# Simple CRUD-OPS Application

This application was developed to enable students
 to register their information via API. 
 
 It is a simple CRUD operation application giving the User 
 access to C-reate new student accounts, R-ead current names
 of students present in the Database, also U-pdate current list 
 of students, and Finally been a to D-elete register students in the 
 Database
 
 ## Acknowledgement
 [Zuri Team](https://twitter.com/theZuriTeam?s=20)
 - Zuri Task 3.0
  

## Tech Stack

A Server Application (Backend)

**Technologies:**
- NodeJS - Runtime Environment
- ExpressJs - Web Application Framework
- NPM - Dependency Manager

***
## Dependency:
- dotenv
- mongoose
- express


## Features of the app

-  Post A Student Data
- Modify A Student Data
- Get A Student Data
- Delete A Student Data
- Get All Student Data


 





## Getting Started

## Installation
- git clone [simple-CRUDop](https://github.com/ajibade3210/Simple-CRUDops-App.git)
- Run yarn install or npm install to install packages
- Run yarn start or npm start to start the server
- Navigate to localhost:5000 in postman or browser to access the application

## Testing
### Prerequisites
[Postman](https://getpostman.com/) - API Toolchain

### Testing with Postman
- After installing as shown above
- Navigate to localhost:5000 in Postman to access the application



## Endpoints to test for
- Post A Student Data - http://localhost:5000/api/student
- Get All Student Data - http://localhost:5000/api/student
- Get A Student Data - http://localhost:5000/api/student/:id
- Modify A Student Data - http://localhost:5000/api/student/:id
- Delete A Student Data - http://localhost:5000/api/student/:id

### Data Entry Requirement 
- Firstname and Lastname is Required
- Email has to be Unique