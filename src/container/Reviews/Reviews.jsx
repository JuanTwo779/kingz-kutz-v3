import { useEffect } from "react"

const Reviews = () => {
  // useEffect(() => {
  //   // Prevent multiple injections
  //   if (!document.querySelector("#elfsight-platform")) {
  //     const script = document.createElement("script");
  //     script.src = "https://static.elfsight.com/platform/platform.js";
  //     script.async = true;
  //     script.id = "elfsight-platform";
  //     document.body.appendChild(script);
  //   }
  // }, []);

  return (
    <div className="section__padding app__bg column__flex">
      <h1 className='headtext__cormorant'>Reviews</h1>
      <p className="p__cormorant">Real Clients, Real Confidence</p>
      <p className="p__opensans">Hear what our clients have to say about their experience.</p>
      {/* <script src="https://static.elfsight.com/platform/platform.js" async></script> */}
      {/* <div className="elfsight-app-f6bff16e-0a17-451d-a511-30cd6fedad33" data-elfsight-app-lazy></div> */}
      {/* <div className="elfsight-wrapper">
        <div
          className="elfsight-app-f6bff16e-0a17-451d-a511-30cd6fedad33"
          data-elfsight-app-lazy
        ></div>
      </div> */}
      <div className='sk-ww-google-reviews' data-embed-id='25589257'></div><script src='https://widgets.sociablekit.com/google-reviews/widget.js' defer></script>
      <iframe src='https://widgets.sociablekit.com/google-reviews/iframe/25589257' frameborder='0' width='1000px' height='500px'></iframe>      
    </div>
  )
}

export default Reviews