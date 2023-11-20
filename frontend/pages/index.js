import PageLayout from '../components/PageLayout';  
import Hero from './hero';
import StoryP1 from './story-p1.mdx';
import StoryP2 from './story-p2.mdx';
import StoryP3 from './story-p3.mdx';


export default function Article({ pageProps }) {
    return (
      <>
        <Hero></Hero>
        <video width="100%" height="580px" controls="false" muted autoplay loop>
          <source src="waftingwhispers.mp4" type="video/mp4" />
        </video>
        <StoryP1 {...pageProps} />
        <iframe
          src="https://philogb.github.io/page/wind"
          name="windmap"
          className="w-full h-[60vh]"
        />
        <StoryP2 {...pageProps} />
        <img src="wafting.png"  height="580px" style={{width:"100vw", objectFit:"cover"}} />
        <StoryP3 {...pageProps} />
        {/* <WindMap /> */}
      </>
    );
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
    );
};