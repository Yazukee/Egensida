function OmMig() {
  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-black text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Om mig</h2>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* <img
          src="./assets/portratt.jpg"
          alt="Föreläsare"
          className="w-60 h-60 object-cover rounded-full shadow-lg"
        /> */}
        <p className="text-lg leading-relaxed">
          Att <b>våga gå sin egen väg</b> är Yasers största fråga, varför så
          många väljer att inte följa sina drömmar. I sin bok{" "}
          <b>Kostnaden att inte välja sin väg </b>
          delar han med <b>livsnycklar</b> och <b> insikter</b> för att
          inspirera andra att <b>våga</b> ha modet trots rädslan att gå för det
          man drömmer om. <br />
          Det va aldrig menat att någon skulle vara hjälte eller komma och rädda
          dig i din historia, <br /> du är den som var menad att var hjälten i
          din historia!
        </p>
      </div>
    </section>
  );
}

export default OmMig;
