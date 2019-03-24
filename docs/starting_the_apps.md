# Starting all 4 servers
### Starting the applications in a development environment
#### Start the backend of the public facing website - Student Portal
1. goto student/backend
1. run <code>npm install</code> -> installs all dependencies for the Student Portal - Backend
1. goto student/backend/app
1. copy the <i>config.example.ts</i> and rename it as <i>config.ts</i>
1. fill up the given details in <i>config.ts</i>
1. go back to student/backend
1. run the command <code>npm run sync-models</code> -> this syncs the SQL schema to the server
1. run the command <code>npm run build:dev</code> -> transpiles typescript code to javascript
1. run the command <code>npm run start:dev</code> -> runs the actual server
1. conditionally, if you need logging from the code then running <code>npm run start:dev:windows</code> will run logging for WINDOWS and running <code>npm run start:dev:linux</code> runs the logging for LINUX

#### Start the frontend of the public facing website - Student Portal
1. goto student/frontend
1. run <code>npm install</code> -> installs all dependencies for the Student Portal - Frontend
1. run <code>npm run start</code> -> runs the development version of the frontend

##### Note for development server
Make sure that the student-backend is running at port 3000 and student-frontend is running at any port other than 3000
If the student-backend is not running at port 3000, then simply change the <i>config.ts</i> at student-frontend