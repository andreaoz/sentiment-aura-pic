
const AuraTest = () => {

let dominantEmotion = "anger";
let compound = 1;
let joy_value = 0.8;
let sadness_value = 0.4;

const emotionColorMapLight = {
  anger: ["bg-red-300", "bg-orange-100", "bg-amber-300", "bg-rose-200"],
  fear: ["bg-gray-100", "bg-zinc-200", "bg-slate-300", "bg-violet-100", "bg-indigo-200", "bg-purple-300"],
  sadness: ["bg-blue-200", "bg-cyan-100", "bg-sky-200", "bg-indigo-300"],
  joy: ["bg-yellow-100", "bg-amber-200", "bg-lime-200", "bg-green-300", "bg-emerald-200", "bg-teal-300", "bg-pink-100", "bg-fuchsia-200"],
  disgust: ["bg-lime-300", "bg-green-200", "bg-emerald-300", "bg-yellow-200", "bg-stone-100"],
  neutral: ["bg-gray-200", "bg-neutral-100", "bg-stone-200", "bg-slate-100", "bg-zinc-300"]
};

const emotionColorMapDark = {
  anger: ["bg-red-700", "bg-orange-600", "bg-amber-800", "bg-rose-700"],
  fear: ["bg-gray-800", "bg-zinc-700", "bg-slate-800", "bg-violet-700", "bg-indigo-800", "bg-purple-700"],
  sadness: ["bg-blue-700", "bg-cyan-600", "bg-sky-700", "bg-indigo-800"],
  joy: ["bg-yellow-600", "bg-amber-700", "bg-lime-600", "bg-green-800", "bg-emerald-700", "bg-teal-800", "bg-pink-600", "bg-fuchsia-700"],
  disgust: ["bg-lime-800", "bg-green-700", "bg-emerald-800", "bg-yellow-700", "bg-stone-600"],
  neutral: ["bg-gray-700", "bg-neutral-800", "bg-stone-700", "bg-slate-700", "bg-zinc-800"]
};

function getRandomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const allRandomColors = [
  ...Object.values(emotionColorMapLight).flat(),
  ...Object.values(emotionColorMapDark).flat()
];

const allDarkColors = Object.values(emotionColorMapDark).flat();
const allLightColors = Object.values(emotionColorMapLight).flat();

function getRandomBgColorLight(emotion) {
  const colors = emotionColorMapLight[emotion];
  if (!colors) return "bg-gray-200"; // fallback por si no existe la emoción
  return getRandomFromArray(colors);
}

function getRandomBgColorDark(emotion) {
  const colors = emotionColorMapDark[emotion];
  if (!colors) return "bg-gray-200"; // fallback por si no existe la emoción
  return getRandomFromArray(colors);
}

const bg1 = getRandomBgColorLight(dominantEmotion);
console.log("bg1: "+bg1);

const bg2 = getRandomFromArray(allRandomColors);
console.log("bg2: "+bg2);

let bg3From="bg-gray-200";
let bg3To="bg-gray-200";
let bg4From="bg-gray-200";
let bg4To="bg-gray-200";
let bg5From="bg-gray-200";
let bg5To="bg-gray-200";

if(compound<0){
    bg3From = getRandomFromArray(allDarkColors);
    bg3To = getRandomFromArray(allDarkColors);
}else if(compound>0){
    bg3From = getRandomFromArray(allLightColors);
    bg3To = getRandomFromArray(allLightColors);
}

console.log("bg3From: "+bg3From);
console.log("bg3To: "+bg3To);

if(joy_value>=0.5){
    bg4From=getRandomBgColorDark("joy");
    bg4To=getRandomBgColorLight("joy");
}else{
    bg4From=getRandomBgColorLight("joy");
    bg4To=getRandomBgColorLight("joy");
}

if(sadness_value>=0.5){
    bg5From=getRandomBgColorDark("sadness");
    bg5To=getRandomBgColorLight("sadness");
}else{
    bg5From=getRandomBgColorDark("sadness");
    bg5To=getRandomBgColorLight("sadness");
}

  return (
    
    <div className="absolute inset-0 opacity-100 pointer-events-none bg-stone-50">
      {/*IMPORTANT COLORS*/}

      {/*Two colors based on the DOMINANT EMOTION*/}

      {/*This one will be assigned with a switch*/}
       <div className={`absolute bottom-1/3 right-1/8 w-90 h-90 ${bg1} rounded-full blur-3xl opacity-100 animate-morph-2`}></div>
        {/*This one will be random*/}
       <div className={`absolute top-2/3 left-1/2 w-50 h-60 ${bg2} rounded-full blur-3xl opacity-60 animate-morph-1`}></div>

       {/*This one will depend on the compound value
            - if its positive
            - if its negative*/}
        <div className={`absolute top-1/3 right-1/3 w-60 h-90 bg-gradient-to-br ${bg3From} ${bg3To} rounded-full blur-2xl opacity-80 animate-morph-3`}></div>

         {/*This ones depend on the value of joy and sadness
          The opacities will depend on their values; closer to 1 higher oppacity*/}

        {/*JOY*/}
        <div className={`absolute bottom-1/2 left-1/4 w-50 h-50 bg-gradient-to-tl ${bg4From} ${bg4To} rounded-full blur-2xl opacity-100 animate-morph-4`}></div>
        {/*SADNESS*/}
        <div className={`absolute bottom-16 right-1/2 w-50 h-50 bg-gradient-to-tl ${bg5From} ${bg5To} rounded-full blur-3xl opacity-100 transform translate-x-1/2 animate-float-6`}></div>
      </div>
  )
}

export default AuraTest;