import React from "react";

interface HeroButtonProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const HeroButton: React.FC<HeroButtonProps> = ({
  href,
  children,
  icon: Icon,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = href;
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex justify-center items-center px-6 py-3 font-medium text-white bg-blue-600 rounded-md border-white transition-colors duration-200 border-1 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
      {Icon && (
        <Icon
          className="mr-2 w-6 h-6"
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </button>
  );
};

export default HeroButton;
