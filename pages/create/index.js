import UploadWidget from '@/components/UploadWidget'
import React, { useState } from 'react'
import { CloudinaryContext, Image as CloudinaryImage } from 'cloudinary-react'
import Footer from '@/components/Footer'
import Navbar from '@/components/NavbarLogin'
import HeaderLogin from '@/components/HeaderLogin'
import { client, q } from '../../util/fauna'
import { withAuthInfo } from '@propelauth/react'

const DataUploadForm = withAuthInfo((props) => {
  const [uploadedImages, setUploadedImages] = useState([])

  const [starRating, setStarRating] = useState(0)
  const [description, setDescription] = useState('')
  const [store, setStore] = useState('')
  const [videoLink, setVideoLink] = useState('')
  const [brand, setBrand] = useState('')
  const [originalPrice, setOriginalPrice] = useState(0)
  const [nowPrice, setNowPrice] = useState(0)
  const [link, setLink] = useState('')
  const [title, setTitle] = useState('')
  const [date, setDate] = useState(new Date().toLocaleString())

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const form = {
        data: {
          title: title,
          link: link,
          nowPrice: nowPrice,
          originalPrice: originalPrice,
          brand: brand,
          videoLink: videoLink,
          store: store,
          description: description,
          starRating: starRating,
          date: date,
          userId: props.user.userId,
          uploadedImageOne: uploadedImages[0],
          uploadedImageTwo: uploadedImages[1],
          uploadedImageThree: uploadedImages[2],
        },
      }

      const response = await client.query(
        q.Create(q.Collection('reviews'), form)
      )
      alert('data sent:', response)
      window.location.reload()
    } catch (error) {
      console.error('An error occurred:', error)
    }
  }

   const handleUploadImages = (error, result) => {
    if (result.event === 'success') {
      if (uploadedImages.length < 3) {
        setUploadedImages((prev) => {
          // Check if adding this image would exceed the limit
          if (prev.length < 3) {
            return [...prev, result.info.public_id]
          } else {
            // alert('You cannot upload more than 6 images.')
            return prev
          }
        })
      } else {
        // alert('You cannot upload more than 6 images.')
      }
    }
  
  }

  const handleUploadVideo = (error, result) => {
    if (result.event === 'success') {
      setVideoLink(result.info.public_id)
    }
  }

  return (
    <div>
      <HeaderLogin />
      <Navbar />
      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          name="starRating"
          value={starRating}
          onChange={(e) => setStarRating(e.target.value)}
          required
          className="block w-full px-4 py-2 rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">Star Rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
          className="block w-full px-4 py-2 rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />

        <select
          name="store"
          value={store}
          onChange={(e) => setStore(e.target.value)}
          required
          className="block w-full px-4 py-2 rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">Select Store</option>
          <option value="amazon">amazon</option>
        </select>

        <UploadWidget
          onUpload={handleUploadVideo}
          sources={['local', 'url']}
          resourceType="video"
        >
          {({ open }) => (
            <button
              onClick={(e) => {
                e.preventDefault()
                open()
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Upload video
            </button>
          )}
        </UploadWidget>

        <CloudinaryContext
          cloudName={`${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}`}
        >
          <CloudinaryImage publicId={videoLink} />
        </CloudinaryContext>

        <select
          name="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          required
          className="block w-full px-4 py-2 rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">Select Brand</option>
          <option value="nike">Nike</option>
        </select>

        <input
          type="number"
          name="originalPrice"
          value={originalPrice}
          onChange={(e) => setOriginalPrice(e.target.value)}
          placeholder="Original Price"
          required
          className="block w-full px-4 py-2 rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />

        <input
          type="number"
          name="nowPrice"
          value={nowPrice}
          onChange={(e) => setNowPrice(e.target.value)}
          placeholder="Now Price"
          required
          className="block w-full px-4 py-2 rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />

        <select
          name="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
          className="block w-full px-4 py-2 rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">Select Link</option>
          <option value="link1">link1</option>
        </select>

        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
          className="block w-full px-4 py-2 rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />

        <UploadWidget
          onUpload={handleUploadImages}
          sources={['local', 'url']}
          resourceType="image"
          multiple
        >
          {({ open }) => (
            <button
              onClick={(e) => {
                e.preventDefault()
                open()
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Upload 3 images
            </button>
          )}
        </UploadWidget>
        {uploadedImages.map((publicId, index) => (
          <div key={index} className="w-1/3 p-4">
            <CloudinaryContext
              cloudName={`${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}`}
            >
              <CloudinaryImage publicId={publicId} />
            </CloudinaryContext>
          </div>
        ))}

        <button
          onClick={handleSubmit}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Upload
        </button>
      </form>
      <Footer />
    </div>
  )
})

export default DataUploadForm
