
import { images } from "../../../data/ImagesData";
import Image from "next/image";

const ImageDetail = ({params}) => {
  const { id } =  params ; 

  const image = images.find(img => img.id === id); 

  if (!image) {
    return <p>Image not found!</p>; 
  }

  return (
    <div className="flex justify-center items-center p-4">
      <div>
        <h1 className="text-2xl font-semibold">{image.alt}</h1>
        <Image src={image.src} alt={image.alt} width={600} height={600} />
        <p className="mt-4">More details about {image.alt}...</p>
      </div>
    </div>
  );
};

export default ImageDetail;