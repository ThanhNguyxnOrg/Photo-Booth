# Photo Booth Web Application

A modern web-based photo booth application with features like photo capture, filters, stickers, and social sharing.

## Features

- Photo capture using webcam
- Image upload support
- Photo editing with filters and stickers
- Social login (Google, Facebook)
- Guest mode
- Admin panel for content moderation
- Public gallery
- Content moderation using NSFW.js
- Responsive design

## Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/photo-booth.git
cd photo-booth
```

2. Update Firebase configuration:
Edit `src/js/firebase-config.js` with your Firebase credentials:
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

3. Set up Firebase:
- Create a new Firebase project
- Enable Authentication (Email/Password, Google, Facebook)
- Create a Firestore database
- Set up Storage rules

4. Install dependencies:
```bash
npm install
```

5. Run the application:
```bash
npm start
```

## Usage

### Guest Mode
- Click "Continue as Guest" to use basic features
- Take photos using webcam
- Apply filters and stickers
- Download photos

### User Account
- Create an account or login with Google/Facebook
- Access additional features like:
  - Saving photos to your account
  - Sharing to public gallery
  - Creating photo collections

### Admin Access
- Login with admin credentials:
  - Email: thanhnguyentuan2007@gmail.com
  - Password: Thanh17112007
- Access admin features:
  - Content moderation
  - User management
  - Statistics

## Security

- Content moderation using NSFW.js
- Secure Firebase rules
- Admin authentication
- Safe image storage

## Contributing

Feel free to submit issues and enhancement requests.

## License

[MIT](LICENSE)

## Author

ThanhNguyxn
