import React, { useEffect, useState, Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
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

const IndividualServicePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [CurrentServiceComponent, setCurrentServiceComponent] = useState<React.ComponentType | React.LazyExoticComponent<React.ComponentType> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadIndividualService = async () => {
      setLoading(true);
      setError(null);
      if (!slug) {
        setError("Service not found: No slug provided.");
        setLoading(false);
        return;
      }

      try {
        const serviceModules = import.meta.glob('./services/*.tsx');
        let foundService: Service | null = null;

        for (const path in serviceModules) {
          const fileName = path.split('/').pop();
          if (fileName) {
            const serviceName = fileName
              .replace('.tsx', '')
              .replace(/([A-Z])/g, ' $1')
              .trim();
            const servicePath = serviceName.toLowerCase().replace(/\s/g, '-');

            if (servicePath === slug) {
              foundService = {
                name: serviceName,
                path: `/services/${servicePath}`,
                icon: serviceIconMap[serviceName] || serviceIconMap['Default'],
                component: lazy(serviceModules[path] as () => Promise<{ default: React.ComponentType }>),
              };
              break;
            }
          }
        }

        if (foundService && foundService.component) {
          setCurrentServiceComponent(foundService.component);
        } else {
          setError(`Service not found for slug: ${slug}`);
          setCurrentServiceComponent(null);
        }
      } catch (err) {
        console.error("Failed to load service component:", err);
        setError("Failed to load service content. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadIndividualService();
  }, [slug]);

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
};

export default IndividualServicePage;
