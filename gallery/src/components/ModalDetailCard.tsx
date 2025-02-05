import Image from "next/image";

type image = {
  src: string;
  alt: string;
};

type Props = {
  image: image;
  goToNext: () => void;
  goToPrevious: () => void;
};

export default function ModalDetailCard({ image, goToNext, goToPrevious }: Props) {
  return (
    <div className="relative">
      <Image 
        src={image.src} 
        alt={image.alt} 
        width={1000} 
        height={800} 
        className="object-contain"
      />
    
      <button 
        onClick={goToPrevious} 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
      >
        Prev
      </button>
      <button 
        onClick={goToNext} 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
      >
        Next
      </button>
    </div>
  );
}