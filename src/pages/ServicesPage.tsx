import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/Services/ServiceCard';
import SectionHeading from '../components/UI/SectionHeading';

import {
  Wrench, // General service icon
  Droplet, // For DrainService, PipeService
  Thermometer, // For WaterHeaterService
  Hammer, // For RemodelingService
  Zap, // For EmergencyService
  ShowerHead, // For FixtureService
} from 'lucide-react';

interface Service {
  name: string;
  path: string;
  icon: React.ReactNode;
  component?: React.ComponentType;
}

const serviceIconMap: { [key: string]: React.ReactNode } = {
  'Drain Service': <Droplet size={24} />,
  'Emergency Service': <Zap size={24} />,
  'Fixture Service': <ShowerHead size={24} />,
  'Pipe Service': <Droplet size={24} />,
  'Remodeling Service': <Hammer size={24} />,
  'Water Heater Service': <Thermometer size={24} />,
  'Default': <Wrench size={24} />,
};

const ServicesPage: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const loadServices = async () => {
      const serviceModules = import.meta.glob('./services/*.tsx');
      const loadedServices: Service[] = [];

      for (const path in serviceModules) {
        const fileName = path.split('/').pop();
        if (fileName) {
          const serviceName = fileName
            .replace('.tsx', '')
            .replace(/([A-Z])/g, ' $1')
            .trim();
          const servicePath = `/services/${serviceName.toLowerCase().replace(/\s/g, '-')}`;
          const icon = serviceIconMap[serviceName] || serviceIconMap['Default'];
          loadedServices.push({
            name: serviceName,
            path: servicePath,
            icon: icon,
          });
        }
      }
      setServices(loadedServices);
    };

    loadServices();
  }, []);

  return (
    <div className="container mx-auto py-8 mt-20">
      <SectionHeading
        title="Our Services"
        subtitle="Comprehensive plumbing solutions for your home and business."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {services.map((service) => (
          <Link to={service.path} key={service.path}>
              <ServiceCard
                title={service.name}
                description={`Learn more about our ${service.name.toLowerCase()} services.`}
                icon={service.icon}
                href={service.path}
              />
            </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
