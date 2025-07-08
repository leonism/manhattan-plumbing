import React, { useEffect, useState, Suspense, lazy } from 'react';
import { Link, useParams } from 'react-router-dom';
import ServiceCard from '../components/Services/ServiceCard';
import SectionHeading from '../components/UI/SectionHeading';
import LayoutNewsPage from '../components/Layout/LayoutNewsPage';

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
  component?: React.ComponentType | React.LazyExoticComponent<React.ComponentType>;
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
  const { slug } = useParams<{ slug: string }>();
  const [services, setServices] = useState<Service[]>([]);
  const [CurrentServiceComponent, setCurrentServiceComponent] = useState<React.ComponentType | React.LazyExoticComponent<React.ComponentType> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadServices = async () => {
      setLoading(true);
      setError(null);
      const serviceModules = import.meta.glob('./services/*.tsx');
      const loadedServices: Service[] = [];
      let foundService: Service | null = null;

      for (const path in serviceModules) {
        const fileName = path.split('/').pop();
        if (fileName) {
          const serviceName = fileName
            .replace('.tsx', '')
            .replace(/([A-Z])/g, ' $1')
            .trim();
          const servicePath = `/services/${serviceName.toLowerCase().replace(/\s/g, '-')}`;
          const icon = serviceIconMap[serviceName] || serviceIconMap['Default'];

          const service: Service = {
            name: serviceName,
            path: servicePath,
            icon: icon,
          };

          if (slug && servicePath.endsWith(`/${slug}`)) {
            service.component = lazy(serviceModules[path] as () => Promise<{ default: React.ComponentType }>);
            foundService = service;
          }
          loadedServices.push(service);
        }
      }
      setServices(loadedServices);

      if (slug) {
        if (foundService && foundService.component) {
          setCurrentServiceComponent(foundService.component);
        } else {
          setError(`Service not found for slug: ${slug}`);
          setCurrentServiceComponent(null);
        }
      }
      setLoading(false);
    };

    loadServices();
  }, [slug]);

  if (slug) {
    if (loading) {
      return (
        <LayoutNewsPage>
          <div className="container mx-auto py-8 mt-20 text-center">
            <p>Loading service details...</p>
          </div>
        </LayoutNewsPage>
      );
    }

    if (error) {
      return (
        <LayoutNewsPage>
          <div className="container mx-auto py-8 mt-20 text-center text-red-500">
            <p>{error}</p>
            <p>Please check the URL or return to the <a href="/services" className="text-blue-500 hover:underline">services list</a>.</p>
          </div>
        </LayoutNewsPage>
      );
    }

    if (CurrentServiceComponent) {
      return (
        <Suspense fallback={
          <LayoutNewsPage>
            <div className="container mx-auto py-8 mt-20 text-center">
              <p>Loading service content...</p>
            </div>
          </LayoutNewsPage>
        }>
          <LayoutNewsPage>
            <CurrentServiceComponent />
          </LayoutNewsPage>
        </Suspense>
      );
    }

    return (
      <LayoutNewsPage>
        <div className="container mx-auto py-8 mt-20 text-center">
          <p>No service content to display.</p>
        </div>
      </LayoutNewsPage>
    );
  }

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