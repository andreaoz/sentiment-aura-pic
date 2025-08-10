"""
This is the Emotion Detector Flask app. It receives a text input,
analyzes the emotions using the emotion_detector, and returns the emotion analysis.
"""
from flask import Flask, jsonify, request, render_template
import os
from flask_cors import CORS
import sys

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from EmotionDetection.emotion_detection import emotion_detector

app = Flask("Emotion Detector",
            static_folder='../frontend/dist/assets',
            static_url_path='/assets',
            template_folder='../frontend/dist')

CORS(app)

@app.route("/emotionDetector")
def sent_detector():
    """
    Analyzes the emotion of a given text and returns the results.
    The dominant emotion and emotion scores (joy, sadness) are returned.
    """
    text_to_analyze = request.args.get('textToAnalyze')
    response = emotion_detector(text_to_analyze)

    if not response or response.get('dominant_emotion') is None:
        return jsonify({"error": "Invalid text! Please try again!"}), 400

    return jsonify({
        "compound": response['compound'],
        "joy": response['joy'],
        "sadness": response['sadness'],
        "dominant_emotion": response['dominant_emotion']
    })

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/<path:path>')
def serve_react_app(path):
    return render_template('index.html')

if __name__ == "__main__":
    #had to use 7000 because I was using 5000 for the practice
    #app.run(host="0.0.0.0", port=700)
    app.run(debug=True)