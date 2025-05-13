"""
This is the Emotion Detector Flask app. It receives a text input,
analyzes the emotions using the emotion_detector, and returns the emotion analysis.
"""
from flask import Flask, render_template, request
from EmotionDetection.emotion_detection import emotion_detector

app = Flask("Emotion Detector")

@app.route("/emotionDetector")
def sent_detector():
    """
    Analyzes the emotion of a given text and returns the results.
    The dominant emotion and emotion scores (anger, disgust, fear, joy, sadness) are returned.
    """
    text_to_analyze = request.args.get('textToAnalyze')
    response = emotion_detector(text_to_analyze)

    anger = response['anger']
    disgust = response['disgust']
    fear = response['fear']
    joy = response['joy']
    sadness = response['sadness']
    dominant_emotion = response['dominant_emotion']

    if dominant_emotion is None:
        return "Invalid text! Please try again!"

    return (
        f"For the given statement, the system response is "
        f"'anger': {anger}, 'disgust': {disgust}, 'fear': {fear}, "
        f"'joy': {joy} and 'sadness': {sadness}. "
        f"The dominant emotion is {dominant_emotion}."
    )

@app.route("/")
def render_index_page():
    """
    Renders the index page for the Emotion Detector application.
    """
    return render_template('index.html')

if __name__ == "__main__":
    #had to use 7000 because I was using 5000 for the practice
    app.run(host="0.0.0.0", port=700

