import "tailwindcss/tailwind.css";
import "./styles.css";
import Hero from "./hero";
import Sidebar from "../components/Sidebar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Sidebar></Sidebar>
      <Hero></Hero>
      {placeholder("Video Placeholder")}
      <Component {...pageProps} />
      <iframe
        src="https://philogb.github.io/page/wind"
        name="windmap"
        style={{
          height: "100vh",
          width: "100%",
        }}
      />
      <Component {...pageProps} />
      {placeholder("Video Placeholder")}
      <Component {...pageProps} />
      {/* <WindMap /> */}
    </>
  );
}

export default MyApp;

const placeholder = (text) => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "darkgrey",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        zIndex: "99",
      }}
    >
      {text}
    </div>
  );
};
