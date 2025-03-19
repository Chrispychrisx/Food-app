import React from 'react'
import { chinese } from '../constants'
import { NavLink } from 'react-router-dom'
import { RiStarFill } from '@remixicon/react'


const Chinese = () => {
  return (
    <section className='bg-accent-secondary p-3'>
        <div className='text-2xl font-normal tracking-wider mb-11 flex flex-col justify-center items-center gap-1'>
           <span className=''>Chinese</span> 
           <div className='border-t-[3px] border-orange-400 w-[12rem]'></div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 px-4">
            
                {
                    chinese.map((item) => (
                        <div key={item.id} className="grid-item">
                          <NavLink to={`/category/chinese/${item.name}`} >
                              <img src={item.imgUrl} alt={item.name}/>
                          </NavLink>


                          <div className="item-desc">
                            <span> {item.name} </span>

                            <div className="flex">
                              {
                                item.ratings.map((rating) => (
                                  <RiStarFill key={rating} size={13} className='text-accent' />
                                ) )
                              }
                            </div>
                          </div>
                            
                        </div>
                    ))
                }
            
        </div>
    </section>
  )
}

export default Chinese
