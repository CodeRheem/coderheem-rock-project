import customerSupport from "../assets/customerSupport.jpg";

function WorkTogether() {
  return (
    <section className="container mx-auto pt-[78px] pb-[75px] px-3 lg:px-0">
      <header className="text-center text-3xl md:text-4xl mb-24">
        <h2 className="uppercase font-bold">Let's work together</h2>
      </header>
      <section className="flex flex-col md:flex-row md:justify-between gap-12">
        {/* === Left Section */}
        <article className="self-center">
          <header className="font-bold mb-8">
            <h3 className="uppercase text-2xl md:text-[32px] tracking-[-4%] leading-[41.6%]">
              offer a service!
            </h3>
          </header>
          <div className="max-w-full md:max-w-[580px]">
            <p className="font-[sans] text-base md:text-xl tracking-[-4%] font-medium">
              Join Sprintfixer and take your work to the next level. From
              verified job opportunities to digital tools that help you track
              earnings, chat with customers, and build your reputation, this
              platform was made for you.
            </p>
          </div>
          <button className="mt-12 self-end bg-[var(--bg-btn)] py-2.5 px-8 rounded-full cursor-pointer font-[sans] text-xl font-medium">
            Register Here
          </button>
        </article>
        {/* Right section */}
        <div className="w-full md:max-w-[579px]">
          <img
            src={customerSupport}
            alt="customer support"
            className="object-cover h-auto w-full md:max-w-[579px] lg:max-h-[386px]"
          />
        </div>
      </section>
    </section>
  );
}

export default WorkTogether;