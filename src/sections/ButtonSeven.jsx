export default function ButtonSeven() {
  return (
    <section id="button-seven" className="h-screen bg-light-blue">
      <div className="wrapper-div">
        <div className="text-center">
          <h1 className="font-main text-9xl text-light-blue-two">TENET</h1>
          <p className="font-secondary text-light-blue-two mt-4">
            Botón inspirado en los fantásticos{" "}
            <strong className="tracking-widest">Faros</strong>
            <strong className="tracking-widest"> Escamoteables</strong> de
            <strong className="tracking-widest"> Ferrari</strong>.
          </p>
        </div>
        <div>
          <button
            type="button"
            value={"button07"}
            className="general-btn button-seven font-secondary"
          >
            Click Me
          </button>
        </div>
      </div>
    </section>
  );
}
