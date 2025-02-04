"use client"
import { useState } from "react"
import ButtonCloseModal from "../../../../components/ButtonCloseModal"
import { images } from "../../../../data/ImagesData"
import Image from "next/image"

export default function ModalDetail({ params }) {
  const { id } = params

  const currentIndex = images.findIndex((img) => img.id === id)

  const [index, setIndex] = useState(currentIndex)

  const goToNextImage = () => {
    if (index < images.length - 1) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
  }

  const goToPreviousImage = () => {
    if (index > 0) {
      setIndex(index - 1)
    } else {
      setIndex(images.length - 1)
    }
  }

  const image = images[index]

  return (
    <div className='fixed inset-0 bg-zinc-900/20 z-10'>
      <div className='flex items-center h-full max-w-3xl mx-auto'>
        <div className='relative bg-white w-full py-20 px-2 rounded-lg'>
          <ButtonCloseModal />
          <div className='flex justify-center items-center p-4'>
            <div>
              <h1 className='text-2xl font-semibold'>{image.alt}</h1>
              <Image
                src={image.src}
                alt={image.alt}
                width={1000}
                height={950}
              />
              <p className='mt-4'>More details about {image.alt}...</p>
              <div className='flex justify-between mt-4'>
                <button
                  onClick={goToPreviousImage}
                  className='py-2 px-4 bg-blue-500 text-white rounded-md'
                >
                  Previous
                </button>
                <button
                  onClick={goToNextImage}
                  className='py-2 px-4 bg-blue-500 text-white rounded-md'
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
