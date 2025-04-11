import heroimg from '../assets/rest-1.jpg';
import cake from '../assets/confectioneries/confectioneries-7.jpg'
import soup from '../assets/Local/local-soup.jpg'
import chinese from '../assets/chinese/chinese-4.jpg'
import vegan from '../assets/vegetarian/vegetarian-2.jpg'
import drink from '../assets/drinks/drink-4.jpg'
import conti from '../assets/continental/continental-10.jpg'
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='bg-accent-secondary p-8'>
      <div className="hero-div">
        <div className="hero-img">
            <img src={heroimg} alt="heroimg" />
        </div>


        <div className="hero-title">
          <div className='text-2xl flex flex-col text-center gap-5'>
              <span className='text-[2rem] uppercase text-blue-700'>Crispy Corner</span>
              <span className=''> 
                <span className='text-orange-900'>Restaurant</span>  
                {/* <span className='text-orange-400'> Kitchen</span>   */}
              </span>
              
              <p className='text-[1rem] font-light'>
              A fine dining restaurant offering a fusion of international flavors with fresh, locally sourced ingredients. From gourmet appetizers to signature main courses, every dish is crafted with excellence.
              </p>
          </div>
        </div>

      </div>

      <h2 className='flex flex-col gap-3 w-full text-xl items-center font-normal tracking-wider mb-5'>
        <span>Our Food Categories</span>
        <div className="border-t-[3px] border-orange-400 w-[13rem]"></div>

      </h2>

      <div className="hero-grids">
        <NavLink to={`/category-page/vegetarian`}>
        <div className="hero-grid cursor-pointer"> 
          <div className='hero-grid-desc'>Vegan</div>
          <img src={vegan} alt="vegan" className='object-cover' /> 
        </div>
        </NavLink>
        

        <NavLink to={`/category-page/local`}>
        <div className="hero-grid cursor-pointer"> 
          <div className='hero-grid-desc'>Local</div>
          <img src={soup} alt="vegan" className='object-cover' /> 
        </div>
        </NavLink>



        <NavLink to={`/category-page/continental`}>
        <div className="hero-grid cursor-pointer"> 
          <div className='hero-grid-desc'>Continental</div>
          <img src={conti} alt="vegan" className='object-cover' /> 
        </div>
        </NavLink>

        <NavLink to={`/category-page/chinese`}>
        <div className="hero-grid cursor-pointer"> 
          <div className='hero-grid-desc'>Chinese</div>
          <img src={chinese} alt="vegan" className='object-cover' /> 
        </div>

        </NavLink>

        <NavLink to={`/category-page/appetizer`}>
        <div className="hero-grid cursor-pointer"> 
            <div className='hero-grid-desc'>Appetizer</div>
            <img src={cake} alt="vegan" className='object-cover' /> 
        </div>
        </NavLink>

        <NavLink to={`/category-page/drinks`}>
        <div className="hero-grid cursor-pointer"> 
          <div className='hero-grid-desc'>Drinks</div>
          <img src={drink} alt="vegan" className='object-cover' /> 
        </div>
        </NavLink>

          
        </div>

        
        
    </section>
  )
}

export default Hero
