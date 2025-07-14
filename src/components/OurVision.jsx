function OurVision() {
  return (
    <section className="py-16 items-end flex gap-6 md:gap-12 flex-col">
      <div className="relative h-auto flex items-center w-full md:w-[50vw]">
        <h1 className="text-[var(--bg-green)] z-10 text-2xl md:text-3xl font-bold ml-24 md:ml-36 md:mt-4">
          Our Vision
        </h1>
        <img
          src="icons/Polygon1.svg"
          alt=""
          className="transform -scale-x-100 absolute w-full md:w-[55vw]"
        />
      </div>
      <div className="mt-8 px-8 md:px-16 flex flex-col w-full">
        <p className="w-full md:w-[40vw] self-end">
          Our mission is to redefine how Nigerians experience everyday services
          by building a transparent platform that connects verified artisans to
          customers putting safety, convenience, and quality service first.
        </p>
        <img
          src="icons/vision.svg"
          className="w-full md:w-[40vw] mt-8 md:-mt-36"
          alt=""
        />
      </div>
    </section>
  );
}

export default OurVision;
