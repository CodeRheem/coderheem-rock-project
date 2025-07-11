function WhatWeDoCard({icon,title,content}) {

  return (
    <div className="w-full md:min-w-79 relative flex flex-col items-center justify-center gap-8 pb-8 h-104 border-1 border-[var(--text-main)] bg-[var(--bg-green)]">
        <img src={`icons/${title.toLowerCase()}.svg`} alt={icon} className="w-25"/>
        <h2 className="font-bold text-[var(--text-tertiary)]">{title}</h2>
        <div className="bg-[var(--bg-main)] w-full p-4 h-29.5 absolute bottom-0">
            <p>{content}</p>
        </div>
        
    </div>
  );
}

export default WhatWeDoCard;