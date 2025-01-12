import React from 'react'
import advert1 from '../assets/cozy.jpg'
import advert2 from '../assets/color.jpg'

const Previews = () => {
  return (
    <>
    <div className="container preview-container p-container1">
      <div><p>Discover the magic of indoor potted plants for your health and well-being! They don't just look great—they improve air quality, reduce stress, and boost your mood. Let these living companions bring tranquility, cleaner air, and a renewed sense of calm into your daily life.</p></div>
      <img src={advert1} alt="a girl reading sorrouded by plants"   className='p-img1' />
    </div>

    <div className="container preview-container  p-container2">
    <img src={advert2} alt="a plant inside the house"  className='p-img2'/>
      <div><p>Transform your home into a vibrant haven with the stunning beauty of indoor potted plants. From lush greens to colorful blooms, these natural accents elevate your space, creating a fresh and inviting atmosphere. Bring life, color, and elegance to every corner of your home!</p></div>
      
    </div>
    </>
  )
}

export default Previews
