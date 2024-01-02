export default function ButtonFour() {
  return (
    <section id="button-four" className="h-screen bg-light-blue-two">
      <div className="wrapper-div">
        <div className="text-center">
          <h1 className="font-main text-9xl text-light-blue">DEISS</h1>
          <p className="font-secondary text-light-blue mt-4">
            Botón inspirado en un maravilloso{" "}
            <strong className="tracking-widest">Rallador</strong> de
            <strong className="tracking-widest"> Queso</strong>.
          </p>
        </div>
        <div>
          <button
            id="buttonfour"
            type="button"
            value={"button04"}
            className="general-btn button-four font-secondary"
          >
            Click Me
          </button>
        </div>
      </div>
    </section>
  );
}
