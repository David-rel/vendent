import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

function Help() {
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`Email sent: ${message}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="flex items-center justify-between px-6 py-2 text-white h-16 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
        <div className='flex'>
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <img src="/vendent.png" alt="Logo" className="w-40 h-12 rounded-full" />
            </div>
          </Link>
          <Link href="/help">
            <p className="ml-4 text-white hover:text-blue-200 px-3 py-2 rounded-md text-lg font-bold cursor-pointer">
              Help Center
            </p>
          </Link>
        </div>
        <nav className='flex text-white'>
          <Link href="/Landing">
            <p className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-lg font-bold cursor-pointer">How it Works</p>
          </Link>
        </nav>
      </header>

      <main className="flex-grow px-6">
        <section className="my-12">
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Help Section</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded p-6">
              <h3 className="text-lg text-gray-600 mb-2">How does Vendent work?</h3>
              <p className="text-gray-600">Detailed answer about how Vendent works...</p>

              <div className="mt-6">
                <h3 className="text-lg text-gray-600 mb-2">How do I sign up?</h3>
                <p className="text-gray-600">Detailed answer about how to sign up...</p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded p-6">
              <h2 className="text-xl text-gray-700 font-semibold mb-2">Contact Us</h2>
              <form onSubmit={handleSubmit}>
                <label className="block">
                  <span className="text-gray-700">Your Question</span>
                  <textarea
                    className="form-input mt-1 block w-full"
                    rows="5"
                    value={message}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                  ></textarea>
                </label>
                <button className="px-4 py-2 mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded hover:from-purple-600 hover:to-blue-500">Send</button>
              </form>
            </div>

          </div>
          <p className="text-center my-6">Can't find what you're looking for? Contact us at support@vendent.com</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Help;
