export default function ButtonOne() {
  return (
    <section id="button-one" className="h-screen bg-light-blue">
      <div className="flex flex-col justify-center items-center gap-24 h-screen">
        <div className="text-center">
          <h1 className="font-main text-9xl text-light-blue-two">COMIC</h1>
          <p className="font-secondary text-light-blue-two mt-4">
            Botón inspirado en el típico{" "}
            <strong className="tracking-widest">Bocadillo</strong> que vemos en
            los <strong className="tracking-widest">Cómics</strong>.
          </p>
        </div>
        <div>
          <button
            type="button"
            value={"button01"}
            className="general-btn button-one"
          >
            Click Me
          </button>
        </div>
      </div>
    </section>
  );
}
