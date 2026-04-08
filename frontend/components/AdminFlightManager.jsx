"use client";

import { useState } from "react";
import { createFlight } from "../services/api";

const INDIA_OPTIONS = [
  { code: "HYD", label: "Hyderabad (HYD)" },
  { code: "BOM", label: "Mumbai (BOM)" },
  { code: "DEL", label: "Delhi (DEL)" },
  { code: "MAA", label: "Chennai (MAA)" },
  { code: "BLR", label: "Bengaluru (BLR)" },
];

const GULF_OPTIONS = [
  { code: "JED", label: "Jeddah (JED)" },
  { code: "MED", label: "Madinah (MED)" },
  { code: "RUH", label: "Riyadh (RUH)" },
  { code: "DXB", label: "Dubai (DXB)" },
  { code: "AUH", label: "Abu Dhabi (AUH)" },
  { code: "DOH", label: "Doha (DOH)" },
  { code: "KWI", label: "Kuwait City (KWI)" },
  { code: "BAH", label: "Bahrain (BAH)" },
  { code: "MCT", label: "Muscat (MCT)" },
];

const initialForm = {
  airline: "",
  origin: "HYD",
  destination: "JED",
  departureDate: "",
  departureTime: "",
  arrivalDate: "",
  arrivalTime: "",
  status: "scheduled",
  notes: "",
};

export default function AdminFlightManager({ initialFlights = [] }) {
  const [flights, setFlights] = useState(initialFlights);
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const originIsIndia = INDIA_OPTIONS.some((item) => item.code === formData.origin);
  const destinationOptions = originIsIndia ? GULF_OPTIONS : INDIA_OPTIONS;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => {
      const next = {
        ...current,
        [name]: value,
      };

      if (name === "origin") {
        const nextOriginIsIndia = INDIA_OPTIONS.some((item) => item.code === value);
        const nextDestinationOptions = nextOriginIsIndia ? GULF_OPTIONS : INDIA_OPTIONS;

        if (!nextDestinationOptions.some((item) => item.code === next.destination)) {
          next.destination = nextDestinationOptions[0]?.code || "";
        }
      }

      return next;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const createdFlight = await createFlight(formData);
      setFlights((current) => [createdFlight, ...current]);
      setFormData(initialForm);
      setStatus({ type: "success", message: "Flight schedule added successfully." });
    } catch (error) {
      setStatus({ type: "error", message: "Could not save this flight schedule." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="panel">
        <div className="panel-header">
          <h2>Add Flight Schedule</h2>
          <span>Manual Entry</span>
        </div>

        <form className="form-panel" onSubmit={handleSubmit}>
          <div className="form-grid">
            <input
              name="airline"
              placeholder="Airline"
              value={formData.airline}
              onChange={handleChange}
            />
            <select name="origin" value={formData.origin} onChange={handleChange}>
              {[...INDIA_OPTIONS, ...GULF_OPTIONS].map((item) => (
                <option key={item.code} value={item.code}>
                  {item.label}
                </option>
              ))}
            </select>
            <select name="destination" value={formData.destination} onChange={handleChange}>
              {destinationOptions.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.label}
                </option>
              ))}
            </select>
            <input
              name="departureDate"
              type="date"
              value={formData.departureDate}
              onChange={handleChange}
              required
            />
            <input
              name="departureTime"
              type="time"
              value={formData.departureTime}
              onChange={handleChange}
              required
            />
            <input
              name="arrivalDate"
              type="date"
              value={formData.arrivalDate}
              onChange={handleChange}
              required
            />
            <input
              name="arrivalTime"
              type="time"
              value={formData.arrivalTime}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="notes"
            rows="4"
            placeholder="Operational notes"
            value={formData.notes}
            onChange={handleChange}
          />

          <button type="submit" className="primary-button" disabled={submitting}>
            {submitting ? "Saving..." : "Add Schedule"}
          </button>

          {status.message ? (
            <p className={status.type === "success" ? "status-success" : "status-error"}>
              {status.message}
            </p>
          ) : null}
        </form>
      </section>

      <section className="section-grid">
        {flights.map((item) => (
          <article key={item._id || `${item.origin}-${item.destination}-${item.departureDate}`} className="panel">
            <h2>{item.origin} to {item.destination}</h2>
            <p>{item.airline || "Manual Schedule"}</p>
            <p>
              Departure: {item.departureDate ? new Date(item.departureDate).toLocaleDateString("en-IN") : ""}{" "}
              {item.departureTime}
            </p>
            <p>
              Arrival: {item.arrivalDate ? new Date(item.arrivalDate).toLocaleDateString("en-IN") : ""}{" "}
              {item.arrivalTime}
            </p>
            <strong>Scheduled</strong>
          </article>
        ))}
      </section>
    </>
  );
}
