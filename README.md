# WishList

A personal wish list application with Firebase authentication and real-time data management.

## Project Overview

WishList is a web application that allows users to create, manage, and organize their personal wish lists. The application solves the common problem of scattered wish list items across notes, emails, and browser bookmarks by providing a centralized, secure platform. Users can authenticate using their Google account via Firebase Authentication, ensuring that their data remains private and accessible only to them. The application is designed with a clean, intuitive interface that makes adding, editing, and removing wish list items straightforward and efficient. This project demonstrates proficiency in modern JavaScript development, cloud-based authentication, and real-time database integration.

## Core Features

- User authentication via Google Sign-In using Firebase Authentication, providing secure and seamless access.
- Real-time synchronization of wish list data across devices using Firebase Realtime Database.
- Ability to add new wish list items with a title, description, and optional link.
- Edit existing wish list items to update details or mark items as purchased.
- Delete items from the wish list with a single click.
- Responsive design that works on desktop and mobile devices.

## Technology Stack

- **JavaScript (ES6+)**: The core programming language used for all application logic. JavaScript was chosen for its ubiquity in web development, its asynchronous capabilities for handling Firebase operations, and its flexibility in building interactive user interfaces. The codebase uses modern ES6+ features such as arrow functions, template literals, and modules to ensure readability and maintainability.

- **Firebase Authentication**: Provides a secure, scalable authentication system that supports Google Sign-In. Firebase Authentication was selected because it eliminates the need to build and maintain a custom authentication backend, reduces security risks, and offers a seamless user experience with minimal configuration.

- **Firebase Realtime Database**: A NoSQL cloud database that stores wish list data in real time. This technology was chosen for its ability to synchronize data across clients instantly, its offline support, and its simple integration with Firebase Authentication for per-user data isolation.

- **HTML5 and CSS3**: Used for structuring and styling the user interface. HTML5 provides semantic markup for accessibility, while CSS3 enables responsive design and a clean, professional appearance without external frameworks.

## Architecture / Design Decisions

The application follows a modular architecture with clear separation of concerns. The codebase is organized into the following structure:

- **`index.html`**: The main entry point containing the application's HTML structure and links to external resources.
- **`style.css`**: Contains all styling rules, organized by component (header, form, list, buttons) for maintainability.
- **`app.js`**: The core JavaScript file that handles Firebase initialization, authentication state management, and all CRUD operations for wish list items.
- **`firebase.js`**: A configuration file that initializes the Firebase app with project-specific credentials. This file is excluded from version control for security purposes.

Key design decisions include:

- **Separation of concerns**: Authentication logic, database operations, and UI rendering are handled in distinct functions within `app.js`, making the code easier to test and extend.
- **Event-driven architecture**: User interactions (sign-in, form submission, button clicks) trigger specific event handlers, ensuring a responsive and predictable user experience.
- **Minimal dependencies**: The application relies only on Firebase SDKs and vanilla JavaScript, avoiding unnecessary frameworks or libraries. This reduces complexity, improves load times, and demonstrates core JavaScript competency.
- **Security-first approach**: Firebase Security Rules are configured to allow users to read and write only their own data, ensuring data privacy and preventing unauthorized access.

## Installation and Setup

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```
   git clone https://github.com/tvay11/WishList.git
   cd WishList
   ```

2. **Set up a Firebase project**:
   - Go to the [Firebase Console](https://console.firebase.google.com/u/0/).
   - Create a new project (or use an existing one).
   - Enable **Authentication** and add the **Google Sign-In** provider.
   - Enable **Realtime Database** and create a database in test mode (or configure security rules as needed).

3. **Add Firebase configuration**:
   - In the Firebase Console, go to Project Settings > General > Your apps > Add app > Web.
   - Copy the Firebase configuration object.
   - Create a file named `firebase.js` in the project root directory.
   - Paste the configuration object into `firebase.js` and export it. The file should look like this:
     ```javascript
     // firebase.js
     import { initializeApp } from "firebase/app";

     const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       databaseURL: "YOUR_DATABASE_URL",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_STORAGE_BUCKET",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID"
     };

     const app = initializeApp(firebaseConfig);
     export default app;
     ```

4. **Serve the application**:
   - Since this is a static web application, you can serve it using any local HTTP server. For example, using Python:
     ```
     python3 -m http.server 8000
     ```
   - Or using Node.js with `http-server`:
     ```
     npx http-server
     ```

5. **Open the application**:
   - Navigate to `http://localhost:8000` (or the port specified by your server) in a web browser.
   - Click the **Sign in with Google** button to authenticate and start using the wish list.

## Future Scope and Key Learnings

This project provided valuable experience in integrating third-party authentication services, working with real-time databases, and building a complete CRUD application with vanilla JavaScript. Key learnings include:

- Understanding the Firebase Authentication flow, including sign-in, sign-out, and state management.
- Implementing real-time data synchronization using Firebase Realtime Database listeners.
- Structuring a JavaScript application for maintainability and scalability without a framework.

Potential future enhancements include:

- Adding support for multiple wish lists (e.g., birthday, holiday, general).
- Implementing image uploads for wish list items using Firebase Storage.
- Adding a sharing feature that allows users to share wish lists with friends or family.
- Enhancing the user interface with animations and improved accessibility.
- Writing unit tests for core functions using a testing framework like Jest.

This project serves as a solid foundation for more complex applications and demonstrates a strong understanding of modern web development practices.