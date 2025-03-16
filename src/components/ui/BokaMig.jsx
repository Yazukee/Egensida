import { Button } from "./button";

function BokaMig() {
  return (
    <section id="book" className="py-20 px-6 md:px-20 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center">Boka mig</h2>
      <form className="max-w-2xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Namn"
          className="w-full p-3 border rounded"
        />
        <input
          type="email"
          placeholder="E-post"
          className="w-full p-3 border rounded"
        />
        <input
          type="text"
          placeholder="Företag / Organisation"
          className="w-full p-3 border rounded"
        />
        <textarea
          placeholder="Vad vill ni boka mig för?"
          rows={5}
          className="w-full p-3 border rounded"
        />
        <Button className="w-full hover:bg-blend-lighten">
          Skicka förfrågan
        </Button>
      </form>
    </section>
  );
}

export default BokaMig;
