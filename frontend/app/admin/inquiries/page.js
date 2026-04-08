import { getInquiries } from "../../../services/api";

export default async function AdminInquiriesPage() {
  let inquiries = [];

  try {
    inquiries = await getInquiries();
  } catch (error) {
    console.error("Failed to load inquiries:", error);
  }

  return (
    <main className="page-shell">
      <section className="section-heading">
        <p className="eyebrow">Admin Inquiries</p>
        <h1>Customer requests</h1>
      </section>

      <section className="section-grid">
        {inquiries.length > 0 ? (
          inquiries.map((item) => (
            <article key={item._id} className="panel">
              <h2>{item.name}</h2>
              <p>{item.email}</p>
              <p>{item.phone}</p>
              <p>Destination: {item.destination || "Not specified"}</p>
              <p>Travelers: {item.travelers}</p>
              <p>Status: {item.status}</p>
              <p>{item.message}</p>
            </article>
          ))
        ) : (
          <div className="panel">
            <p className="empty-state">No inquiries available yet.</p>
          </div>
        )}
      </section>
    </main>
  );
}
