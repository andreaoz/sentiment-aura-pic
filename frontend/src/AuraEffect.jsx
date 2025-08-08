const AuraEffect = () => {
  return (
    <div className="absolute inset-0 opacity-50 pointer-events-none bg-stone-50">
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-purple-600/80 via-purple-400/30 to-transparent blur-xl animate-float-1"></div>
      <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-pink-600/80 via-pink-400/30 to-transparent blur-xl animate-float-2"></div>
      <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-radial from-pink-500/80 via-pink-300/35 to-transparent blur-xl animate-float-3"></div>
      <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial from-purple-500/80 via-purple-300/35 to-transparent blur-xl animate-float-4"></div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-80 animate-morph-1"></div>
      <div className="absolute bottom-1/4 right-1/4 w-88 h-88 bg-pink-400 rounded-full blur-3xl opacity-85 animate-morph-2"></div>

      <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-gradient-to-br from-purple-500/70 to-pink-500/70 rounded-full blur-2xl opacity-70 animate-morph-3"></div>
      <div className="absolute bottom-1/3 left-1/2 w-64 h-64 bg-gradient-to-tl from-pink-600/70 to-purple-400/70 rounded-full blur-2xl opacity-75 animate-morph-4"></div>

      <div className="absolute top-16 left-1/2 w-80 h-80 bg-purple-300 rounded-full blur-3xl opacity-60 transform -translate-x-1/2 animate-float-5"></div>
      <div className="absolute bottom-16 right-1/2 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-65 transform translate-x-1/2 animate-float-6"></div>
    </div>
  )
}

export default AuraEffect;