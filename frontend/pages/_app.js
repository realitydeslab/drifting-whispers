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
      {placeholder("Graph Placeholder")}
      <Component {...pageProps} />
      {placeholder("Video Placeholder")}
      <Component {...pageProps} />
      {/* <WindMap /> */}
      <iframe src="https://philogb.github.io/page/wind" className="w-screen h-[80vh]" name="windmap" />
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
