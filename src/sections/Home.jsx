export default function Home() {
  return (
    <section
      id="home"
      className="h-screen grid place-content-center bg-gradient-to-b to-100% from-light-blue to-light-blue-two"
    >
      <div className="flex flex-col items-center">
        <h1 className="font-main typographyResponsive transition-all text-gray-100">
          s<span className="letter-e font-semibold">event</span>
          een
        </h1>
      </div>
      <div className="flex flex-col items-center relative top-48">
        <a
          href="#button-one"
          className="font-secondary text-lg text-light-blue"
        >
          <div className="flex justify-center">
            <img
              className="svg"
              src="arrow.svg"
              width={"20px"}
              alt="Arrow to Explore"
            />
          </div>
        </a>
      </div>
    </section>
  );
}
