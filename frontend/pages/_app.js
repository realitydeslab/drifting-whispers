import "tailwindcss/tailwind.css";
import "./styles.css";
import Hero from "./hero";
import Sidebar from "../components/Sidebar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Sidebar></Sidebar>
     < Component {...pageProps} />
    </>
  );
}

export default MyApp;