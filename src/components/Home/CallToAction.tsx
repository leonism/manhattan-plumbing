import React from "react";
import CallToActionBackground from "../CallToAction/CallToActionBackground";
import CallToActionContent from "../CallToAction/CallToActionContent";
import CallToActionButtons from "../CallToAction/CallToActionButtons";

const CallToAction: React.FC = () => {
  const backgroundImage =
    "https://images.pexels.com/photos/6492402/pexels-photo-6492402.jpeg?auto=compress&cs=tinysrgb&w=1800";
  const heading = "Plumbing Emergency? We're Available 24/7";
  const text =
    "Don't let plumbing problems disrupt your life. Our emergency response team is ready to help you any time, day or night.";
  const phoneNumber = "+12125551234";
  const scheduleUrl = "#contact";

  return (
    <section className="py-20 relative">
      <CallToActionBackground imageUrl={backgroundImage} />
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <CallToActionContent
          heading={heading}
          text={text}
        />
        <CallToActionButtons
          phoneNumber={phoneNumber}
          scheduleUrl={scheduleUrl}
        />
      </div>
    </section>
  );
};

export default CallToAction;
