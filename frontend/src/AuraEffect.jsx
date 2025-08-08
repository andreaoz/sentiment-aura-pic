const AuraEffect = ({dominantEmotion}) => {

  let colors;

  switch (dominantEmotion) {
    case "anger":
      colors = {
        from1: "from-red-600/80",
        via1: "via-red-400/30",
        from2: "from-red-600/80",
        via2: "via-red-400/30",
        from3: "from-red-500/80",
        via3: "via-red-300/35",
        from4: "from-red-500/80",
        via4: "via-red-300/35",
        bg1: "bg-red-400",
        bg2: "bg-red-400",
        bg3From: "from-red-500/70",
        bg3To: "to-red-500/70",
        bg4From: "from-red-600/70",
        bg4To: "to-red-400/70",
        bg5: "bg-red-300",
        bg6: "bg-red-300",
      };
    break;

    case "joy":
      colors = {
        from1: "from-yellow-400/80",
        via1: "via-yellow-300/30",
        from2: "from-yellow-400/80",
        via2: "via-yellow-300/30",
        from3: "from-yellow-300/80",
        via3: "via-yellow-200/35",
        from4: "from-yellow-300/80",
        via4: "via-yellow-200/35",
        bg1: "bg-yellow-300",
        bg2: "bg-yellow-300",
        bg3From: "from-yellow-400/70",
        bg3To: "to-yellow-400/70",
        bg4From: "from-yellow-500/70",
        bg4To: "to-yellow-300/70",
        bg5: "bg-yellow-200",
        bg6: "bg-yellow-200",
      };
      break;
      
      case "disgust":
      colors = {
        from1: "from-lime-400/80",
        via1: "via-lime-300/30",
        from2: "from-lime-400/80",
        via2: "via-lime-300/30",
        from3: "from-lime-300/80",
        via3: "via-lime-200/35",
        from4: "from-lime-300/80",
        via4: "via-lime-200/35",
        bg1: "bg-lime-300",
        bg2: "bg-lime-300",
        bg3From: "from-lime-400/70",
        bg3To: "to-lime-400/70",
        bg4From: "from-lime-500/70",
        bg4To: "to-lime-300/70",
        bg5: "bg-lime-200",
        bg6: "bg-lime-200",
      };
      break;

    case "fear":
      colors = {
        from1: "from-violet-400/80",
        via1: "via-violet-300/30",
        from2: "from-violet-400/80",
        via2: "via-violet-300/30",
        from3: "from-violet-300/80",
        via3: "via-violet-200/35",
        from4: "from-violet-300/80",
        via4: "via-violet-200/35",
        bg1: "bg-violet-300",
        bg2: "bg-violet-300",
        bg3From: "from-violet-400/70",
        bg3To: "to-violet-400/70",
        bg4From: "from-violet-500/70",
        bg4To: "to-violet-300/70",
        bg5: "bg-violet-200",
        bg6: "bg-violet-200",
      };
      break;

    case "sadness":
      colors = {
        from1: "from-sky-400/80",
        via1: "via-sky-300/30",
        from2: "from-sky-400/80",
        via2: "via-sky-300/30",
        from3: "from-sky-300/80",
        via3: "via-sky-200/35",
        from4: "from-sky-300/80",
        via4: "via-sky-200/35",
        bg1: "bg-sky-300",
        bg2: "bg-sky-300",
        bg3From: "from-sky-400/70",
        bg3To: "to-sky-400/70",
        bg4From: "from-sky-500/70",
        bg4To: "to-sky-300/70",
        bg5: "bg-sky-200",
        bg6: "bg-sky-200",
      };
      break;

    default:
      colors = {
        from1: "from-neutral-600/80",
        via1: "via-neutral-400/30",
        from2: "from-stone-600/80",
        via2: "via-stone-400/30",
        from3: "from-stone-500/80",
        via3: "via-stone-300/35",
        from4: "from-neutral-500/80",
        via4: "via-neutral-300/35",
        bg1: "bg-neutral-400",
        bg2: "bg-stone-400",
        bg3From: "from-neutral-500/70",
        bg3To: "to-stone-500/70",
        bg4From: "from-stone-600/70",
        bg4To: "to-neutral-400/70",
        bg5: "bg-neutral-300",
        bg6: "bg-stone-300",
      };
  }

  return (
    <div className="absolute inset-0 opacity-50 pointer-events-none bg-stone-50">
      <div className={`absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial ${colors.from1} ${colors.via1} to-transparent blur-xl animate-float-1`}></div>
      <div className={`absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial ${colors.from2} ${colors.via2} to-transparent blur-xl animate-float-2`}></div>
      <div className={`absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-radial ${colors.from3} ${colors.via3} to-transparent blur-xl animate-float-3`}></div>
      <div className={`absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial ${colors.from4} ${colors.via4} to-transparent blur-xl animate-float-4`}></div>
      <div className={`absolute top-1/4 left-1/4 w-96 h-96 ${colors.bg1} rounded-full blur-3xl opacity-80 animate-morph-1`}></div>
      <div className={`absolute bottom-1/4 right-1/4 w-88 h-88 ${colors.bg2} rounded-full blur-3xl opacity-85 animate-morph-2`}></div>
      <div className={`absolute top-1/3 right-1/3 w-72 h-72 bg-gradient-to-br ${colors.bg3From} ${colors.bg3To} rounded-full blur-2xl opacity-70 animate-morph-3`}></div>
      <div className={`absolute bottom-1/3 left-1/2 w-64 h-64 bg-gradient-to-tl ${colors.bg4From} ${colors.bg4To} rounded-full blur-2xl opacity-75 animate-morph-4`}></div>
      <div className={`absolute top-16 left-1/2 w-80 h-80 ${colors.bg5} rounded-full blur-3xl opacity-60 transform -translate-x-1/2 animate-float-5`}></div>
      <div className={`absolute bottom-16 right-1/2 w-72 h-72 ${colors.bg6} rounded-full blur-3xl opacity-65 transform translate-x-1/2 animate-float-6`}></div>
    </div>
  )
}

export default AuraEffect;