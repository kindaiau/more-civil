import React from 'react'
import WaterTruck1 from '../../assets/water/watertruck-1.webp'
import WaterTruck2 from '../../assets/water/watertruck-2.webp'
import Project1 from '../../assets/projects/project-1.webp'
import Project2 from '../../assets/projects/project-2.webp'

const Home: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero - kept untouched (assuming site has its own hero) */}

      {/* Services / Water Cartage Section */}
      <section className="mt-8">
        <h2 className="text-3xl font-semibold text-[#0B1F2A] mb-4">Water Cartage</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow rounded p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-medium text-[#0B1F2A]">Potable & Non-Potable Water Delivery</h3>
              <p className="mt-3 text-gray-700">We provide reliable water cartage for construction, emergency response and events across South Australia. Our fleet is fully insured and maintained to the highest standards.</p>
            </div>

            <div className="mt-4 flex gap-3">
              <button className="px-4 py-2 rounded text-white" style={{backgroundColor: '#00B4D8'}}>Book Water</button>
              <a href="/contact" className="px-4 py-2 rounded border" style={{borderColor: '#0B1F2A', color: '#0B1F2A'}}>Contact Us</a>
            </div>
          </div>

          <div className="bg-white shadow rounded p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <img src={WaterTruck1} alt="Water truck side" className="w-full h-48 object-cover rounded" />
              <img src={WaterTruck2} alt="Water truck rear" className="w-full h-48 object-cover rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="mt-12">
        <h2 className="text-3xl font-semibold text-[#0B1F2A] mb-4">Recent Projects</h2>

        <div className="bg-white shadow rounded p-6">
          <p className="text-gray-700 mb-6">Here are a few of our recent projects showcasing our earthmoving, drainage and site preparation capabilities.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded overflow-hidden">
              <img src={Project1} alt="Project 1" className="w-full h-48 object-cover" />
            </div>

            <div className="rounded overflow-hidden">
              <img src={Project2} alt="Project 2" className="w-full h-48 object-cover" />
            </div>

            <div className="rounded overflow-hidden flex items-center justify-center border border-dashed border-gray-200">
              <div className="text-center p-6">
                <h4 className="font-medium text-[#0B1F2A]">More Projects</h4>
                <p className="text-sm text-gray-600 mt-2">View our full projects gallery to learn more about the work we do.</p>
                <a href="/projects" className="inline-block mt-3 px-4 py-2 rounded text-white" style={{backgroundColor: '#00B4D8'}}>View Projects</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Home