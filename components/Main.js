
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 px-5 text-gray-700">
      {/* Hero Section */}
      <div className="text-center p-10 bg-blue-500 text-white rounded-lg w-screen">
        <img className="m-auto w-1/2" src="/path/to/image.jpg" alt="Main Image" /> {/* Main Image */}
        <h1 className="text-4xl font-bold mt-5">Welcome to Our Vendent</h1> {/* Welcome Text */}
        <button className="mt-5 px-8 py-3 bg-white text-blue-500 font-semibold rounded-full">Join Now</button> {/* Join Now Button */}
      </div>
      {/* About Section */}
      <div className="text-center p-10">
        <h1 className="text-4xl font-bold mb-5">What We Do</h1> {/* What the business is */}
        <p className="text-lg leading-7">Detailed explanation on how the business works. This section can include multiple paragraphs to provide as much information as necessary about the business. Add images, icons, and more to enrich the information.</p> {/* How it works */}
      </div>
      {/* Statistics Section */}
      <div className="text-center p-10 bg-blue-100 rounded-lg w-screen">
        <h2 className="text-3xl font-bold mb-5">Our Stats</h2> {/* Stats Header */}
        <div className="grid grid-cols-2 gap-10 text-center">
          <div className="border rounded-lg p-5">
            <h3 className="text-2xl font-semibold">Total Cashback</h3> {/* Total Cashback Stat */}
            <p className="text-4xl font-bold mt-2">Amount</p>
          </div>
          <div className="border rounded-lg p-5">
            <h3 className="text-2xl font-semibold">Total Users</h3> {/* Total Users Stat */}
            <p className="text-4xl font-bold mt-2">Number</p>
          </div>
        </div>
      </div>
      {/* Testimonials Section */}
      <div className="text-center p-10">
        <h2 className="text-3xl font-bold mb-5">User Testimonials</h2> {/* Testimonials Header */}
        <div className="grid grid-cols-3 gap-10">
          {/* Add Testimonial Cards Here */}
        </div>
      </div>
    </div>
  )
}