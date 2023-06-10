import Head from 'next/head'
import Link from 'next/link'
import { useRef } from 'react';



export default function Home() {

  const bestSellers = ['Electronics', 'Home Appliances', 'Books', 'Fashion', 'Groceries', 'Sports & Fitness'];
const products = [
  { id: 1, name: 'Product 1', price: '100', rating: 4.5 },
  { id: 2, name: 'Product 2', price: '200', rating: 4.0 },
  { id: 3, name: 'Product 3', price: '300', rating: 3.5 },
];
const userHistory = [
  { id: 1, name: 'User Product 1', price: '150', rating: 4.2 },
  { id: 2, name: 'User Product 2', price: '250', rating: 4.8 },
];

const scrollContainerRef = useRef(null);

const scroll = (scrollOffset) => {
  scrollContainerRef.current.scrollLeft += scrollOffset;
};



  return (
  <div className="flex flex-col min-h-screen bg-white">
    <main className="container mx-auto py-8">

    <section className="mb-10 relative z-10 -mt-8 w-screen" >
      <div className="bg-white shadow-2xl rounded overflow-hidden relative" style={{ height: "435px" }}>
          <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2" alt="Banner" style={{ filter: "brightness(70%)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" style={{ opacity: "0.7" }}></div>
      </div>
    </section>

    <section className="mb-10 relative z-20 -mt-44">
      <div className='mb-5'>
        <h2 className="text-3xl font-bold mt-12 text-blue-600">Best Sellers at Best Deals</h2>
      </div>
      <button className='ml-3 bg-green-600 border-0 text-white py-2 px-4 text-center no-underline inline-block text-base m-1 cursor-pointer rounded-full' onClick={() => scroll(-300)}>Prev</button>
      <button className='bg-green-600 border-0 text-white py-2 px-4 text-center no-underline inline-block text-base m-1 cursor-pointer rounded-full' onClick={() => scroll(300)}>Next</button>
      <div ref={scrollContainerRef} className="flex overflow-x-scroll hide-scroll-bar">
        {bestSellers.map((product, index) => (
          <div key={index} className="bg-white shadow overflow-hidden rounded-lg flex-shrink-0 m-2" style={{minWidth: '280px'}}>
            <img className="w-full h-48 object-cover" src={`https://source.unsplash.com/random?${product}`} alt={product} />
            <div className="p-4">
              <div className="font-bold text-lg text-blue-700 mb-2">{product}</div>
              <p className="text-blue-800">${Math.floor(Math.random() * 100)}</p>
              <div className="flex items-center">
                <div className="text-yellow-400">{Array(Math.floor(Math.random() * 5) + 1).fill().map((_, i) => '⭐')}</div>
             </div>
            </div>
           <div className="p-4 flex justify-end">
              <button className="px-4 py-2 rounded text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>


    <section className="mb-10">
        <h2 className="text-3xl font-bold mb-5 text-blue-600">Your Browsing History</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {userHistory.map((product) => (
            <div key={product.id} className="bg-white shadow overflow-hidden rounded-lg">
              <img className="w-full h-48 object-cover" src="/product-placeholder.jpg" alt={product.name} />
              <div className="p-4">
                <div className="font-bold text-lg text-blue-700 mb-2">{product.name}</div>
                <p className="text-blue-800">${product.price}</p>
                <div className="flex items-center">
                  <div className="text-yellow-400">{Array(Math.floor(product.rating)).fill().map((_, i) => '⭐')}</div>
                  <div className="ml-2 text-gray-500">({product.rating})</div>
                </div>
              </div>
              <div className="p-4 flex justify-end">
                <button className="px-4 py-2 rounded text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
    </section>

    <section className="mb-10">
        <h2 className="text-3xl font-bold mb-5 text-blue-600">Featured Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow overflow-hidden rounded-lg">
              <img className="w-full h-48 object-cover" src="/product-placeholder.jpg" alt={product.name} />
              <div className="p-4">
                <div className="font-bold text-lg text-blue-700 mb-2">{product.name}</div>
                <p className="text-blue-800">${product.price}</p>
                <div className="flex items-center">
                  <div className="text-yellow-400">{Array(Math.floor(product.rating)).fill().map((_, i) => '⭐')}</div>
                  <div className="ml-2 text-gray-500">({product.rating})</div>
                </div>
              </div>
              <div className="p-4 flex justify-end">
                <button className="px-4 py-2 rounded text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      </main>

      <style jsx>{`
        .hide-scroll-bar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scroll-bar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
  </div>
  )
}
