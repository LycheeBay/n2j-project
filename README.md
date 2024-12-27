# n2j-project

This is our project that provides UT students with an application that helps them identify housing options in line with their needs.

## Getting Started

The project has a NodeJS-based backend (in `/backend`) and a React-based frontend (in `/frontend`). The backend is responsible for fetching data from the database and providing it to the frontend. The frontend is responsible for displaying the data to the user and allowing them to interact with it. For the backend, the private
key and its ID are stored in a `.env` file in the backend directory. 

To test locally, please search-replace `backend_url` with `http://localhost:4000` in the frontend code. After that,
- Run `npm install` in the backend directory to install the required dependencies.
- Run `npm install` in the frontend directory to install the required dependencies.
- Run `npm start` in the backend directory to start the backend server.
- Run `npm start` in the frontend directory to start the frontend server.