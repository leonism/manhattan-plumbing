import React from "react";

interface CallToActionBackgroundProps {
  imageUrl: string;
}

const CallToActionBackground: React.FC<CallToActionBackgroundProps> = ({
  imageUrl,
}) => (
  <div
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{
      backgroundImage: `url(${imageUrl})`,
      filter: "brightness(0.3)",
    }}
    aria-hidden="true"
  />
);

export default CallToActionBackground;
