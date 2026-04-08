"use client";

import { useState } from "react";
import { createInquiry } from "../services/api";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  destination: "Umrah Standard",
  message: "",
};

export default function InquiryForm() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: name === "travelers" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      await createInquiry(formData);
      setStatus({
        type: "success",
        message: "Inquiry submitted successfully.",
      });
      setFormData(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to submit inquiry. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="form-panel" onSubmit={handleSubmit}>
      <div className="form-grid">
        <input
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <select
          name="destination"
          value={formData.destination}
          onChange={handleChange}
        >
          <option value="Umrah Standard">Umrah Standard</option>
          <option value="Umrah Deluxe">Umrah Deluxe</option>
          <option value="Hajj Economy">Hajj Economy</option>
          <option value="Hajj Premium">Hajj Premium</option>
          <option value="Visa Service">Visa Service</option>
        </select>
      </div>

      <textarea
        name="message"
        placeholder="Tell us about your package preference, travel month, and family size"
        value={formData.message}
        onChange={handleChange}
        rows="5"
      />

      <button type="submit" className="primary-button" disabled={submitting}>
        {submitting ? "Submitting..." : "Send Inquiry"}
      </button>

      {status.message ? (
        <p className={status.type === "success" ? "status-success" : "status-error"}>
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
