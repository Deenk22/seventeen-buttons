import LinkCodeSandbox from "../components/LinkCodeSandbox";

const buttonOneLink = "https://codesandbox.io/p/sandbox/comic-button-vtt9rz";

export default function ButtonOne() {
  return (
    <section id="button-one" className="h-screen bg-light-blue">
      <div className="wrapper-div">
        <div className="flex flex-col justify-start items-start">
          <h1 className="font-main text-9xl text-light-blue-two">COMIC</h1>
          <p className="font-secondary text-light-blue-two mt-4">
            Botón inspirado en el típico{" "}
            <strong className="tracking-widest">Bocadillo</strong> que vemos en
            los <strong className="tracking-widest">Cómics</strong>.
          </p>
          <LinkCodeSandbox codeSandboxLink={buttonOneLink} />
        </div>
        <div className="flex flex-col items-center relative gap-4">
          <button
            type="button"
            value={"button01"}
            className="general-btn button-one font-secondary"
          >
            Click Me
          </button>
        </div>
      </div>
    </section>
  );
}
