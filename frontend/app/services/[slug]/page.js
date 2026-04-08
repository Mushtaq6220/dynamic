import { notFound } from "next/navigation";
import { getServicePage, servicePages } from "../../../data/servicePages";
import ServicePageClient from "../../../components/ServicePageClient";

export function generateStaticParams() {
  return servicePages.map((item) => ({
    slug: item.slug,
  }));
}

export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params;
  const service = getServicePage(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return <ServicePageClient service={service} />;
}
