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
2. Install dependencies:
   ```bash
   npm install
3. Start the development server:
   ```bash
   npm start
4. The frontend will be available at http://localhost:3000.

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
2. Create a virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
4. Create a .env file in the backend directory and add your Azure Custom Vision API credentials:
   AZURE_URL=<Your Azure Custom Vision API URL>
   AZURE_KEY=<Your Azure Custom Vision API Key>
5. Start the Flask server:
   ```bash
   python app.py
6. The backend will be available at http://localhost:5000.

---
### Running the Project
**Start both the frontend and backend servers.**
**Open the frontend in your browser (http://localhost:3000).**
**Upload an image of a Simpson character.**
**View the prediction results.**

### Screenshots
![image](https://github.com/user-attachments/assets/b2c2ca4f-bc9f-4cf2-9eb4-41f5985347e1)

![image](https://github.com/user-attachments/assets/f41b139a-0a97-4d13-8985-645cba8f3f57)


