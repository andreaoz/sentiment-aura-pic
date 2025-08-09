from nltk.sentiment.vader import SentimentIntensityAnalyzer
sid = SentimentIntensityAnalyzer()
from emotionlist import fear_words, anger_words, sadness_words, disgust_words

def emotion_detector(text_to_analyse):
    scores = sid.polarity_scores(text_to_analyse)
    compound = scores['compound']

    if compound >= 0.5:
        dominant_emotion = 'joy'
    elif compound <= -0.5:
        text_lower = text_to_analyse.lower()
        if any(w in text_lower for w in fear_words):
            dominant_emotion = 'fear'
        elif any(w in text_lower for w in anger_words):
            dominant_emotion = 'anger'
        elif any(w in text_lower for w in sadness_words):
            dominant_emotion = 'sadness'
        elif any(w in text_lower for w in disgust_words):
            dominant_emotion = 'disgust'  
    else:
        dominant_emotion = 'neutral'

    return {
        'compound' : compound,
        'joy': scores['pos'],       
        'sadness': scores['neg'],   
        'dominant_emotion': dominant_emotion
    }