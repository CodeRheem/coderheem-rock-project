function WhoSection() {
  return (
    <section className="py-16 px-8 md:px-16 flex gap-6 md:gap-12 flex-col md:items-center">
      <h1 className="md:text-center text-3xl font-bold">Who we are</h1>

      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="inline-flex w-full md:w-[30vw] text-base/loose tracking-wide md:text-justify">
          We’re a Servi-Tech platform that connects Nigerians to trusted, verified artisans, plumbers, electricians, painters, and more. We’re here to take the guesswork out of home services.
        </p>

        <div
          className="aspect-square inline-flex w-[300px] border-12 border-[var(--text-active)] rounded-full bg-cover"
          style={{
            backgroundImage: `url(/Images/whosection_image.png)`,
            backgroundPosition: '0px -30px'
          }}
        ></div>

        <p className="inline-flex w-full md:w-[30vw] text-base/loose tracking-wide md:text-justify">
          We are offering speed, security, and reliability at your fingertips, while empowering artisans with steady jobs, visibility, and secure payments. At Sprintfixer it’s not just about connecting; we’re here to restore trust in the process.
        </p>
      </div>
    </section>
  );
}

export default WhoSection;
