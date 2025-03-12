import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Index = () => {
  return (
    <main className='relative'>
      <div className="md:mx-4 lg:mx-auto flex justify-between">
        <Sidebar />

        <div className="content">
            <div className="flex flex-col">
                <Navbar />
                <div className="mt-11 overflow-auto">

                <Hero />

                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos odit quae vero dolores ea incidunt autem possimus obcaecati voluptates accusantium, tempore aperiam voluptate vel voluptatibus maxime quis sunt delectus dicta voluptatem beatae modi cumque minima ratione! Harum quo pariatur distinctio delectus praesentium ipsa voluptatum nesciunt! Nulla voluptatum porro expedita magnam amet voluptates totam praesentium minus,
                </div>
            </div>
            
        </div>
      </div>
    </main>
  )
}

export default Index
