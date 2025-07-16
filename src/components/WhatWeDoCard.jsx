// Import all SVGs from assets/icons folder
const iconImports = import.meta.glob('../assets/icons/*.svg', { eager: true });

// Map file names (like 'verified', 'marketplace') to the imported SVG paths
const iconMap = {};
for (const path in iconImports) {
  const name = path.split('/').pop().replace('.svg', '').toLowerCase();
  iconMap[name] = iconImports[path].default;
}

function WhatWeDoCard({ icon, title, content }) {
  const iconKey = title.toLowerCase();
  const iconSrc = iconMap[iconKey];

  return (
    <div className="w-full md:min-w-79 relative flex flex-col items-center justify-center gap-8 pb-8 h-104 border-1 border-[var(--text-main)] bg-[var(--bg-green)]">
      {iconSrc ? (
        <img src={iconSrc} alt={icon} className="w-25" />
      ) : (
        <p className="text-red-500">Icon not found</p>
      )}
      <h2 className="font-bold text-[var(--text-tertiary)]">{title}</h2>
      <div className="bg-[var(--bg-main)] w-full p-4 h-29.5 absolute bottom-0">
        <p>{content}</p>
      </div>
    </div>
  );
}

export default WhatWeDoCard;

