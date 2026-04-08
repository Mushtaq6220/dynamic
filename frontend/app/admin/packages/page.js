import AdminPackageManager from "../../../components/AdminPackageManager";
import { getPackages } from "../../../services/api";

export default async function AdminPackagesPage() {
  let packages = [];

  try {
    packages = await getPackages();
  } catch (error) {
    console.error("Failed to load admin packages:", error);
  }

  return (
    <main className="page-shell">
      <section className="section-heading">
        <p className="eyebrow">Admin Packages</p>
        <h1>Manage package inventory</h1>
        <p className="hero-copy">
          Add packages by selecting package type, category, price, and description.
        </p>
      </section>
      <AdminPackageManager initialPackages={packages} />
    </main>
  );
}
