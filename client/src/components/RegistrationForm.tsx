import { useState, useEffect, forwardRef } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Building,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface RegistrationFormProps {
  preSelectedCategory?: string;
  preSelectedType?: string;
}

export const RegistrationForm = forwardRef<HTMLDivElement, RegistrationFormProps>(
  ({ preSelectedCategory, preSelectedType }, ref) => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      institution: "",
      category: preSelectedCategory || "",
      type: preSelectedType || ""
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
      if (preSelectedCategory) {
        setFormData(prev => ({ ...prev, category: preSelectedCategory }));
      }
      if (preSelectedType) {
        setFormData(prev => ({ ...prev, type: preSelectedType }));
      }
    }, [preSelectedCategory, preSelectedType]);

    const validateForm = () => {
      const newErrors: Record<string, string> = {};

      if (!formData.name.trim()) {
        newErrors.name = "Name is required";
      }

      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Invalid email format";
      }

      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required";
      } else if (!/^\+?[\d\s\-()]+$/.test(formData.phone)) {
        newErrors.phone = "Invalid phone number";
      }

      if (!formData.institution.trim()) {
        newErrors.institution = "Institution is required";
      }

      if (!formData.category) {
        newErrors.category = "Please select a category";
      }

      if (!formData.type) {
        newErrors.type = "Please select a registration type";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      if (validateForm()) {
        setIsSubmitting(true);

        try {
          // Google Form submission URL (use the form action URL)
          // To get this URL:
          // 1. Open your Google Form
          // 2. Right-click and "View Page Source"
          // 3. Search for "action=" to find the form action URL
          // 4. It will look like: https://docs.google.com/forms/u/0/d/e/FORM_ID/formResponse

          const formId = "1FAIpQLSdMf96Ceed_Mjt6lpzjwwjofTsMkRXfh7N7EpAP4Mh7ibZjow";
          const formActionUrl = `https://docs.google.com/forms/u/0/d/e/${formId}/formResponse`;

          // You need to replace these entry IDs with your actual Google Form field entry IDs
          // To find entry IDs:
          // 1. Open your Google Form
          // 2. Click "Get pre-filled link"
          // 3. Fill sample data and click "Get Link"
          // 4. The URL will show entry IDs like entry.123456789

          const formDataToSubmit = new FormData();
          formDataToSubmit.append('entry.XXXXXX', formData.name);        // Replace with your Name field entry ID
          formDataToSubmit.append('entry.YYYYYY', formData.email);       // Replace with your Email field entry ID
          formDataToSubmit.append('entry.ZZZZZZ', formData.phone);       // Replace with your Phone field entry ID
          formDataToSubmit.append('entry.AAAAAA', formData.institution); // Replace with your Institution field entry ID
          formDataToSubmit.append('entry.BBBBBB', formData.category);    // Replace with your Category field entry ID
          formDataToSubmit.append('entry.CCCCCC', formData.type);        // Replace with your Type field entry ID

          // Submit to Google Forms using a hidden iframe to avoid CORS issues
          const iframe = document.createElement('iframe');
          iframe.style.display = 'none';
          iframe.name = 'hidden-iframe';
          document.body.appendChild(iframe);

          const form = document.createElement('form');
          form.method = 'POST';
          form.action = formActionUrl;
          form.target = 'hidden-iframe';

          // Append form data as hidden inputs
          formDataToSubmit.forEach((value, key) => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = value as string;
            form.appendChild(input);
          });

          document.body.appendChild(form);
          form.submit();

          // Clean up
          setTimeout(() => {
            document.body.removeChild(form);
            document.body.removeChild(iframe);
          }, 1000);

          // Show success message
          setIsSubmitted(true);
          setIsSubmitting(false);
        } catch (error) {
          console.error('Submission error:', error);
          setIsSubmitting(false);
          alert('There was an error submitting your registration. Please try again.');
        }
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
      // Clear error when user starts typing
      if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: "" }));
      }
    };

    if (isSubmitted) {
      return (
        <div ref={ref} className="w-full max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-slate-200 rounded-2xl shadow-xl p-6 md:p-12 text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Registration Successful!
            </h3>
            <p className="text-lg text-slate-600 mb-2">
              Thank you for registering for AICDF 2026
            </p>
            <p className="text-slate-500 mb-8">
              You will receive a confirmation email shortly at <strong>{formData.email}</strong>
            </p>
            <div className="bg-slate-50 rounded-lg p-6 text-left">
              <h4 className="font-semibold text-slate-900 mb-3">Registration Details:</h4>
              <div className="space-y-2 text-sm text-slate-600">
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Phone:</strong> {formData.phone}</p>
                <p><strong>Institution:</strong> {formData.institution}</p>
                <p><strong>Category:</strong> {formData.category}</p>
                <p><strong>Type:</strong> {formData.type}</p>
              </div>
            </div>
            <Button
              onClick={() => window.location.href = '/'}
              className="mt-8 bg-gradient-to-r from-primary to-blue-600 text-white"
            >
              Return to Home
            </Button>
          </motion.div>
        </div>
      );
    }

    return (
      <div ref={ref} className="w-full max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-slate-200 rounded-2xl shadow-xl p-6 md:p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-slate-900 mb-2">
              Complete Your Registration
            </h3>
            <p className="text-slate-600">
              Fill in your details to register for AICDF 2026
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <Label htmlFor="name" className="text-slate-700 font-medium mb-2 flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                Full Name *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                disabled={isSubmitting}
                className={cn(
                  "mt-1",
                  errors.name && "border-red-500 focus:ring-red-500"
                )}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <Label htmlFor="email" className="text-slate-700 font-medium mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                disabled={isSubmitting}
                className={cn(
                  "mt-1",
                  errors.email && "border-red-500 focus:ring-red-500"
                )}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <Label htmlFor="phone" className="text-slate-700 font-medium mb-2 flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                Phone Number *
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 123 456 7890"
                disabled={isSubmitting}
                className={cn(
                  "mt-1",
                  errors.phone && "border-red-500 focus:ring-red-500"
                )}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Institution Field */}
            <div>
              <Label htmlFor="institution" className="text-slate-700 font-medium mb-2 flex items-center gap-2">
                <Building className="w-4 h-4 text-primary" />
                Institution/Organization *
              </Label>
              <Input
                id="institution"
                name="institution"
                type="text"
                value={formData.institution}
                onChange={handleChange}
                placeholder="Your university or organization"
                disabled={isSubmitting}
                className={cn(
                  "mt-1",
                  errors.institution && "border-red-500 focus:ring-red-500"
                )}
              />
              {errors.institution && (
                <p className="text-red-500 text-sm mt-1">{errors.institution}</p>
              )}
            </div>

            {/* Category Selection */}
            <div>
              <Label htmlFor="category" className="text-slate-700 font-medium mb-2 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-primary" />
                Registration Category *
              </Label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                disabled={isSubmitting}
                className={cn(
                  "mt-1 w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                  errors.category && "border-red-500 focus:ring-red-500"
                )}
              >
                <option value="">Select a category</option>
                <option value="IEEE Member/Student">IEEE Member/Student</option>
                <option value="Non-IEEE Member">Non-IEEE Member</option>
                <option value="Industry Professional">Industry Professional</option>
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">{errors.category}</p>
              )}
            </div>

            {/* Registration Type */}
            <div>
              <Label htmlFor="type" className="text-slate-700 font-medium mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Registration Type *
              </Label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                disabled={isSubmitting}
                className={cn(
                  "mt-1 w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                  errors.type && "border-red-500 focus:ring-red-500"
                )}
              >
                <option value="">Select registration type</option>
                <option value="Early Bird">Early Bird</option>
                <option value="Regular">Regular</option>
                <option value="Virtual">Virtual</option>
              </select>
              {errors.type && (
                <p className="text-red-500 text-sm mt-1">{errors.type}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-blue-600 text-white font-semibold py-6 text-lg hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Complete Registration
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </div>

            <p className="text-sm text-slate-500 text-center mt-4">
              * All fields are required
            </p>
          </form>
        </motion.div>
      </div>
    );
  }
);

RegistrationForm.displayName = "RegistrationForm";
