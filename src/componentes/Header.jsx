import logo from "../assets/logo.png";

export function Header() {
  return (
    <header className="flex flex-col items-center">
      <img
        src={logo}
        alt="Logo da empresa"
        className="w-[50%] lg:w-[20%] object-cover m-2"
      />
    </header>
  );
}