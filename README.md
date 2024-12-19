# Coffee Tracker

Coffee Tracker is a web application designed to help users monitor their coffee consumption. It features user authentication and utilizes Firebase for backend services.

## Features

- **User Authentication**: Secure sign-up and login functionality to ensure personalized tracking.
- **Coffee Consumption Tracking**: Log daily coffee intake to monitor habits over time.
- **Firebase Integration**: Real-time database and authentication services provided by Firebase.

## Technologies Used

- **Frontend**: React with Vite for a fast and efficient development environment.
- **Backend**: Firebase for authentication and real-time database services.
- **Styling**: CSS and FantaCSS for responsive and user-friendly design.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ZTNimbus/coffee-tracker.git
   cd coffee-tracker
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up Firebase**:

   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable Authentication and Firestore Database.
   - Obtain your Firebase configuration and replace the placeholder values in `firebase.js`.

4. **Run the application**:

   ```bash
   npm run dev
   ```

   The app should now be running at `http://localhost:3000`.

## Contributing

Contributions are welcome. Please fork this repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License.
