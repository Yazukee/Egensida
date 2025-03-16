function Kontakt() {
  return (
    <section id="contact" className="py-20 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Kontakt</h2>
      <div className="text-center text-lg">
        <p>
          Email:{" "}
          <a href="mailto:kontakt@dinhemsida.se" className="text-blue-600">
            Yasser.almaliki@live.se
          </a>
        </p>
        <p>Telefon: +4673 939 58 71 </p>
        <p>
          Följ mig på{" "}
          <a href="#" className="text-blue-600">
            Instagram
          </a>{" "}
          &{" "}
          <a href="#" className="text-blue-600">
            LinkedIn
          </a>
        </p>
      </div>
    </section>
  );
}

export default Kontakt;
