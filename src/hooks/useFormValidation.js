import { useState } from "react";

export const useFormValidation = () => {
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case "name":
        if (!value.trim()) {
          newErrors.name = "Name is required";
        } else if (value.trim().length < 2) {
          newErrors.name = "Name must be at least 2 characters";
        } else {
          delete newErrors.name;
        }
        break;

      case "email":
        if (!value.trim()) {
          newErrors.email = "Email is required";
        } else if (!validateEmail(value)) {
          newErrors.email = "Please enter a valid email address";
        } else {
          delete newErrors.email;
        }
        break;

      case "message":
        if (!value.trim()) {
          newErrors.message = "Message is required";
        } else if (value.trim().length < 10) {
          newErrors.message = "Message must be at least 10 characters";
        } else {
          delete newErrors.message;
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);
    return !newErrors[name];
  };

  const validateForm = (formData) => {
    const newErrors = {};

    Object.keys(formData).forEach((field) => {
      const value = formData[field];
      
      switch (field) {
        case "name":
          if (!value || !value.trim()) {
            newErrors.name = "Name is required";
          } else if (value.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters";
          }
          break;
        case "email":
          if (!value || !value.trim()) {
            newErrors.email = "Email is required";
          } else if (!validateEmail(value)) {
            newErrors.email = "Please enter a valid email address";
          }
          break;
        case "message":
          if (!value || !value.trim()) {
            newErrors.message = "Message is required";
          } else if (value.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters";
          }
          break;
        default:
          break;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetErrors = () => {
    setErrors({});
  };

  return {
    errors,
    validateField,
    validateForm,
    resetErrors,
  };
};

