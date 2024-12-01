# TravelBuddy Application

## Project Overview
TravelBuddy is a simple and user-friendly app that helps people manage their travel plans. It lets users sign up, log in, upload files, and receive notifications. Administrators (admins) can manage users, handle uploaded files, and get notifications when something new happens. The app is built using React.js for the user interface and Spring Boot for the backend.

## Technical Details

### 1. Structure of the App
- **Frontend**: React.js is used to create a modern, responsive design.
- **Backend**: Spring Boot powers the app, handling user data, files, and notifications.
- **Database**: The app stores data in a MySQL or PostgreSQL database.

### 2. Main Features
- **Sign Up**: New users can create accounts.
- **Login**: Secure login for both regular users and admins.
- **Admin Tools**: Admins can:
  - Manage users (add, edit, or delete accounts).
  - View and organize uploaded files.
  - Receive and view notifications.
- **Notifications**:
  - Users and admins receive alerts for important actions.
  - Notifications show counts like "Notifications (2)" for unread updates.

### Technologies Used
- **Frontend**: React.js, Axios (for API communication), and CSS for styling.
- **Backend**: Spring Boot, JPA/Hibernate for database handling.

## Business Details

### Purpose of the App
TravelBuddy is made for people who want an easy way to plan and organize their trips. It’s also useful for travel agencies that need to manage users and documents.

### Who Can Use It?
- **Travelers**: People who want to keep their travel information in one place.
- **Travel Agencies**: Admins who need tools to manage their customers and files.

### Why Use TravelBuddy?
- Keeps travel plans and files organized.
- Notifications ensure users never miss important updates.
- Admin tools make it easy to manage everything in one place.

## How to Use the App

### Sign Up
1. Go to the **Sign Up** page.
2. Enter your details:
   - Name
   - Email
   - Password
   - (Optional) Upload a profile picture.
3. Click **Sign Up** to create your account.
4. A message will confirm that your account is ready.

### Log In
1. Go to the **Login** page.
2. Enter your email and password.
3. Click **Login** to access your account.
4. After login:
   - Regular users are sent to their **Home** page.
   - Admins are sent to the **Admin Dashboard**.
