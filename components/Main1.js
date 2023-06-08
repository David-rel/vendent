import Head from 'next/head'
import Link from 'next/link'

const categories = ['Electronics', 'Home Appliances', 'Books', 'Fashion', 'Groceries', 'Sports & Fitness'];
const products = [
  { id: 1, name: 'Product 1', price: '100', rating: 4.5 },
  { id: 2, name: 'Product 2', price: '200', rating: 4.0 },
  { id: 3, name: 'Product 3', price: '300', rating: 3.5 },
  // Add more products as needed
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="mb-10 relative z-10 -mt-20 sm:-mt-48">
          <div className="bg-white shadow-2xl rounded overflow-hidden relative">
            <img
              className="w-full h-64 object-cover object-top"
              src="https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2"
              alt="Banner"
              style={{ filter: "brightness(70%)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
            <div className="absolute bottom-0 text-white p-5">
              <h2 className="text-3xl font-extrabold mb-2">Welcome to Vendent</h2>
              <p className="text-xl">Shopping made rewarding!</p>
            </div>
          </div>
        </section>

        <section className="mb-10 relative z-20">
          <h2 className="text-3xl font-bold mt-24 text-blue-600">Shop by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white p-3 rounded-lg shadow-md transition transform hover:scale-105"
              >
                <img
                  className="w-full h-36 object-cover rounded-lg mb-2"
                  src={`https://source.unsplash.com/random?${category}`}
                  alt={category}
                />
                <p className="font-semibold text-blue-600">{category}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-5 text-blue-600">Featured Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div key={product.id} className="bg-blue-100 shadow overflow-hidden rounded-lg">
                <img className="w-full h-48 object-cover" src="/product-placeholder.jpg" alt={product.name} />
                <div className="p-4">
                  <div className="font-bold text-lg text-blue-700 mb-2">{product.name}</div>
                  <p className="text-blue-800">${product.price}</p>
                  <div className="flex items-center">
                    <div className="text-yellow-400">
                      {Array(Math.floor(product.rating))
                        .fill()
                        .map((_, i) => '⭐')}
                    </div>
                    <div className="ml-2 text-gray-500">({product.rating})</div>
                  </div>
                </div>
                <div className="p-4 flex justify-end">
                  <button className="px-4 py-2 rounded text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
