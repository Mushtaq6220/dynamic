import AdminFlightManager from "../../../components/AdminFlightManager";
import { getFlights } from "../../../services/api";

export default async function AdminFlightsPage() {
  let flights = [];

  try {
    flights = await getFlights();
  } catch (error) {
    console.error("Failed to load admin flights:", error);
  }

  return (
    <main className="page-shell">
      <section className="section-heading">
        <p className="eyebrow">Admin Flights</p>
        <h1>Manual Umrah route schedules</h1>
        <p className="hero-copy">
          Add and manage India to Gulf and Gulf to India flight schedules from your own admin panel.
        </p>
      </section>

      <AdminFlightManager initialFlights={flights} />
    </main>
  );
}
