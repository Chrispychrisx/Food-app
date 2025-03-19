import { RiCake2Line, RiGlobeLine, RiLeafLine, RiRestaurant2Line, RiRestaurantLine, RiShoppingBag2Line, RiTable3 } from '@remixicon/react'
import logo from '../assets/logo.jpeg'
import logo1 from '../assets/logo1.jpeg'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className='left-side'>
        <div className="flex flex-col text-center">
            <img src={logo} alt="logo" className='h-12 object-contain' />
            <h3 className='text-2xl font-semibold max-md:hidden'>
                <span className='text-accent'>Sizzling</span>
                <span className='text-orange-500'> Place</span>
            </h3>

            <div className="side-menus">
                <div className="side-menu">
                    <span><RiCake2Line className='text-orange-500'/></span>
                    <NavLink to={`/category/confectioneries`}>Confessionaries</NavLink>
                </div>

                <div className="side-menu">
                    <span><RiRestaurant2Line className='text-orange-500'/></span>
                    <NavLink to={`/category/local`}>Local</NavLink>
                </div>

                <div className="side-menu">
                    <span><RiGlobeLine className='text-orange-500'/></span>
                    <NavLink to={`/category/continental`}>Continental</NavLink>
                </div>

                <div className="side-menu">
                    <span><RiShoppingBag2Line className='text-orange-500'/></span>
                    <NavLink to={`/category/chinese`}>Chinese</NavLink>
                </div>

                <div className="side-menu">
                    <span><RiRestaurantLine className='text-orange-500'/></span>
                    <NavLink to={`/category/appetizer`}>Appetizer</NavLink>
                </div>

                <div className="side-menu">
                    <span><RiLeafLine className='text-orange-500'/></span>
                    <NavLink to={`/category/vegetarian`}>Vegetarian</NavLink>
                </div>
            </div>
        </div>
    </aside>
  )
}

export default Sidebar
