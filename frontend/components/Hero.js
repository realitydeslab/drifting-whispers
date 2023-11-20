import { useEffect, useState } from "react"

const Hero = () => {
  const [showHeader, setShowHeader] = useState(true)

  const handleResize = () => {
    setShowHeader(window.innerWidth >= 1280)
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="h-screen overflow-hidden font-body">
      <div
        className={
          (showHeader ? "opacity-100" : "opacity-0") +
          " transition duration-500 flex-0 w-full space-x-2 lg:space-x-4 flex justify-end font-mono mt-12 pr-48 text-2xl"
        }
      >
        <a
          href="#"
          className="bg-gray-400 hover:bg-gray-300 flex justify-center items-center rounded-[12rem] px-6 py-4 no-underline transition duration-250 ease-in-out"
        >
          Story
        </a>
        <a
          href="#"
          className="bg-gray-200 hover:bg-gray-300 flex justify-center items-center rounded-[12rem] px-6 py-4 no-underline transition duration-250 ease-in-out"
        >
          Map
        </a>
      </div>

      <div className="flex flex-col items-center justify-center text-center mt-32 lg:mt-48 px-6 sm:px-4">
        <h1 className="text-6xl lg:text-[100px] font-semibold">
          Wafting Whispers
        </h1>

        <div className="mt-9 text-4xl italic">
          Let the wind bring you to me.
        </div>
        <div className="mt-24 max-w-6xl mx-auto">
          <div className="text-3xl leading-10">
            Wafting Whispers (2023) is an interactive{" "}
            {bold("augmented reality")} art experience to connect nomadic souls,
            where embodied selves {bold("autonomously")} wafting over{" "}
            {bold("digital")} winds driven by climate data of{" "}
            {bold("physical world")}; forming an spatial-social{" "}
            {bold("network state")}.
          </div>
        </div>
        <div className="flex justify-center mt-24 animate-bounce">{arrow}</div>
      </div>
    </section>
  )
}

export default Hero

const arrow = (
  <svg
    width="38"
    height="45"
    viewBox="0 0 38 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.2322 43.7678C18.2085 44.7441 19.7915 44.7441 20.7678 43.7678L36.6777 27.8579C37.654 26.8816 37.654 25.2986 36.6777 24.3223C35.7014 23.346 34.1184 23.346 33.1421 24.3223L19 38.4645L4.85786 24.3223C3.88155 23.346 2.29864 23.346 1.32233 24.3223C0.346018 25.2986 0.346018 26.8816 1.32233 27.8579L17.2322 43.7678ZM16.5 -1.74325e-07L16.5 42L21.5 42L21.5 1.74325e-07L16.5 -1.74325e-07Z"
      fill="black"
    />
  </svg>
)

const bold = (word) => {
  return (
    <stong
      style={{
        fontWeight: "700",
      }}
    >
      {word}
    </stong>
  )
}
