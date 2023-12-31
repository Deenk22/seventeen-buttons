export default function ButtonThree() {
  return (
    <section id="button-three" className="h-screen bg-light-blue">
      <div className="flex flex-col justify-center items-center gap-24 h-screen">
        <div className="text-center">
          <h1 className="font-main text-9xl text-light-blue-two">FOLDING</h1>
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
            value={"button03"}
            className="general-btn button-three"
          >
            Click Me
          </button>
        </div>
      </div>
    </section>
  );
}
