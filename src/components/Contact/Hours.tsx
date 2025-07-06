import React from "react";
import { Clock } from "lucide-react";
import ContactDetail from "./ContactDetail";

const Hours: React.FC = () => (
  <ContactDetail
    icon={<Clock size={24} />}
    title="Business Hours">
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm lg:text-base">Monday - Friday:</span>
        <span className="ml-8 text-sm lg:text-base">7:00 AM - 7:00 PM</span>
      </div>
      <div className="flex justify-between">
        <span className="text-sm lg:text-base">Saturday:</span>
        <span className="ml-8 text-sm lg:text-base">8:00 AM - 5:00 PM</span>
      </div>
      <div className="flex justify-between">
        <span className="text-sm lg:text-base">Sunday:</span>
        <span className="ml-8 text-sm lg:text-base">Emergencies Only</span>
      </div>
    </div>
  </ContactDetail>
);

export default Hours;
