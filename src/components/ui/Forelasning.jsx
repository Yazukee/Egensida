import { Card, CardContent } from "./card";

function Forelasning() {
  return (
    <section id="talks" className="py-20 px-6 md:px-20 bg-black text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Föreläsningar</h2>
      <div className="grid md:grid-cols-3 gap-6 text-center">
        {[
          "Insiktet till att våga",
          "Nyckeln till att fånga dig själv",
          "Modet att våga förändra för att förbättra",
        ].map((title, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-black text-sm">
                En föreläsning som berör, engagerar och ger konkreta verktyg för
                både arbetsliv och privatliv.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Forelasning;
