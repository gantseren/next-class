import "./styled.css"

import Image from "next/image"
import { images } from "@/data/Images"
const ImagesCard = () => {
  return (
    <div>
      <div className='gallery'>
        {images.map((image) => (
          <div key={image.title} className='image-item'>
            <Image
              src={image.src}
              alt={image.alt}
              title={image.title}
              width={400}
              height={300}
              layout='responsive'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImagesCard
