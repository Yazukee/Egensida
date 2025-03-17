import { Card, CardContent } from "./card";

function Forelasning() {
  return (
    <section id="talks" className="py-20 px-6 md:px-20 bg-black text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Föreläsningar</h2>
      <div className="grid md:grid-cols-3 gap-6 text-center">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">
              Insiktet till att våga
            </h3>
            <p className="text-black text-sm">
              {" "}
              Med insikt att se att vi är våra egna hinder, börjar förändring
              alltid med en tanke och oss själva
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">
              Nyckeln till att fånga dig själv
            </h3>
            <p className="text-black text-sm">
              En föreläsning som berör, engagerar och ger konkreta verktyg för
              både arbetsliv och privatliv.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">
              Modet att våga förändra för att förbättra
            </h3>
            <p className="text-black text-sm">
              När vi möter vår egen rädsla och utmanar den och vågar drömma.
              Kommer vi att våga och när vi gör det vi drömmer om och älskar
              kommer vi aldrig att sluta drömma.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Forelasning;
