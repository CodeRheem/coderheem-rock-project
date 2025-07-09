import { useEffect, useState } from "react";
import { BsFillCarFrontFill } from "react-icons/bs";
import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

import Marquee from "react-fast-marquee";
import automobile from "../../assets/automobile.jpg";
import furniture from "../../assets/furniture.jpg";
import hairdresser from "../../assets/hairdresser.jpg";
import heroImg from "../../assets/hero-bg.svg";
import engineer from "../../assets/lady-engineer.jpg";
import WorkTogether from "../../components/WorkTogether";
import FeatureList from "./FeatureList";
import JobList from "./JobList";

const steps = [
  {
    id: 1,
    icon: <FaMapMarkerAlt size={32} />,
    title: "Book an Artisan",
    description: "Booking an artisan on our platform is simple and seamless.",
  },
  {
    id: 2,
    icon: <FaCalendar size={32} />,
    title: "They Arrive and Work",
    description: "Track job progress and receive receipts",
  },
  {
    id: 3,
    icon: <BsFillCarFrontFill size={32} />,
    title: "You relax and Enjoy Life",
    description:
      "Our goal is to make hiring skilled, reliable artisans as easy and stress-free as possible.",
  },
];

function HomePage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {/* === Hero Section === */}
      <section
        className={`relative mt-2 w-full min-h-[50vh] sm:min-h-[60vh] lg:min-h-[83vh] 2xl:min-h-[98vh] bg-no-repeat bg-center bg-cover`}
        style={{
          backgroundImage: `url("${heroImg}")`,
          backgroundSize: windowWidth >= 1200 ? "cover" : "contain",
        }}
      >
        <div className="container mx-auto pt-16 relative">
          {/* === Typewriter text === */}
          <div className="absolute left-2 top-28 2xl:top-56 text-white text-base sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl 2xl:text-8xl font-medium">
            <Typewriter
              words={["Skilled Hands.", "Reliable Service.", "Easy Delivery."]}
              loop={0}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={800}
              cursor={false}
            />
          </div>

          {/* === Subtitle & Button === */}
          <section className="relative mt-28 sm:mt-40 lg:mt-52 2xl:mt-90 w-[90%] max-w-[808px]">
            <p className="text-[var(--text-secondary)] font-normal text-sm sm:text-base leading-snug">
              Get access to trusted artisans for your home or business.
              Plumbers, electricians, tailors, and more — all in one secure,
              easy-to-use app.
            </p>
            <button className="mt-4 md:mt-18 px-6 py-2 sm:px-8 sm:py-2.5 bg-[var(--bg-btn)] text-base lg:text-2xl rounded-full font-normal">
              Let’s get you started
            </button>
          </section>
        </div>
      </section>

      {/* === Our Story Section === */}
      <section className="mt-8 container mx-auto px-4 pb-1">
        <header className="text-center capitalize">
          <h3 className="text-[32px] font-bold leading-10 tracking-tight">
            Our story
          </h3>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-12 pt-14 sm:pt-24 pb-40">
          {/* === Image Grid === */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <img
              src={automobile}
              alt="automobile"
              className="w-full h-full object-cover rounded-[2rem]"
            />
            <img
              src={furniture}
              alt="an artisan fixing a furniture"
              className="w-full h-full"
            />
            <img
              src={engineer}
              alt="an engineer wielding a machine"
              className="w-full h-full "
            />
            <img
              src={hairdresser}
              alt="a hairdresser dressing hair"
              className="w-full h-full object-cover rounded-[2rem]"
            />
          </div>

          {/* === Text Section === */}
          <article className="max-w-prose xl:max-w-[666px]">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-dark pt-4 sm:pt-0 text-center lg:text-left">
              The Sprintfixer Story
            </h2>
            <div className="pt-5 text-lg leading-relaxed text-[var(--text-secondary)] space-y-4">
              <p>
                Ever tried finding a reliable artisan in Nigeria? It can be
                frustrating — long waits, no shows, poor delivery... you name
                it.
              </p>
              <p>
                Sprintfixer was born out of these everyday struggles. We saw how
                hard it was for people to get quality service without stress and
                we decided to change that.
              </p>
              <p>
                We aim to connect you with trusted, verified artisans who get
                the job done — no drama, no hassle.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* === How It Works === */}
      <section className="container mx-auto px-4 pb-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How Sprintfixer Works
          </h2>
          <p className="text-lg text-gray-600">
            Need a Service? Tap. Book. Sorted.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <li
              key={step.id}
              className="flex flex-col items-center text-center gap-4 p-6"
            >
              <div className="p-6 bg-[var(--primary-color)]/14 text-[var(--primary-color)] rounded-[30px]">
                {step.icon}
              </div>
              <h4 className="text-2xl font-semibold text-dark">{step.title}</h4>
              <p className="font-[sans] text-base font-medium text-dark max-w-[276px]">
                {step.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* === Job List Section === */}
      <section className="container mx-auto px-3 py-6">
        <header className="text-center font-bold pb-16">
          <h3 className="text-base md:text-2xl 2xl:text-[32px]">
            Think of a service...we've got it!
          </h3>
        </header>
        <div overflow-hidden>
          <Marquee
            direction="left"
            gradient={true}
            pauseOnHover={true}
            gradientWidth={100}
            autoFill={true}
            style={{ display: "flex", gap: "1rem" }}
          >
            <JobList />
          </Marquee>
        </div>
      </section>

      {/* === Our Sure Plug section === */}
      <section className="container mx-auto pt-32 pb-[19px] px-3 flex flex-col lg:flex-row justify-between gap-16 md:gap-10 mb-8">
        <article className=" self-start lg:self-center text-left max-w-[600px]">
          <h4 className="text-base md:text-3xl font-bold">
            Let us be your sure plug
          </h4>
          <p className="my-6 text-[20px] font-[sans] font-medium">
            We’re redesigning how the service industry operates. Making quality
            service delivery something users can finally count on.
          </p>
          <button className="mt-6 bg-yellow-300 text-black font-semibold py-2 px-4 rounded-full hover:bg-yellow-400 transition w-fit">
            Let's get you started
          </button>
        </article>
        <FeatureList />
      </section>
      {/* Let's Work Together Section */}
      <WorkTogether />
    </>
  );
}

export default HomePage;
