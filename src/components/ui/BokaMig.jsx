import React from "react";
import { Button } from "./button";
import { useForm, ValidationError } from "@formspree/react";

function BokaMig() {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID);

  if (state.succeeded) {
    return (
      <section className="py-20 px-6 md:px-20 bg-green-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Tack för din bokning!</h2>
        <p className="text-lg">Jag återkommer till dig så snart som möjligt.</p>
      </section>
    );
  }

  return (
    <section id="book" className="py-20 px-6 md:px-20 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center">Boka mig</h2>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
        {/* Namn */}
        <input
          type="text"
          name="namn"
          placeholder="Namn"
          className="w-full p-3 border rounded"
          required
          minLength={2}
          title="Ange minst 2 tecken"
        />

        {/* E-post */}
        <input
          type="email"
          name="email"
          placeholder="E-post"
          className="w-full p-3 border rounded"
          required
          pattern="^[^@]+@[^@]+\.[^@]+$"
          title="Ange en giltig e-postadress"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        {/* Företag */}
        <input
          type="text"
          name="företag"
          placeholder="Företag / Organisation"
          className="w-full p-3 border rounded"
        />

        {/* Meddelande */}
        <textarea
          name="message"
          placeholder="Vad vill ni boka mig för?"
          rows={5}
          className="w-full p-3 border rounded"
          required
          minLength={10}
          title="Meddelandet måste vara minst 10 tecken"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        {/* Skicka-knapp */}
        <Button
          type="submit"
          disabled={state.submitting}
          className="w-full hover:bg-blend-lighten"
        >
          {state.submitting ? "Skickar..." : "Skicka förfrågan"}
        </Button>
      </form>
    </section>
  );
}

export default BokaMig;
