import { useState, useEffect } from 'react';
import AuraEffect from './AuraEffect';


function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [showAura, setShowAura] = useState(false); //Estado para controlar render
  const [isLocked, setIsLocked] = useState(false);

  const RunSentimentAnalysis = async () => {
    console.log("Ejecutando RunSentimentAnalysis");
    if (!text.trim()) return; // evita llamada vacía
    setIsLocked(true);
    try {
    const res = await fetch(`emotionDetector?textToAnalyze=${encodeURIComponent(text)}`);
    if (!res.ok) throw new Error("Error al analizar el texto");
    const data = await res.json();
    setResult(data);
    setShowAura(true); 
  } catch (err) {
    console.error(err);
    setResult(null);
    setShowAura(false);
  }

  };

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long", // Monday, Tuesday...
    year: "numeric",
    month: "long",   // January, February...
    day: "numeric",
  });

  return (
    <div className="flex flex-col md:h-screen bg-gradient-to-br from-red-100 via-orange-50 via-yellow-50 via-green-50 via-blue-50 via-indigo-50 to-purple-100 p-4 ">
      <div className=" flex-grow max-w-7xl mx-auto fade-in-fast">

        {/* Header */}
        <div className="text-center mb-8 pt-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-4xl md:text-4xl font-bold bg-gradient-to-r from-red-700 via-yellow-700 via-green-600 via-blue-700 to-purple-900 bg-clip-text text-transparent">
              Sentiment Aura Picture
            </h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">

        <div className="lg:col-span-2  h-screen md:h-auto flex-grow ">
           
            <div className="bg-white border-1 border-orange-200 p-8 ">   
              <div className="mb-8">
                <label className="block text-xl font-semibold tracking-wide text-gray-700 mb-4 flex items-center gap-2">
                  Please enter the text to be analyzed
                </label>
                <p className='italic text-base font-extralight'>Try to include very clear vocabulary to get a precise SAP. <br />You didn't like your SAP? Just run the sentiment analysis again and get a brand new one.</p>
                <br />
                <textarea
                  className={`w-full h-40 p-4 border-1 ${isLocked ? "bg-gray-200 cursor-not-allowed" : "bg-white" }`}
                  placeholder="¿How do you feel today? Share your thoghts..."
                  value={text}
                  onClick={() => {
                    if (isLocked) {
                      setIsLocked(false); // Desbloquear textarea
                      setShowAura(false); // Ocultar imagen
                    }
                  }}
                  onChange={(e) => setText(e.target.value)}
                  readOnly={isLocked} 
                />
              </div>

              <div className="mb-8 text-center">
                {/* Botón para pantallas grandes */}
                  <button
                    onClick={RunSentimentAnalysis}
                    className="hidden md:inline-block px-8 py-4 bg-gradient-to-r from-red-700 via-yellow-700 to-green-700 text-white font-bold hover:from-blue-700 hover:to-purple-800 transition-all duration-900 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl"
                  >
                    Take a SAP
                  </button>

                  {/* Botón para pantallas pequeñas, que hace scroll al resultado */}
                  <a
                    href="#polaroidImg"
                    onClick={RunSentimentAnalysis}
                    className="inline-block md:hidden px-8 py-4 bg-gradient-to-r from-red-700 via-yellow-700 to-green-700 text-white font-bold hover:from-blue-700 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 rounded-xl"
                  >
                    Run Sentiment Analysis
                  </a>
              </div>
            </div>
          </div>
              
          {/* Right Column - Color Display Rectangle */}
          <div className="relative lg:col-span-1">
            <div className="relative bg-white p-6 shadow-lg border border-gray-200 w-80 mx-auto"
                style={{
                        boxShadow: '0 8px 15px rgba(0,0,0,0.2)',
                        borderBottomWidth: '1rem', // borde más ancho abajo
                        borderColor: 'white' // naranja 200
                      }}>
              {/* Color Display Area */}

              {/*<AuraTest/>*/}
              <div className="relative bg-gray-50 p-4 aspect-[3/4] w-full flex items-center justify-center border border-gray-300 overflow-hidden"
                   id="polaroidImg"
                    >
                {showAura ? (
                    <AuraEffect 
                      dominantEmotion={result.dominant_emotion} 
                      compound={result.compound} 
                      joy_value={result.joy} 
                      sadness_value={result.sadness} 
                    />
                ) : (
                  <div className="text-center text-gray-400"
                      >
                    <p className="text-lg">Your SAP will appear here.</p>
                    <p className="text-sm mt-2">Write down your feelings and take a SAP.</p>
                  </div>
                )}
              </div>
                <div className='order'>
                  {result ? (
                      <p className='date-format'>{formattedDate}</p>
                  ) : (
                    <div>
                      <p className='text-white'> ---</p>
                    </div>
                  )}
                </div>
            </div>
            </div>  
            
             
        </div>
          </div>
          {/* Footer */}
          <footer className="py-4 px-6">
            <div className="max-w-6xl mx-auto text-center text-gray-500">
              <p>&copy; 2025 Andrea Oz</p>
            </div>
          </footer>

      </div>
  );
}

export default App;
