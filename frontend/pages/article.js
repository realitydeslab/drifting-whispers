import PageLayout from '../components/PageLayout';  
import StoryP1 from './story-p1.mdx';
import StoryP2 from './story-p2.mdx';
import StoryP3 from './story-p3.mdx';


export default function Article({ pageProps }) {
    return (
      <>
        
        <video width="100%" height="580px" controls="false">
          <source src="waftingwhispers.mp4" type="video/mp4" />
        </video>


        <StoryP1 {...pageProps} />
        <iframe
          src="https://philogb.github.io/page/wind"
          name="windmap"
          className="w-full h-[60vh]"
        />
        <StoryP2 {...pageProps} />
        {placeholder("Video Placeholder")}
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