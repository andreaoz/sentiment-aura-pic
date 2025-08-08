import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const RunSentimentAnalysis = () => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        setResult(this.responseText);
      }
    };
    xhttp.open("GET", `emotionDetector?textToAnalyze=${encodeURIComponent(text)}`, true);
    xhttp.send();
  };

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="center-heading">NLP - Emotion Detection test</h1>
        <div style={{ padding: "25px" }}>
          <h2 className="mb-3">
            <label className="form-label">
              Please enter the text to be analyzed
            </label>
            <textarea
              className="form-control"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </h2>

          <div style={{ padding: "25px" }}>
            <button onClick={RunSentimentAnalysis} className="btn btn-secondary">
              Run Sentiment Analysis
            </button>
          </div>

          <h2 className="mb-3">
            <label className="text-3xl font-bold underline">
              Result of Emotion Detection
            </label>
          </h2>

          <div style={{ padding: "25px" }}>{result}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
