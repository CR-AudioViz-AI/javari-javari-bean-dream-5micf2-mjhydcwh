'use client';

import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                {/* Website Logo */}
                <a href="#" className="flex items-center py-4 px-2">
                  <img src="https://i.ibb.co/ZT0zHbK/coffee-bean.png" alt="Bean Dream Logo" className="h-8 w-8 mr-2"/>
                  <span className="font-semibold text-gray-500 text-lg">Bean Dream</span>
                </a>
              </div>
              {/* Primary Navbar items */}
              <div className="hidden md:flex items-center space-x-1">
                <a href="#" className="py-4 px-2 text-orange-500 border-b-4 border-orange-500 font-semibold">Home</a>
                <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-orange-500">Menu</a>
                <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-orange-500">Events</a>
                <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-orange-500">Contact</a>
              </div>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button">
              <svg className=" w-6 h-6 text-gray-500 hover:text-orange-500 "
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
           </div>
          </div>
        </div>
      </nav>
      <header className="w-full h-screen bg-center bg-cover bg-no-repeat" style={{backgroundImage: 'url("https://i.ibb.co/cXFnLLV/3.png")'}}>
        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">Enjoy the finest blend at <span className="text-orange-400 underline">Bean Dream</span></h1>
            <button className="mt-6 px-4 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-400">Explore Menu</button>
          </div>
        </div>
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
          <h2 className="text-base text-orange-500 font-semibold tracking-wide uppercase">Discover</h2>
          <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Our Story</h1>
          <p className="text-xl leading-relaxed text-gray-500">At Bean Dream, we believe in not just a cup of coffee, but an experience. Sourced from the finest beans around the world, our blends are crafted with love and precision, ensuring every sip tells a story of its own.</p>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
              <div className="relative pb-48 overflow-hidden">
                <img className="absolute inset-0 h-full w-full object-cover" src="https://i.ibb.co/b7GPQdK/coffee-cup.jpg" alt=""/>
              </div>
              <div className="p-4">
                <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 font-semibold uppercase tracking-wide text-xs">Featured Blend</span>
                <h2 className="mt-2 mb-2 font-bold">Sunrise Blend</h2>
                <p className="text-sm">Kick start your day with our Sunrise Blend, a perfect mix to awaken your senses.</p>
                <div className="mt-3 flex items-center">
                  <span className="text-sm font-semibold">Read More</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
              <div className="relative pb-48 overflow-hidden">
                <img className="absolute inset-0 h-full w-full object-cover" src="https://i.ibb.co/Yb0YvNV/coffee-beans.jpg" alt=""/>
              </div>
              <div className="p-4">
                <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 font-semibold uppercase tracking-wide text-xs">Our Specialty</span>
                <h2 className="mt-2 mb-2 font-bold">Craft Roasting</h2>
                <p className="text-sm">Discover the art behind our craft roasting process, where every bean is treated with the utmost care.</p>
                <div className="mt-3 flex items-center">
                  <span className="text-sm font-semibold">Learn More</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
              <div className="relative pb-48 overflow-hidden">
                <img className="absolute inset-0 h-full w-full object-cover" src="https://i.ibb.co/3RyZLPM/coffee-shop.jpg" alt=""/>
              </div>
              <div className="p-4">
                <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 font-semibold uppercase tracking-wide text-xs">Visit Us</span>
                <h2 className="mt-2 mb-2 font-bold">Cozy Ambience</h2>
                <p className="text-sm">Step into our cozy shop and let your worries melt away with a warm cup of coffee.</p>
                <div className="mt-3 flex items-center">
                  <span className="text-sm font-semibold">View Gallery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-800">
        <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
            <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                <div className="text-xs uppercase text-gray-400 font-medium mb-6">Getting Started</div>
                <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#">Installation</a>
                <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#">Release Notes</a>
                <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#">Upgrade Guide</a>
                <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#">Using with Preprocessors</a>
                <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#">Optimizing for Production</a>
                <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#">Browser Support</a>
                <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#">Integrations</a>
            </div>
            <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                <div className="text-xs uppercase text-gray-400 font-medium mb-6">Core Concepts</div>
                <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#">Utility-First</a>
                <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#">Responsive Design</a>
                <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#">Hover, Focus, & Other States</a>
                <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#">Dark Mode</a>
                <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#">Adding Base Styles</a>
                <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#">Extracting Components</a>
                <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#">Adding New Utilities</a>
            </div>
        </div>
        <div className="pt-2">
            <div className="flex pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-gray-400 text-sm flex-col md:flex-row max-w-6xl">
                <div className="mt-2">© 2025 Bean Dream. All rights reserved.</div>
                <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                    <a href="#" className="w-6 mx-1">
                        <i className="uil uil-facebook-f"></i>
                    </a>
                    <a href="#" className="w-6 mx-1">
                        <i className="uil uil-twitter-alt"></i>
                    </a>
                    <a href="#" className="w-6 mx-1">
                        <i className="uil uil-youtube"></i>
                    </a>
                    <a href="#" className="w-6 mx-1">
                        <i className="uil uil-linkedin"></i>
                    </a>
                    <a href="#" className="w-6 mx-1">
                        <i className="uil uil-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
      </footer>
    </div> 
  );
}