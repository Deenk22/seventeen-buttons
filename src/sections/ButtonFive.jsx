export default function ButtonFive() {
  return (
    <section id="button-five" className="h-screen bg-light-blue">
      <div className="wrapper-div">
        <div className="text-center">
          <h1 className="font-main text-9xl text-light-blue-two">COBBLES</h1>
          <p className="font-secondary text-light-blue-two mt-4">
            Botón inspirado en un fantástico{" "}
            <strong className="tracking-widest">Adoquín</strong> de tu
            <strong className="tracking-widest"> Barrio</strong>.
          </p>
        </div>
        <div>
          <button
            type="button"
            value={"button05"}
            className="general-btn button-five font-secondary"
          >
            Click Me
          </button>
        </div>
      </div>
    </section>
  );
}
