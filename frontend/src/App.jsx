import { useState } from 'react';
import AuraEffect from './AuraEffect';


function App() {
  const [text, setText] = useState("");             //Text to analyse
  const [result, setResult] = useState(null);       //Results (numerical values from the analysis)
  const [showAura, setShowAura] = useState(false);  //State to show or hide animation
  const [isLocked, setIsLocked] = useState(false);  //To block text area when user clicks the button; it unlocks when clicking on text area again

  const RunSentimentAnalysis = async () => {
    console.log("Running SentimentAnalysis");
    if (!text.trim()) return;                       // Avoids empty run
    setIsLocked(true);                              //Text area locks when we run the analysis, to avoid real-time animation rendering
    try {
    const res = await fetch(`emotionDetector?textToAnalyze=${encodeURIComponent(text)}`);  //GET request using text as query param
    if (!res.ok) throw new Error("Error running analysis.");                               //Throws error, is there's any
    const data = await res.json();                                                         //Saving values as a JSON object
    setResult(data);                                //When the promise is resolved, result updates with new values
    setShowAura(true);                              //The Aura Effect is rendered using new updated values
  } catch (err) {
    console.error(err);                             //Shows error
    setResult(null);                                //Null value to result
    setShowAura(false);                             //Hides animation
  }
  };

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric"});

  return (
    <div className="flex flex-col md:h-screen bg-gradient-to-br from-red-100 via-orange-50 via-yellow-50 via-green-50 via-blue-50 via-indigo-50 to-purple-100 p-4 ">
      <div className=" flex-grow max-w-7xl mx-auto fade-in-fast">

        {/* Header */}
        <div className="text-center mb-8 pt-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-4xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 via-pink-300 to-purple-400 bg-clip-text text-transparent">
              Sentiment Aura Picture
            </h1>
          </div>
        </div>

        {/* App Body */}
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2  h-screen md:h-auto flex-grow ">
            
            {/* Text and Button Area */}
            <div className="bg-white border-1 border-orange-200 p-8 ">  
              {/* Text Area */}
              <div className="mb-8">
                <label className="block text-xl font-semibold tracking-wide text-gray-700 mb-4 flex items-center gap-2">
                  Please enter the text to be analyzed
                </label>
                <p className='italic text-base font-extralight'>
                  Try to include very clear vocabulary to get a precise SAP. <br />You didn't like your SAP? Just run the sentiment analysis again and get a brand new one.
                </p>
                <br />
                <textarea
                  className={`w-full h-40 p-4 border-1 ${isLocked ? "bg-gray-200 cursor-not-allowed" : "bg-white" }`}
                  placeholder="¿How do you feel today? Share your thoghts..."
                  value={text}
                  onClick={() => {
                    if (isLocked) {
                      setIsLocked(false); // Unlock textarea
                      setShowAura(false); // Hide animation
                    }
                  }}
                  onChange={(e) => setText(e.target.value)}
                  readOnly={isLocked} 
                />
              </div>
              {/* Button */}
              <div className="mb-8 text-center">
                {/* Big screens */}
                <button
                  onClick={RunSentimentAnalysis}
                  className="hidden md:inline-block px-8 py-4 bg-gradient-to-r from-orange-300 via-pink-200 to-purple-300 text-gray-700 font-medium hover:brightness-105 hover:shadow-md transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl shadow-sm"
                >
                  Take a SAP
                </button>

                {/* Small screens (with href to scroll to animation)*/}
                <a
                  href="#polaroidImg"
                  onClick={RunSentimentAnalysis}
                  className="inline-block md:hidden px-8 py-4 bg-gradient-to-r from-orange-300 via-pink-200 to-purple-300 text-gray-700 font-medium hover:brightness-105 hover:shadow-md transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl shadow-sm"
                >
                  Take a SAP
                </a>
              </div>
            </div>
          </div>
              
          {/* Aura Animation Area */}
          <div className="relative lg:col-span-1">
            <div className="relative bg-white p-6 shadow-lg border border-gray-200 w-80 mx-auto"
                style={{
                        boxShadow: '0 8px 15px rgba(0,0,0,0.2)',
                        borderBottomWidth: '1rem', 
                        borderColor: 'white'
                      }}>

              {/* Plaroid Area */}
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
              {/* Date Display in Plaroid Area */}
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
