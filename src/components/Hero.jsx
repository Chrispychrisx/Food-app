import heroimg from '../assets/new-food/photo-2.jpeg';

const Hero = () => {
  return (
    <section className='hero-div gap-12 items-center'>
        <div className="hero-img">
            <img src={heroimg} alt="heroimg" />
        </div>

        <div className="hero-title">
            <div className='text-4xl flex flex-col justify-center text-center uppercase gap-8'>
                <span className='text-[4rem] text-orange-600'>Welcome</span>
                <span className=''> to Chrispy Resturant</span>

                <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni mollitia quos, illum cumque saepe quod!</p>
            </div>
        </div>
    </section>
  )
}

export default Hero
