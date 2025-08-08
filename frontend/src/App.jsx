import { useState } from 'react';
import AuraEffect from './AuraEffect';

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const RunSentimentAnalysis = () => {
    if (!text.trim()) return; // evita llamada vacía
    fetch(`emotionDetector?textToAnalyze=${encodeURIComponent(text)}`)
      .then(res => {
        if (!res.ok) throw new Error("Error al analizar el texto");
        return res.json();
      })
      .then(data => setResult(data))
      .catch(err => {
        console.error(err);
        setResult(null);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-orange-50 via-yellow-50 via-green-50 via-blue-50 via-indigo-50 to-purple-100 p-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Emotion Detection
            </h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
           
            <div className="bg-white border-1 border-orange-200 p-8">   
              <div className="mb-8">
                <label className="block text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
                  Please enter the text to be analyzed
                </label>
                <textarea
                  className="w-full h-40 p-4 border-1 border-orange-200 focus:border-blue-400 transition-colors resize-none text-gray-700 placeholder-gray-400 bg-white"
                  placeholder="¿How do you feel today? Share your thoghts..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>

              <div className="mb-8 text-center">
                <button
                    onClick={RunSentimentAnalysis}                  
                    className="px-8 py-4 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-white font-bold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl"
                >
                  Run Sentiment Analysis
                </button>
              </div>

              {result && (
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-1 border-orange-200 p-6">
                  <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
                    Sentiment Analysis Result
                  </h3>
                  <div className="text-gray-700 text-lg bg-white p-4 border-1 border-orange-200">
                    <p><strong>Dominant emotion:</strong> {result.dominant_emotion}</p>
                    <p>Anger: {result.anger}</p>
                    <p>Disgust: {result.disgust}</p>
                    <p>Fear: {result.fear}</p>
                    <p>Joy: {result.joy}</p>
                    <p>Sadness: {result.sadness}</p>
                    <p>Compound: {result.compound}</p>
                  </div>
                </div>
              )}
            </div>
            </div>
              
          {/* Right Column - Color Display Rectangle */}
          <div className="lg:col-span-1">
            <div className="relative bg-white p-6 shadow-lg border border-gray-200 max-w-xs mx-auto"
                style={{
                        boxShadow: '0 8px 15px rgba(0,0,0,0.2)',
                        borderBottomWidth: '4rem', // borde más ancho abajo
                        borderColor: 'white' // naranja 200
                      }}>
              {/* Color Display Area */}
              <div className="relative bg-gray-50 p-4 h-64 md:h-80 lg:h-96 flex items-center justify-center border border-gray-300 overflow-hidden">
                {result ? (
                    <AuraEffect dominantEmotion={result.dominant_emotion}/>
                ) : (
                  <div className="text-center text-gray-400">
                    <p className="text-lg">Your Sentiment Aura Picture will appear here.</p>
                    <p className="text-sm mt-2">Write down your feelings and run the analysis.</p>
                  </div>
                )}
              </div>
            </div>

            </div>
                      
            
        </div>
      </div>
    </div>
  );
}

export default App;
