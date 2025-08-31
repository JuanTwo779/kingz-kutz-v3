
const Reviews = () => {

  return (
    <div className="section__padding app__bg column__flex">
      <h1 className='headtext__cormorant'>Reviews</h1>
      <p className="p__cormorant">Real Clients, Real Confidence</p>
      <p className="p__opensans">Hear what our clients have to say about their experience.</p>
      <div className='sk-ww-google-reviews' data-embed-id='25589257'></div><script src='https://widgets.sociablekit.com/google-reviews/widget.js' defer></script>
      <iframe src='https://widgets.sociablekit.com/google-reviews/iframe/25589257'  width='100%' height='500px'></iframe>      
    </div>
  )
}

export default Reviews