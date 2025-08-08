from nltk.sentiment.vader import SentimentIntensityAnalyzer
sid = SentimentIntensityAnalyzer()

def emotion_detector(text_to_analyse):
    scores = sid.polarity_scores(text_to_analyse)
    compound = scores['compound']

    if compound >= 0.5:
        dominant_emotion = 'joy'
    elif compound <= -0.5:
        text_lower = text_to_analyse.lower()
        if any(w in text_lower for w in ['fear', 'scared', 'afraid', 'terrified']):
            dominant_emotion = 'fear'
        elif any(w in text_lower for w in ['anger', 'angry', 'mad', 'furious']):
            dominant_emotion = 'anger'
        elif any(w in text_lower for w in ['sad', 'unhappy', 'depressed', 'down']):
            dominant_emotion = 'sadness'
        else:
            dominant_emotion = 'disgust'  # fallback si no se detecta
    else:
        dominant_emotion = 'neutral'

    return {
        'anger': None,
        'disgust': None,
        'fear': None,
        'joy': scores['pos'],       
        'sadness': scores['neg'],   
        'dominant_emotion': dominant_emotion
    }