import { ImPriceTags } from "react-icons/im";
import { MdOutlineSupportAgent } from "react-icons/md";
import { PiMapPinFill } from "react-icons/pi";

const FeatureList = () => {
  const features = [
    {
      icon: <MdOutlineSupportAgent size={24} />,
      title: "Vetted Professionals",
      desc: "Every artisan is screened, background-checked, and verified.",
    },
    {
      icon: <ImPriceTags size={24} />,
      title: "In-App Wallet",
      desc: "Safe, seamless payments with full transaction history.",
    },
    {
      icon: <PiMapPinFill size={24} />,
      title: "Real-Time Chat & Tracking",
      desc: "Quality control that protects both sides.",
    },
  ];

  return (
    <article className="self-start">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start mb-[45px]">
          <div className="p-[14px] rounded bg-[var(--primary-color)] self-start mr-5">
            <span className="text-white">{feature.icon}</span>
          </div>
          <div className="">
            <h4 className="font-bold text-[20px] tracking-[0.02] leading-[30%] mb-4.5">
              {feature.title}
            </h4>
            <p className="text-dark max-w-[500px] leading-10 font-[sans] text-[20px]">
              {feature.desc}
            </p>
          </div>
        </div>
      ))}
    </article>
  );
};

export default FeatureList;
