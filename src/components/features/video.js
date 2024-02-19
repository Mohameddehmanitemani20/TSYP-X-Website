import video from "../../videoplayback.mp4";
import "./video.css";
import { isBrowser, isDesktop } from "react-device-detect";

const Video = () => {
  const endVideo = () => {
    sessionStorage.setItem("first_time", false);
    window.location = "/";
  };

  return (
    <>
      {isBrowser && isDesktop ? (
        <div>
          {/*  <button style={{}} class="button-73" onClick={endVideo}>
            LIFT OFF! &#128640;
          </button> */}

          <button class="button-57" role="button" onClick={endVideo}>
            <span class="text">Skip now</span>
            <span>LIFT OFF!&#128640;</span>
          </button>

          <video autoPlay muted src={video} onClick={endVideo} onEnded={endVideo} />
        </div>
      ) : (
        <div style={{ marginTop: "60%" }}>
          <video autoPlay muted src={video} onClick={endVideo} onEnded={endVideo} />
          {/*   <button class="button-73" style={{ color: "black" }} onClick={onDoubleClick}>
            LIFT OFF! &#128640;
          </button> */}
          <center>&#128640;</center>
        </div>
      )}
    </>
  );
};

export default Video;
