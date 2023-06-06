import { Parallax } from 'react-parallax';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen py-2 px-5 text-gray-700">

      {/* Hero Section */}
      <Parallax bgImage="/path/to/image.jpg" strength={500}>
        <div style={{ height: 500 }} className="flex flex-row items-center justify-start bg-blue-500 text-white text-left w-screen pl-20">
          <div className="m-0">
            <h1 className="text-2xl font-bold mt-5">Vendent: Making Online Shopping Better Than Ever!</h1>
            <h2 className="text-xl mt-3 mb-5">Your one-stop platform for the best deals across the web. Shop smarter and save with every purchase!</h2>
            <button className="transition duration-500 ease-in-out px-4 py-2 bg-white text-blue-500 text-sm font-semibold rounded-full hover:bg-blue-500 hover:text-white transform hover:-translate-y-1 hover:scale-110">Start your saving journey with Vendent – Sign Up Now!</button>
          </div>
          <Image src="/guy1.png" alt="Description of image" className="ml-10 mr-10" width={500} height={200}/>
        </div>
      </Parallax>


      {/* Benefits Section */}
      <section className="flex justify-evenly p-10 bg-gray-50">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-5">Why Choose Vendent?</h2>
          <ul className="list-disc list-inside text-lg leading-7 space-y-2">
            <li>Earn cash back on each purchase.</li>
            <li>Save time and effort by finding the best deals in one place.</li>
            <li>Track your spendings to see exactly where your money is going.</li>
            <li>Enjoy smoother than ever shopping experience.</li>
          </ul>
        </div>
        <img className="h-48 mt-12" src="/Maginfy.png" alt="Benefits" />
        <img className="h-48 mt-8" src="/pngwing.com (1).png" alt="Benefits" />
        <img className="h-40 mt-12" src="/pngwing.com.png" alt="Benefits" />
      </section>

      {/* How it Works Section */}
      <section className="flex justify-evenly p-10 bg-blue-100 rounded-lg">
        <img className="mt-10 h-32" src="/Scale.png" alt="How it Works" />
        <img className="mt-16 ml-5 h-20" src="/Buy.png" alt="How it Works" />
        <img className="h-48" src="Cart.png" alt="How it Works" />
        <img className="h-40 mt-6" src="Analytics.png" alt="How it Works" />
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-5">How Vendent Works</h2>
          <ul className="list-disc list-inside text-lg leading-7 space-y-2">
            <li>Step 1: Search for your favorite product.</li>
            <li>Step 2: Compare deals from different sellers.</li>
            <li>Step 3: Make a purchase and earn cash back or points.</li>
            <li>Step 4: Track your spendings all in one place.</li>
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="p-10 bg-gray-50">
  <h2 className="text-3xl font-bold mb-5 text-center">Frequently Asked Questions</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    <div className="bg-white p-5 rounded shadow transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
      <h3 className="text-xl font-bold mb-2">What is Vendent?</h3>
      <p className="text-gray-600">Vendent is an online platform that... (add answer)</p>
    </div>
    <div className="bg-white p-5 rounded shadow transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
      <h3 className="text-xl font-bold mb-2">How does Vendent work?</h3>
      <p className="text-gray-600">When you shop through Vendent, you... (add answer)</p>
    </div>
    <div className="bg-white p-5 rounded shadow transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
      <h3 className="text-xl font-bold mb-2">How can I join Vendent?</h3>
      <p className="text-gray-600">To join Vendent, simply click on... (add answer)</p>
    </div>
    {/* Add more FAQ Cards Here */}
  </div>
</section>

{/* Testimonials Section */}
<section className="p-10 bg-gray-50">
  <h2 className="text-3xl font-bold mb-5 text-center">User Testimonials</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

    <div className="p-5 bg-white rounded shadow transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
      <p className="text-gray-700 italic">"I've saved so much using Vendent! The deals are fantastic, and it's so easy to use. I'm recommending it to all my friends!"</p>
      <p className="mt-5 text-sm text-gray-600 font-bold">- Sarah T., San Francisco</p>
    </div>

    <div className="p-5 bg-white rounded shadow transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
      <p className="text-gray-700 italic">"I love that Vendent gives cash back on my purchases. It's like getting paid to shop! Can't wait to see what deals they'll have next."</p>
      <p className="mt-5 text-sm text-gray-600 font-bold">- Jake P., New York City</p>
    </div>

    <div className="p-5 bg-white rounded shadow transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
      <p className="text-gray-700 italic">"Vendent is a game changer. No more hunting for deals on different sites. Plus, the cash back is a huge bonus!"</p>
      <p className="mt-5 text-sm text-gray-600 font-bold">- Emily R., Chicago</p>
    </div>

  </div>
</section>

      {/* Contact Section */}
      <section className="flex justify-evenly p-10 bg-white">
        <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-5">Follow Us</h2>
          <div>
            <button>
              <img className="h-24" src="/instagram.png" alt="Contact Us" />
            </button>
            <button>
              <img className="h-24 ml-2" src="/twitter.png" alt="Contact Us" />
            </button>
            <button>
              <img className="h-24 ml-8" src="/facebook.png" alt="Contact Us" />
            </button>
            <button>
              <img className="h-24 ml-10" src="/youtube.png" alt="Contact Us" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}