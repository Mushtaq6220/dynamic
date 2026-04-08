"use client";

import { useState } from "react";
import PackageCard from "./PackageCard";
import { createPackage } from "../services/api";

const categoryOptions = ["Super Saver", "Deluxe", "Luxury", "Hajj Special"];
const packageTypeOptions = ["Umrah Departures", "Hajj Special Package"];

const initialForm = {
  name: "",
  category: "Deluxe",
  packageType: "Umrah Departures",
  price: "",
  description: "",
  days: "",
  route: "",
  hotel: "",
  departureCity: "",
};

export default function AdminPackageManager({ initialPackages = [] }) {
  const [packages, setPackages] = useState(initialPackages);
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const payload = {
        name: formData.name,
        category: formData.category,
        packageType: formData.packageType,
        price: Number(formData.price),
        overview: formData.description,
        days: Number(formData.days),
        route: formData.route,
        hotel: formData.hotel,
        departureCity: formData.departureCity,
        plan: formData.category,
        included: [],
        badge: formData.category,
      };

      const createdPackage = await createPackage(payload);

      setPackages((current) => [createdPackage, ...current]);
      setFormData(initialForm);
      setStatus({
        type: "success",
        message: "Package added successfully.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Could not add package. Please check the fields and try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="panel">
        <div className="panel-header">
          <h2>Add New Package</h2>
          <span>Admin Entry</span>
        </div>

        <form className="form-panel" onSubmit={handleSubmit}>
          <div className="form-grid">
            <input
              name="name"
              placeholder="Package name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              {categoryOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              name="packageType"
              value={formData.packageType}
              onChange={handleChange}
            >
              {packageTypeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <input
              name="price"
              type="number"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              required
            />

            <input
              name="days"
              type="number"
              placeholder="Days"
              value={formData.days}
              onChange={handleChange}
              required
            />

            <input
              name="departureCity"
              placeholder="Departure city"
              value={formData.departureCity}
              onChange={handleChange}
            />

            <input
              name="route"
              placeholder="Route"
              value={formData.route}
              onChange={handleChange}
            />

            <input
              name="hotel"
              placeholder="Hotel category"
              value={formData.hotel}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="description"
            rows="5"
            placeholder="Package description"
            value={formData.description}
            onChange={handleChange}
          />

          <button type="submit" className="primary-button" disabled={submitting}>
            {submitting ? "Saving..." : "Add Package"}
          </button>

          {status.message ? (
            <p className={status.type === "success" ? "status-success" : "status-error"}>
              {status.message}
            </p>
          ) : null}
        </form>
      </section>

      <section className="package-grid">
        {packages.map((item) => (
          <PackageCard key={item._id || `${item.name}-${item.price}`} item={item} />
        ))}
      </section>
    </>
  );
}
