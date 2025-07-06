import React from "react";
import { IconType } from "lucide-react";

interface ContactDetailProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const ContactDetail: React.FC<ContactDetailProps> = ({
  icon,
  title,
  children,
}) => (
  <article className="flex items-start gap-4 mb-6">
    <div className="text-blue-600 dark:text-blue-400 flex-shrink-0">{icon}</div>
    <div>
      <h4 className="font-semibold text-slate-800 dark:text-white mb-1 text-lg">
        {title}
      </h4>
      <div className="text-slate-600 dark:text-slate-300 text-base">
        {children}
      </div>
    </div>
  </article>
);

export default ContactDetail;
