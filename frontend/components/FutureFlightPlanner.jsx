"use client";

import { useEffect, useMemo, useState } from "react";
import { getFutureFlights } from "../services/api";

const DEFAULT_AIRPORTS = ["HYD", "JED", "MED", "DXB", "DOH", "AUH", "KWI", "BAH", "MCT"];

function getDefaultFutureDate() {
  const date = new Date();
  date.setDate(date.getDate() + 7);
  return date.toISOString().split("T")[0];
}

export default function FutureFlightPlanner({
  title = "Future Umrah Group Flight Planning",
  subtitle = "Plan expected departure and arrival schedules for upcoming pilgrimage batches.",
}) {
  const [airport, setAirport] = useState("HYD");
  const [type, setType] = useState("departure");
  const [date, setDate] = useState(getDefaultFutureDate);
  const [state, setState] = useState({
    loading: true,
    results: [],
    source: "disabled",
    message: "",
  });

  const airportOptions = useMemo(() => DEFAULT_AIRPORTS, []);

  useEffect(() => {
    let active = true;

    const load = async () => {
      setState((current) => ({
        ...current,
        loading: true,
      }));

      try {
        const response = await getFutureFlights({ airport, type, date });

        if (!active) {
          return;
        }

        setState({
          loading: false,
          results: response.results || [],
          source: response.source || "disabled",
          message: response.message || "",
        });
      } catch (error) {
        if (!active) {
          return;
        }

        setState({
          loading: false,
          results: [],
          source: "error",
          message: "Could not load future flights right now.",
        });
      }
    };

    load();

    return () => {
      active = false;
    };
  }, [airport, type, date]);

  return (
    <section className="panel">
      <div className="panel-header">
        <h2>{title}</h2>
        <span>{type === "departure" ? "Future departures" : "Future arrivals"}</span>
      </div>

      <p className="hero-copy">{subtitle}</p>

      <div className="timetable-controls">
        <select value={airport} onChange={(event) => setAirport(event.target.value)}>
          {airportOptions.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>

        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          className="future-date-input"
        />

        <div className="type-toggle">
          <button
            type="button"
            className={type === "departure" ? "primary-button compact" : "secondary-button compact"}
            onClick={() => setType("departure")}
          >
            Departures
          </button>
          <button
            type="button"
            className={type === "arrival" ? "primary-button compact" : "secondary-button compact"}
            onClick={() => setType("arrival")}
          >
            Arrivals
          </button>
        </div>
      </div>

      <p className="source-badge">
        Source: {state.source === "aviationstack" ? "Aviationstack / flightsFuture" : "Flight planning"}
      </p>

      {state.message ? <p className="source-badge">{state.message}</p> : null}

      <div className="timetable-list">
        {state.loading ? (
          <p className="empty-state">Loading future flights...</p>
        ) : state.results.length > 0 ? (
          state.results.slice(0, 6).map((item) => (
            <article key={`${item._id}-${item.departureTime}-${item.arrivalTime}`} className="timetable-card">
              <div className="timetable-top">
                <strong>{item.flightNo}</strong>
                <span>{item.status}</span>
              </div>
              <p>{item.airline}</p>
              <p>
                {item.departureCode || item.departureAirport} to {item.arrivalCode || item.arrivalAirport}
              </p>
              <p>Departure: {item.departureTime || "TBA"}</p>
              <p>Arrival: {item.arrivalTime || "TBA"}</p>
              {item.terminal || item.gate ? (
                <p>Terminal/Gate: {[item.terminal, item.gate].filter(Boolean).join(" / ")}</p>
              ) : null}
            </article>
          ))
        ) : (
          <p className="empty-state">No future flight records available for this selection yet.</p>
        )}
      </div>
    </section>
  );
}
