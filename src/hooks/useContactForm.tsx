// Placeholder for useContactForm hook
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form data submitted:", formData);
    alert("Form submitted! Check the console for data.");
  };

  return { formData, handleChange, handleSubmit };
};

export default useContactForm;
