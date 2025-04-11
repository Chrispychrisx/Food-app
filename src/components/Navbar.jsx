import React from 'react'
import logo from '../assets/logo1.jpeg'
import { NavLink } from 'react-router-dom'
import { RiBowlLine, RiCake2Line, RiGlobalLine, RiGobletLine, RiHeart2Line, RiHome2Line, RiLeafLine, RiPhoneLine, RiRestaurant2Line, RiRestaurantLine, RiUser3Line } from '@remixicon/react'

const Navbar = ({showMenu, setShowMenu}) => {
  return (
    <>
      <nav className='navbar'>
          <div className="nav-menu md:hidden flex items-center text-orange-400 cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
              <img src={logo} alt="logo" className='w-6 h-6' />
          </div>


          <div className="nav-menus">
              <NavLink to={`/home`} className={ ({isActive})  => { return isActive ? 'nav-menu-active' : 'nav-menu' } }>
                  <div className="flex items-center gap-1">
                    <RiHome2Line className="sm:flex md:flex text-accent" />
                  </div>
                    <span className='max-md:hidden'>Home</span>
              </NavLink>

              <NavLink to={`/meal/create`} className={ ({isActive})  => { return isActive ? 'nav-menu-active' : 'nav-menu' } }>
                  <div className="flex items-center gap-1">
                    <RiBowlLine className="sm:flex md:flex text-accent" />
                  </div>
                    <span className='max-md:hidden'>Meal</span>
              </NavLink>

              <NavLink to={`/category-page/favorites`} className={ ({isActive})  => { return isActive ? 'nav-menu-active' : 'nav-menu' } }>
                  <div className="flex items-center gap-1">
                    <RiHeart2Line className="sm:flex md:flex text-accent" />
                  </div>
                    <span className='max-md:hidden'>Favorites</span>
              </NavLink>

              <NavLink to={`/contact`} className={ ({isActive})  => { return isActive ? 'nav-menu-active' : 'nav-menu' } }>
                  <div className="flex items-center gap-1">
                    <RiPhoneLine className="sm:flex md:flex text-accent" />
                  </div>
                    <span className='max-md:hidden'>Contact</span>
              </NavLink>
          </div>

          <div className="nav-menu cursor-pointer">
              <RiUser3Line/>
          </div>
      </nav>



      {/* MOBILE NAV */}
      {
        showMenu && 
        (
          <div className="bg-white side-menus h-fit w-fit border border-accent/40 p-4 rounded-md !mt-2 z-30 absolute">
            <div className="side-menu">
              <span><RiCake2Line className='text-orange-400' /></span>
                <NavLink to={`/category-page/confectioneries`}>
                Confectioneries
                </NavLink>
            </div>

            <div className="side-menu">
              <span><RiRestaurant2Line className='text-orange-400' /></span>
                <NavLink to={`/category-page/local`}>
                Local
                </NavLink>
            </div>

            <div className="side-menu">
              <span><RiGlobalLine className='text-orange-400' /></span>
                <NavLink to={`/category-page/continental`}>
                Continental
                </NavLink>
            </div>

            <div className="side-menu">
              <span><RiBowlLine className='text-orange-400' /></span>
                <NavLink to={`/category-page/chinese`}>
                Chinese
                </NavLink>
            </div>

            <div className="side-menu">
              <span><RiLeafLine className='text-orange-400' /></span>
                <NavLink to={`/category-page/vegetarian`}>
                Vegetarian
                </NavLink>
            </div>

            <div className="side-menu">
              <span><RiRestaurantLine className='text-orange-400' /></span>
                <NavLink to={`/category-page/appetizer`}>
                Appetizer
                </NavLink>
            </div>

            <div className="side-menu">
              <span><RiGobletLine className='text-orange-400' /></span>
                <NavLink to={`/category-page/drinks`}>
                Drinks
                </NavLink>
            </div>
            
          </div>
        )
      }
    </>
    
  )
}

export default Navbar