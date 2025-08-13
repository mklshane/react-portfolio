import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Github
} from "lucide-react";
import React, { useState } from "react";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success"); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Check if all fields are filled
      if (formData.name && formData.email && formData.message) {
        setAlertType("success");
        setAlertMessage("Your message has been sent successfully!");
        // Reset form
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setAlertType("error");
        setAlertMessage("Please fill in all fields.");
      }
      setShowAlert(true);

      // Hide alert after 5 seconds
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }, 1500);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-secondary/30 min-h-screen"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-didot">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Feel free to reach out. I'm always open to discussing new
            opportunities.
          </p>
        </motion.div>

        {/* Alert Notification */}
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-4 right-4 md:right-8 p-4 rounded-md shadow-lg z-50 ${
              alertType === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {alertType === "success" ? (
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">{alertMessage}</p>
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <motion.div variants={itemVariants} className="space-y-8 p-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center text-left">
              <motion.div
                variants={itemVariants}
                className="flex items-start space-x-4"
              >
                <div className="p-3 rounded-full bg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:shaneestrellanes@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    shaneestrellanes@gmail.com
                  </a>
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex items-start space-x-4"
              >
                <div className="p-3 rounded-full bg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+639620670220"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +63 9620670220
                  </a>
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex items-start space-x-4"
              >
                <div className="p-3 rounded-full bg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Lipa City, Batangas, Philippines
                  </a>
                </div>
              </motion.div>
            </div>
            <motion.div variants={itemVariants} className="pt-8 ">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center glass-morphism py-2 rounded-2xl">
                <motion.a
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/mikaela-shane-estrellanes-1a962b378/"
                  target="_blank"
                >
                  <Linkedin />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/mklshane"
                  target="_blank"
                >
                  <Github />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.facebook.com/mikaelashane.estrellanes/"
                  target="_blank"
                >
                  <Facebook />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass-morphism p-8 rounded-lg shadow-xs"
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-mb border border-input bg-background focus:outline-hidden focus:ring-2-color focus:ring-primary"
                  placeholder="Shane Estrellanes..."
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-mb border border-input bg-background focus:outline-hidden focus:ring-2-color focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-mb border border-input bg-background focus:outline-hidden focus:ring-2-color focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  className={cn(
                    "primary-btn font-sora w-full flex items-center justify-center gap-2",
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  )}
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
