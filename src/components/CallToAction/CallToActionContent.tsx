import React from "react";

interface CallToActionContentProps {
  heading: string;
  text: string;
}

const CallToActionContent: React.FC<CallToActionContentProps> = ({
  heading,
  text,
}) => (
  <>
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
      {heading}
    </h2>
    <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">{text}</p>
  </>
);

export default CallToActionContent;
