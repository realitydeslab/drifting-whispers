import "tailwindcss/tailwind.css"
import "./styles.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      {/* <WindMap /> */}
      <iframe src="https://philogb.github.io/page/wind" className="w-screen h-[80vh]" name="windmap" />
    </>
  )
}

export default MyApp
