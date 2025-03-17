import { Button } from "./button";

function HeroSection() {
  return (
    <section
      className="h-screen flex items-center justify-center bg-contain bg-center bg-no-repeat relative mt-15"
      style={{
        backgroundImage: "url('/KarlYaser.jpg')",
      }}
    >
      {/* Mörk over Lay  */}
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* innehåll  */}
      <div className="relative z-10 text-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Förändring börjar med en tanke
        </h1>
        <p className="text-lg md:text-xl mb-6">
          En interaktion som lämnar avtryck och nycklar
        </p>
        <a
          href="#book"
          className="bg-black text-white font-semibold py-3 px-6 rounded shadow text-lg hover:bg-blend-lighten"
        >
          Boka mig
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
