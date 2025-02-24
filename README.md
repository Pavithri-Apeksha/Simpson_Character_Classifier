# Simpson Character Classifier

A web application that classifies images of characters from *The Simpsons* using a machine learning model hosted on Azure Custom Vision. The project consists of a **React frontend** and a **Flask backend**.

---

## Features

- **Image Upload**: Users can upload an image of a Simpson character.
- **Character Prediction**: The application predicts the character in the image using an Azure Custom Vision model.
- **Probability Display**: Displays the predicted character and the confidence score.
- **Low Probability Warning**: Shows a warning if the prediction confidence is too low.

---

## Technologies Used

- **Frontend**: React, Tailwind CSS (optional), Axios
- **Backend**: Flask, Python, Azure Custom Vision API
- **Other Tools**: Dotenv, Flask-CORS, Requests

---

## Project Structure
simpson-character-classifier/
├── frontend/ # React frontend
│ ├── public/
│ ├── src/
│ │ ├── components/ # Reusable components
│ │ ├── App.js # Main application component
│ │ ├── App.css # Custom CSS styles
│ │ └── index.js # Entry point
│ ├── package.json # Frontend dependencies
│ └── README.md # Frontend README
├── backend/ # Flask backend
│ ├── app.py # Flask application
│ ├── requirements.txt # Backend dependencies
│ └── .env # Environment variables
├── README.md # Project README
└── .gitignore # Git ignore file
