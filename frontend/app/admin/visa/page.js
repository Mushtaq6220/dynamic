"use client";

import { useState } from "react";
import { createVisaApplication } from "../../../services/api";

const initialForm = {
  fullName: "",
  passportNo: "",
  country: "",
  visaType: "",
  status: "submitted",
  notes: "",
};

export default function AdminVisaPage() {
  const [formData, setFormData] = useState(initialForm);
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    try {
      await createVisaApplication(formData);
      setMessage("Visa application saved.");
      setFormData(initialForm);
    } catch (error) {
      setMessage("Could not save visa application.");
    }
  };

  return (
    <main className="page-shell">
      <section className="section-heading">
        <p className="eyebrow">Admin Visa</p>
        <h1>Add visa application</h1>
      </section>

      <section className="panel">
        <form className="form-panel" onSubmit={handleSubmit}>
          <div className="form-grid">
            <input name="fullName" placeholder="Full name" value={formData.fullName} onChange={handleChange} required />
            <input name="passportNo" placeholder="Passport number" value={formData.passportNo} onChange={handleChange} required />
            <input name="country" placeholder="Country" value={formData.country} onChange={handleChange} required />
            <input name="visaType" placeholder="Visa type" value={formData.visaType} onChange={handleChange} required />
            <select name="status" value={formData.status} onChange={handleChange}>
              <option value="submitted">Submitted</option>
              <option value="processing">Processing</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>

          <textarea name="notes" rows="4" placeholder="Notes" value={formData.notes} onChange={handleChange} />
          <button type="submit" className="primary-button">Save Visa Record</button>
          {message ? <p className="status-success">{message}</p> : null}
        </form>
      </section>
    </main>
  );
}
