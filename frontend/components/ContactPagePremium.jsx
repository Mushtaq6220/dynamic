"use client";

import { useState, useEffect } from "react";
import { UserIcon, EnvelopeIcon, PhoneIcon, MapPinIcon, ChevronDownIcon, SunIcon, MoonIcon, ChatBubbleLeftRightIcon, PaperAirplaneIcon, TagIcon } from "@heroicons/react/24/outline";
import { createInquiry } from "../services/api";
import "../styles/premium-contact.css";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactPagePremium() {
  const [formData, setFormData] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize theme from global context or local storage
  useEffect(() => {
    setMounted(true);
    const root = document.documentElement;
    const isDarkMode = root.getAttribute("data-theme") === "dark" || root.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    const root = document.documentElement;
    if (!isDark) {
      root.setAttribute("data-theme", "dark");
      root.classList.add("dark");
    } else {
      root.removeAttribute("data-theme");
      root.classList.remove("dark");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await createInquiry(formData);
      alert("Inquiry submitted successfully! We will get back to you soon.");
      setFormData(initialForm);
    } catch (err) {
      alert("Failed to submit inquiry. Please try again or contact us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className={`premium-contact-wrapper ${isDark ? "dark" : ""}`}>
      {/* Background Anime Blobs */}
      <div className="pc-glow-blob pc-glow-1"></div>
      <div className="pc-glow-blob pc-glow-2"></div>

      {/* Theme Toggle Button */}
      <button 
        className="pc-theme-toggle" 
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        <SunIcon className="pc-theme-icon pc-sun" />
        <MoonIcon className="pc-theme-icon pc-moon" />
      </button>

      <div className="pc-container">
        <header className="pc-header">
          <span className="pc-eyebrow">Contact Us</span>
          <h1 className="pc-title">Let's plan your journey</h1>
          <p className="pc-description">
            Share your travel month, package preference, and family details. 
            Experience a smooth, premium booking journey with our dedicated support team.
          </p>
        </header>

        <div className="pc-grid">
          {/* Inquiry Form Card */}
          <div className="pc-glass-card">
            <h2 className="pc-section-title">Send an Inquiry</h2>
            <form onSubmit={handleSubmit}>
              <div className="pc-form-row">
                <div className="pc-form-group">
                  <div className="pc-input-wrapper">
                    <UserIcon className="pc-input-icon" />
                    <input
                      type="text"
                      name="name"
                      id="pc-name"
                      className="pc-input"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="pc-name" className="pc-label">Full Name</label>
                  </div>
                </div>
                
                <div className="pc-form-group">
                  <div className="pc-input-wrapper">
                    <EnvelopeIcon className="pc-input-icon" />
                    <input
                      type="email"
                      name="email"
                      id="pc-email"
                      className="pc-input"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="pc-email" className="pc-label">Email Address</label>
                  </div>
                </div>
              </div>

              <div className="pc-form-row">
                <div className="pc-form-group">
                  <div className="pc-input-wrapper">
                    <PhoneIcon className="pc-input-icon" />
                    <input
                      type="tel"
                      name="phone"
                      id="pc-phone"
                      className="pc-input"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="pc-phone" className="pc-label">Phone Number</label>
                  </div>
                </div>

                <div className="pc-form-group">
                  <div className="pc-input-wrapper">
                    <TagIcon className="pc-input-icon" />
                    <input
                      type="text"
                      name="subject"
                      id="pc-subject"
                      className="pc-input"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="pc-subject" className="pc-label">Subject</label>
                  </div>
                </div>
              </div>

              <div className="pc-form-group">
                <div className="pc-input-wrapper">
                  <EnvelopeIcon className="pc-input-icon" />
                  <textarea
                    name="message"
                    id="pc-message"
                    className="pc-input"
                    placeholder="Tell us about your preferences..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <label htmlFor="pc-message" className="pc-label">Your Message</label>
                </div>
              </div>

              <button type="submit" className="pc-btn-primary" disabled={submitting}>
                <PaperAirplaneIcon className="w-5 h-5 -mt-1" />
                {submitting ? "Sending..." : "Send Request"}
              </button>
            </form>
          </div>

          {/* Support Channels */}
          <div className="pc-glass-card">
            <h2 className="pc-section-title">Support Channels</h2>
            <div className="pc-support-cards">
              <a href="tel:+916281144625" className="pc-support-card">
                <div className="pc-support-icon-wrap">
                  <PhoneIcon className="w-6 h-6" />
                </div>
                <div className="pc-support-info">
                  <h3>Direct Call</h3>
                  <p>+91 62811 44625</p>
                </div>
              </a>

              <a href="mailto:support@hajjumrahtravels.com" className="pc-support-card">
                <div className="pc-support-icon-wrap">
                  <EnvelopeIcon className="w-6 h-6" />
                </div>
                <div className="pc-support-info">
                  <h3>Email Support</h3>
                  <p>support@hajjumrahtravels.com</p>
                </div>
              </a>

              <a href="https://wa.me/916281144625?text=Hello,%20I%20need%20help%20with%20Umrah%20packages" target="_blank" rel="noreferrer" className="pc-support-card">
                <div className="pc-support-icon-wrap">
                  <ChatBubbleLeftRightIcon className="w-6 h-6" />
                </div>
                <div className="pc-support-info">
                  <h3>WhatsApp</h3>
                  <p>Fast replies inside 5 mins</p>
                </div>
              </a>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10" style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--pc-border)' }}>
              <p className="pc-description" style={{ fontSize: '0.9rem', margin: 0 }}>
                Our team is available to assist you with visa tracking, customized packages, and flight coordination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
