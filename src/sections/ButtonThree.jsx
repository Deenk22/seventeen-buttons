import {foldingButton} from "../constants/iconList";

export default function ButtonThree() {
  return (
    <section id="button-three" className="h-screen bg-light-blue">
      <div className="flex flex-row justify-evenly items-center min-h-[100vh]">
        <div>
          <div>
            <h1 className="font-main text-9xl text-light-blue-two">FOLDING</h1>
            <p className="font-secondary text-light-blue-two opacity-50 ml-2 mt-4 w-[70%]">
              Este botón esta ambientado en los fantásticos faros escamoteables.
            </p>
          </div>
          <div className="mt-6">
            <h2 className="font-secondary font-semibold text-2xl text-light-blue-two mb-4 border-2 border-light-blue-two rounded-lg p-2">
              CSS Properties
            </h2>
            <ul className="font-secondary text-md text-light-blue-two">
              {foldingButton.map((item) => {
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
