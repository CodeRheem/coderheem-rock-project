import WhatWeDoCard from "./WhatWeDoCard";

function WhatWeDo() {
  return (
    <section className="py-16 px-8 md:px-16 flex gap-12 flex-col">
        <div className="w-full flex flex-col gap-4">
            <h1 className="text-3xl font-bold">What guides what we do</h1>
            <p>Everything we do at Sprintfixer is driven by core principles. We’re more than just a link between users and artisans, we’re restoring  trust in how services are found, booked, and delivered.</p>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-8 flex-nowrap overflow-y-hidden overflow-x-auto no-scrollbar">

            <WhatWeDoCard title='Accountability' content='We own our work and our outcomes. Users can trust us to show up and make things right.'/>
            <WhatWeDoCard title='Trust' content='We believe trust is everything, between customers and artisans, and between Sprint-Fixer and its users.'/>
            <WhatWeDoCard title='Innovation' content='We embrace technology that simplifies life and uplifts people.'/>
            <WhatWeDoCard title='Excellence' content='We deliver our best and give users a better experience than they paid for.'/>
            <WhatWeDoCard title='Dignity' content='Sprint-Fixer is a platform that restores dignity to the work'/>
            <WhatWeDoCard title='Community' content='Sprint-Fixer is a platform that restores dignity to the work'/>
            <WhatWeDoCard title='Hardwork' content='At Sprint-Fixer, hard work is visible, rated, and respected.'/>
        </div>

        

    </section>
  );
}

export default WhatWeDo;