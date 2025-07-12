import { useState } from "react";

function WhatWeOffer() {
  const [slide, setSlide] = useState(0);
  const backgrounds = ['verified_artisans', 'marketplace', 'customer_support','localized_product','inclusive_onboarding','in_app_wallet'];
  const title = ['Verified Artisans', 'A Marketplace', 'Great Customer support system','Localized product thinking','Inclusive onboarding','In App Wallet'];
  const content = [
    'We verify artisans through a structured onboarding process to ensure reliability, safety, and professionalism.',
    'A list of trustworthy, recommended dealers to buy artisan-recommended tools, parts, and home essentials directly within the app',
    'Fast-response bot with human fallback',
    'Voice notes, local languages, intuitive interfaces for low-literacy users.',
    'Freemium access for artisans and tiered access to more tools.',
    'A secure digital wallet that lets users pay, store balance, and track transactions, all in one place.'
  ];

  let slides = []
  for(let i = 0;i < backgrounds.length;i++){
    slides.push(i)
  }


  function changeSlide(steps) {
    setSlide(prev => (prev + steps + backgrounds.length) % backgrounds.length);
  }


  const mainSlide = slide;
  const nextSlide = (slide + 1) % backgrounds.length;
  const afterNext = (slide + 2) % backgrounds.length;

  return (
    <section className={`my-16 py-16 px-8 md:pl-16 md:pr-0 flex gap-16 flex-col bg-[url(Images/${backgrounds[mainSlide]}_bg.jpg)] bg-[var(--bg-green)] bg-blend-multiply bg-cover bg-center`}>
      <h1 className="font-bold text-[var(--color-secondary-400)]">What We Offer</h1>
      <div className="flex gap-8 items-center w-full">
        <div className="flex flex-col gap-8 w-2/5">
          <h2 className="text-3xl font-bold text-[var(--color-secondary-400)]">{title[mainSlide]}</h2>
          <p className="text-[var(--color-secondary-400)]">{content[mainSlide]}</p>
          <button className="cursor-pointer mt-12 border bg-[var(--text-active)] w-fit text-background-dark py-2.5 px-8 font-medium border-none rounded-3xl justify-self-end">
            Get started
          </button>
        </div>

        <div className="flex gap-4 items-baseline w-3/5 overflow-hidden">
          <div className={`shrink-0 w-91.5 border-white rounded-4xl border-3 h-102.5 bg-[url(Images/${backgrounds[mainSlide]}.jpg)] bg-cover bg-center`} />
          <div className={`shrink-0 w-61  rounded-4xl h-75.5 bg-[url(Images/${backgrounds[nextSlide]}.jpg)] bg-cover bg-center`} onClick={() => changeSlide(1)} />
          <div className={`shrink-0 w-61  rounded-4xl h-75.5 bg-[url(Images/${backgrounds[afterNext]}.jpg)] bg-cover bg-center`} onClick={() => changeSlide(2)} />
        </div>
      </div>

      <form className="flex gap-4 self-center mt-8">
        {slides.map(e => {
          return  (<label htmlFor={`slide${e}`} key={e} className={`w-5 aspect-square rounded-full ${e == slide? `bg-[var(--text-active)]` : `bg-white`}`} onClick={()=> setSlide(e)}>
            <input type="radio" name="slider" className="hidden" id={`slide${e}`} /> 
          </label>)
        })}
      </form>
    </section>
  );
}

export default WhatWeOffer;
