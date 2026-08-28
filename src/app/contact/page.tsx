import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-maroon">
            Contact
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold uppercase text-navy sm:text-5xl">
            Coming Soon
          </h1>
        </section>
      </main>
      <Footer />
    </>
  );
}
