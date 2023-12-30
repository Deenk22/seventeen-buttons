import {postcardButton} from "../constants/iconList";

export default function ButtonTwo() {
  return (
    <section id="button-two" className="h-screen bg-light-blue-two">
      <div className="flex flex-row justify-evenly items-center min-h-[100vh]">
        <div>
          <button
            id="buttontwo"
            type="button"
            value={"button02"}
            className="general-btn button-two bg-light-blue text-light-blue-two"
          >
            Click Me
          </button>
        </div>
        <div>
          <div>
            <h1 className="font-main text-9xl text-light-blue">P-CARD</h1>
            <p className="font-secondary text-light-blue opacity-50 ml-2 mt-4 w-[90%]">
              Este botón esta ambientado en una postal enviada por la abuelita.
            </p>
          </div>
          <div className="mt-6">
            <h2 className="font-secondary font-semibold text-2xl text-light-blue mb-4 border-2 border-light-blue rounded-lg p-2">
              CSS Properties
            </h2>
            <ul className="font-secondary text-md text-light-blue">
              {postcardButton.map((item) => {
                const {title} = item;
                return (
                  <li key={title} className="mb-1">
                    {title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
