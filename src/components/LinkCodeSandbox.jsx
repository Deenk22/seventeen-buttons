import {Link} from "react-router-dom";

export default function LinkCodeSandbox({codeSandboxLink}) {
  // Añadir gradiente al fondo como tenemos en el header.
  return (
    <Link
      className="font-secondary text-sm text-light-blue bg-light-blue-two py-3 px-8 rounded-xl flex justify-center items-center gap-2 mt-4"
      target="_blank"
      to={codeSandboxLink}
    >
      <img src="codesandbox.svg" alt="CodeSandbox´s Logo." width={16} />
      View in CodeSandbox
    </Link>
  );
}
