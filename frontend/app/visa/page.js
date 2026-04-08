"use client";

import { useState } from "react";
import { trackVisa } from "../../services/api";

const visaSteps = [
  { icon: "01", title: "Consultation", text: "Discuss your visa route, travel month, and documentation requirements with the support team." },
  { icon: "02", title: "Documentation", text: "Submit passport and paperwork for guided visa processing and backend record updates." },
  { icon: "03", title: "Confirmation", text: "Receive tracking visibility, status confirmation, and the next required action." },
  { icon: "04", title: "Departure", text: "Travel with clearer preparation after your visa support and final coordination are complete." },
];

export default function VisaPage() {
  const [passportNo, setPassportNo] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const data = await trackVisa(passportNo);
      setResult(data);
    } catch (submitError) {
      setError("Visa record not found for this passport number.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="page-shell">
      <section className="section-heading">
        <p className="eyebrow">Visa Services</p>
        <h1>Visa process and passport tracking</h1>
        <p className="hero-copy">
          This page now combines your visa service flow with live passport-based tracking.
        </p>
      </section>

      <section className="panel" style={{ marginBottom: "24px" }}>
        <div className="panel-header">
          <h2>Visa Process</h2>
          <span>Simple process with trusted guidance</span>
        </div>
        <div className="visa-process-grid">
          {visaSteps.map((step) => (
            <article key={step.title} className="visa-step-card">
              <div className="visa-step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid">
        <div className="panel">
          <form className="form-panel" onSubmit={handleSubmit}>
            <input
              value={passportNo}
              onChange={(event) => setPassportNo(event.target.value)}
              placeholder="Enter passport number"
              required
            />
            <button type="submit" className="primary-button" disabled={loading}>
              {loading ? "Tracking..." : "Track Visa"}
            </button>
          </form>

          {error ? <p className="status-error">{error}</p> : null}
        </div>

        <div className="panel">
          <h2>Result</h2>
          {result ? (
            <div className="visa-result">
              <p><strong>Name:</strong> {result.fullName}</p>
              <p><strong>Country:</strong> {result.country}</p>
              <p><strong>Type:</strong> {result.visaType}</p>
              <p><strong>Status:</strong> {result.status}</p>
              <p><strong>Passport:</strong> {result.passportNo}</p>
            </div>
          ) : (
            <p className="empty-state">No visa result loaded yet.</p>
          )}
        </div>
      </section>
    </main>
  );
}
