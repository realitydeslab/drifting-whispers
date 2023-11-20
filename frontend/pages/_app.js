import "tailwindcss/tailwind.css";
import "./styles.css";
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