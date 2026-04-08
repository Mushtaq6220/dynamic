import RouteFlightSearch from "../../components/RouteFlightSearch";

export default function FlightsPage() {
  return (
    <main className="min-h-screen pt-40 pb-20 bg-[#061A2B]">
      <section className="max-w-7xl mx-auto px-6 mb-16 text-center animate-in fade-in duration-1000">
        <div className="w-12 h-1 bg-[#D4AF37] mx-auto mb-8 rounded-full"></div>
        <q className="text-2xl md:text-3xl font-serif italic text-white/60 block">
          The world is a book, and those who do not travel read only a page.
        </q>
        <p className="mt-4 text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.4em]">St. Augustine</p>
      </section>

      <RouteFlightSearch />
    </main>
  );
}
