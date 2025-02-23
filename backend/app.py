from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

AZURE_URL = os.getenv("AZURE_URL")
AZURE_KEY = os.getenv("AZURE_KEY")

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    image_file = request.files['image']

    headers = {
        "Prediction-Key": AZURE_KEY,
        "Content-Type": "application/octet-stream"
    }

    response = requests.post(AZURE_URL, headers=headers, data=image_file.read())

    return jsonify(response.json())

if __name__ == '__main__':
    app.run(debug=True)
