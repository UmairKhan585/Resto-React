# Restaurant Management System

A **Restaurant Management System** built using **React** that allows users to efficiently manage restaurant data. Users can add, view, update, and delete restaurant details such as name, email, address, and rating. The project uses **JSON Server** as a mock backend to simulate REST API functionality, ensuring a seamless development experience.


## Features

- **Add Restaurant**: Add new restaurant details to the system.
- **View Restaurant List**: Display all restaurants with their respective details.
- **Update Restaurant**: Edit and update restaurant information.
- **Delete Restaurant**: Remove a restaurant from the system.
- **Responsive Design**: Fully responsive layout using **Bootstrap**.


## Tech Stack

- **Frontend**: React.js, React Router, React-Bootstrap
- **Backend**: JSON Server (for mock API functionality)
- **Styling**: Bootstrap
- **Icons**: FontAwesome


## Folder Structure

The project structure is as follows:

/my-project
├── /public
│   └── index.html
├── /src
│   ├── /components
│   │   ├── RestaurantCreate.js
│   │   ├── RestaurantList.js
│   │   └── RestaurantUpdate.js
│   ├── App.css
│   ├── App.js
│   ├── index.js
│   ├── logo.svg
│   └── reportWebVitals.js
├── /db
│   └── db.json
├── package.json
└── README.md

- **`/src`**: Contains all React components and application logic.
- **`/db`**: Includes the mock database (`db.json`) for the API.
- **`/public`**: Static files like `index.html` are stored here.
- **`package.json`**: Manages dependencies and scripts.


## Installation

Follow these steps to set up and run the project locally:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd my-project
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the mock backend server using **JSON Server**:

   ```bash
   npm run server
   ```

5. Start the React application:

   ```bash
   npm start
   ```

6. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

---

## Scripts

The project includes the following npm scripts:

- **start**: Runs the React application in development mode.
- **build**: Builds the React application for production.
- **server**: Starts the mock backend server using JSON Server.
- **test**: Runs test cases (if any).
- **eject**: Ejects configuration files (advanced use).

---

## Conclusion

This **Restaurant Management System** showcases the use of **React** and **JSON Server** to build a full-stack application with minimal setup. It is an ideal project for learning or demonstrating CRUD operations and frontend-backend integration.

---

 "Code is like humor. When you have to explain it, it’s bad."
```
