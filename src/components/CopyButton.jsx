import copy from "copy-to-clipboard";

export default function CopyButton({cssCode}) {
  const handleClick = () => {
    copy(cssCode);
    alert("¡Texto copiado al portapapeles!");
  };

  return <button onClick={handleClick}>Copiar Código</button>;
}
