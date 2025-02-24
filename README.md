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
![image](https://github.com/user-attachments/assets/ad200da6-ec67-42f2-ae8a-6284cf146238)

## Setup Instructions

### Prerequisites

- **Node.js** (for the frontend)
- **Python 3.8+** (for the backend)
- **Azure Custom Vision API Key** (for predictions)

---

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
2.Install dependencies:
   ```bash
   npm install
