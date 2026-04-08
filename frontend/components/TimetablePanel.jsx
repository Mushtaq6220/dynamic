"use client";

import { useEffect, useState } from "react";
import { getGulfTimetable } from "../services/api";

const DEFAULT_AIRPORTS = ["HYD", "JED", "MED", "DXB", "DOH", "AUH", "KWI", "BAH", "MCT"];

export default function TimetablePanel() {
  const [airport, setAirport] = useState("HYD");
  const [type, setType] = useState("departure");
  const [state, setState] = useState({
    loading: true,
    results: [],
    airports: DEFAULT_AIRPORTS,
    source: "disabled",
    message: "",
  });

  useEffect(() => {
    let active = true;

    const load = async () => {
      setState((current) => ({ ...current, loading: true }));

      try {
        const response = await getGulfTimetable({ airport, type });
        if (!active) {
          return;
        }

        setState({
          loading: false,
          results: response.results || [],
          airports: response.airports || DEFAULT_AIRPORTS,
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
          airports: DEFAULT_AIRPORTS,
          source: "error",
          message: "Could not load timetable right now.",
        });
      }
    };

    load();

    return () => {
      active = false;
    };
  }, [airport, type]);

  return (
    <section className="panel">
      <div className="panel-header">
        <h2>Hyderabad and Gulf Airport Timetable</h2>
        <span>{type === "departure" ? "Departures" : "Arrivals"}</span>
      </div>

      <div className="timetable-controls">
        <select value={airport} onChange={(event) => setAirport(event.target.value)}>
          {state.airports.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>

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

      {state.message ? <p className="source-badge">{state.message}</p> : null}

      <div className="timetable-list">
        {state.loading ? (
          <p className="empty-state">Loading timetable...</p>
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
              <p>
                {type === "departure" ? "Departure" : "Arrival"}: {type === "departure" ? item.departureTime : item.arrivalTime || "TBA"}
              </p>
              {item.terminal || item.gate ? (
                <p>Terminal/Gate: {[item.terminal, item.gate].filter(Boolean).join(" / ")}</p>
              ) : null}
            </article>
          ))
        ) : (
          <p className="empty-state">No timetable records available yet.</p>
        )}
      </div>
    </section>
  );
}
