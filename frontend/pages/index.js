import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { useAsync } from "react-async-hook"
import BarLoader from "react-spinners/BarLoader"
import HeadComponent from "../components/Head"
import Hero from "../components/Hero"
import Sign from "../components/Sign"
import Signatures from "../components/Signatures"
import LoadingIframe from "../components/LoadingIframe"
import StoryP1 from "./story-p1.mdx"
import StoryP2 from "./story-p2.mdx"
import StoryP3 from "./story-p3.mdx"
import { fetchSignatures } from "../arweaveFns"

export const CANONICAL = "e-bw-AGkYsZFYqmAe2771A6hi9ZMIkWrkBNtHIF1hF4"

export default function Article({ pageProps, ...props }) {
  console.log(
    "🚀 ~ file: [txId].js:170 ~ Declaration ~ props:",
    props,
    pageProps,
  )
  const router = useRouter()
  const txId = router.query.txId || CANONICAL
  const body = "body"

  const maybeSigs = useAsync(fetchSignatures, [txId])
  const [clientSigList, setClientSigList] = useState([])

  useEffect(() => {
    if (maybeSigs.result) {
      setClientSigList(maybeSigs.result)
    }
  }, [maybeSigs.result])

  return (
    <>
      <HeadComponent />
      <Hero></Hero>
      <video width="100%" height="580px" controls="false" muted autoplay loop>
        <source src="waftingwhispers.mp4" type="video/mp4" />
      </video>
      <StoryP1 {...pageProps} />
      <LoadingIframe
        src="https://philogb.github.io/page/wind"
        name="windmap"
        className="w-full h-[60vh]"
      />
      <StoryP2 {...pageProps} />
      <img
        src="wafting.png"
        height="580px"
        style={{ width: "100vw", objectFit: "cover" }}
      />
      <StoryP3 {...pageProps} />

      <hr className="my-20" />
      <div className="flex flex-col items-center justify-center">
        <div id="signatureForm" className="mx-4 w-full max-w-2xl">
          <Sign txId={txId} declaration={body} />
        </div>
        <div className="mt-8 mx-4 max-w-2xl w-full">
          {maybeSigs.loading || maybeSigs.error ? (
            <div className="my-4">
              <p className="my-4 font-mono text-xl">Loading signatures</p>
              <BarLoader
                speedMultiplier=".75"
                height="2px"
                width="300px"
                color="#bababa"
              />
            </div>
          ) : (
            <Signatures
              txId={txId}
              sigs={clientSigList}
              setSigs={setClientSigList}
            />
          )}
        </div>
      </div>

      <hr className="my-20" />
      {/* <WindMap /> */}
    </>
  )
}

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
  )
}
