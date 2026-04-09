import ResponsiveHome from "../components/ResponsiveHome";
import { getGulfFlights, getPackages } from "../services/api";
import AnimeWavesBackground from "../components/AnimeWavesBackground";

export default async function HomePage() {
  let packages = [];
  let flightResponse = { flights: [], source: "database" };

  try {
    [packages, flightResponse] = await Promise.all([
      getPackages(),
      getGulfFlights(),
    ]);
  } catch (error) {
    console.error("Failed to load homepage data:", error);
  }

  const flights = flightResponse.flights || [];

  return (
    <>
      <AnimeWavesBackground />
      <ResponsiveHome packages={packages} flights={flights} />
    </>
  );
}
