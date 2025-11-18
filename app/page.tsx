import chocolateDrip from "./assets/chocolateDrip.svg";
import buttonLogo from "./assets/buttonLogo.svg";

export default function Page() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#be9270]">
     

      {/* Dripping chocolate banner */}
      <div className="absolute top-0 left-0 w-full max-h-screen overflow-hidden pointer-events-none z-20">
        <img
          id="growing-svg"
          src={chocolateDrip.src}
          alt=""
          className="w-full h-full max-h-screen object-cover drop-shadow-[0_30px_55px_rgba(58,30,20,0.65)]"
        />
      </div>

      {/* Hero copy within contained background */}
      <div className="relative z-30 flex w-full max-w-2xl justify-center px-6">
        <div className="backgroundPattern relative flex w-full flex-col items-center  text-center ">
          <h1 className="hero-heading text-[clamp(2.5rem,6vw,4.75rem)] leading-tight">
            Hello there,
            <br />
            welcome to my site
          </h1>
          <button className="hero-button flex items-center gap-3 px-8 py-3 text-lg">
            Let's explore
            <img src={buttonLogo.src} alt="" className="w-8 h-8" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
