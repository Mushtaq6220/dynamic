import Link from "next/link";
import {
  getGulfFlights,
  getInquiries,
  getPackages,
} from "../../../services/api";

export default async function AdminDashboardPage() {
  let packages = [];
  let flightResponse = { flights: [], source: "database" };
  let inquiries = [];

  try {
    [packages, flightResponse, inquiries] = await Promise.all([
      getPackages(),
      getGulfFlights(),
      getInquiries(),
    ]);
  } catch (error) {
    console.error("Failed to load admin dashboard:", error);
  }

  const flights = flightResponse.flights || [];

  return (
    <main className="page-shell">
      <section className="section-heading">
        <p className="eyebrow">Admin Dashboard</p>
        <h1>Operations overview</h1>
        <p className="hero-copy">Monitor packages, flights, and customer inquiries.</p>
      </section>

      <section className="stats-grid">
        <div className="stat-card">
          <span>Packages</span>
          <strong>{packages.length}</strong>
        </div>
        <div className="stat-card">
          <span>Gulf Flights</span>
          <strong>{flights.length}</strong>
        </div>
        <div className="stat-card">
          <span>Inquiries</span>
          <strong>{inquiries.length}</strong>
        </div>
      </section>

      <p className="source-badge">
        Flight source: manual admin-managed database schedules
      </p>

      <div className="hero-actions">
        <Link href="/admin/packages" className="secondary-button">
          Manage Packages
        </Link>
        <Link href="/admin/flights" className="secondary-button">
          Manage Flights
        </Link>
        <Link href="/admin/inquiries" className="secondary-button">
          View Inquiries
        </Link>
        <Link href="/admin/visa" className="secondary-button">
          Visa Records
        </Link>
      </div>
    </main>
  );
}
