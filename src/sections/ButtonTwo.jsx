export default function ButtonTwo() {
  return (
    <section id="button-two" className="h-screen bg-light-blue-two">
      <div className="wrapper-div">
        <div className="flex flex-col justify-start items-start">
          <h1 className="font-main text-9xl text-light-blue">P-CARD</h1>
          <p className="font-secondary text-light-blue mt-4">
            Botón inspirado en una maravillosa{" "}
            <strong className="tracking-widest">Postal</strong> enviada por la
            <strong className="tracking-widest"> Abuelita</strong>.
          </p>
        </div>
        <div>
          <button
            id="buttontwo"
            type="button"
            value={"button02"}
            className="general-btn button-two font-secondary"
          >
            Click Me
          </button>
        </div>
      </div>
    </section>
  );
}
