import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [prediction, setPrediction] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleUpload = async () => {
        if (!image) return alert("Please select an image");

        setLoading(true);
        setPrediction(null);

        const formData = new FormData();
        formData.append("image", image);

        try {
            const response = await axios.post("http://127.0.0.1:5000/predict", formData);
            const predictions = response.data.predictions;

            const highestPrediction = predictions.reduce((prev, current) =>
                prev.probability > current.probability ? prev : current
            );

            setPrediction(highestPrediction);
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to get prediction. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="app">
            <div className="card">
                <div className="card-header">
                    <h1 className="card-title">Simpson Character Classifier</h1>
                </div>
                <div className="card-content">
                    <div className="file-input">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            id="file-upload"
                        />
                        <label htmlFor="file-upload">Choose an image</label>
                    </div>
                    {preview && (
                        <div className="image-preview">
                            <img src={preview} alt="Preview" />
                        </div>
                    )}
                    <button className="button" onClick={handleUpload}>
                        Upload & Predict
                    </button>

                    {loading && (
                        <div className="loading-skeleton">
                            <div className="skeleton" style={{ height: "64px" }}></div>
                            <div className="skeleton" style={{ height: "64px" }}></div>
                        </div>
                    )}

                    {prediction && (
                        <div className="prediction-box">
                            <h3>Prediction:</h3>
                            {prediction.probability < 0.5 && (
                                <p className="low-probability">
                                    Cannot confidently predict this image because the probability is too low.
                                </p>
                            )}
                            <p>
                                <strong>Character:</strong> {prediction.tagName}
                            </p>
                            <p>
                                <strong>Probability:</strong> {(prediction.probability * 100).toFixed(2)}%
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;