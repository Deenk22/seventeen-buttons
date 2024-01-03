export default function ButtonSix() {
  return (
    <section id="button-six" className="h-screen bg-light-blue-two">
      <div className="wrapper-div">
        <div className="flex flex-col justify-start items-start">
          <h1 className="font-main text-9xl text-light-blue">TENET</h1>
          <p className="font-secondary text-light-blue mt-4">
            Botón inspirado en una{" "}
            <strong className="tracking-widest">Realidad</strong>
            <strong className="tracking-widest"> Alternativa</strong> de las
            <strong className="tracking-widest"> Pizquillas</strong>.
          </p>
        </div>
        <div>
          <button
            id="buttonsix"
            type="button"
            value={"button06"}
            className="general-btn button-six font-secondary"
          >
            Click Me
          </button>
        </div>
      </div>
    </section>
  );
}
