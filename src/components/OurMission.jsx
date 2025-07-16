
// Import all SVGs from src/assets/icons eagerly
const iconImports = import.meta.glob('../assets/icons/*.svg', { eager: true });

// Create a map of icon file names (without extension) to their URLs
const iconMap = {};
for (const path in iconImports) {
  const fileName = path.split('/').pop().replace('.svg', '').toLowerCase();
  iconMap[fileName] = iconImports[path].default;
}

function OurMission() {
  return (
    <section className="py-16 flex gap-6 md:gap-12 flex-col">
      <div className="relative h-auto flex items-center w-full">
        <h1 className="text-[var(--bg-green)] z-10 text-2xl md:text-3xl font-bold ml-8 md:ml-16 md:mt-6">
          Our Mission
        </h1>
        <img
          src={iconMap["polygon1"]}
          alt=""
          className="absolute w-full md:w-[55vw]"
        />
      </div>
      <div className="mt-8 px-8 md:px-16 flex flex-col w-full">
        <p className="w-full md:w-[40vw]">
          Our mission is to redefine how Nigerians experience everyday services
          by building a transparent platform that connects verified artisans to
          customers putting safety, convenience, and quality service first.
        </p>
        <img
          src={iconMap["mission"]}
          className="w-full md:w-[50vw] mt-8 md:-mt-36 self-end"
          alt=""
        />
      </div>
    </section>
  );
}

export default OurMission;

