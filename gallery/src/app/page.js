"use client"
import { images } from "../data/ImagesData";  
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-8xl flex justify-center items-center mx-auto">
      <div className="gallery grid grid-cols-3 gap-4 p-4">
        {images.map((image) => (
          <div key={image.id} className="photo">
            <Link href={`/photo/${image.id}`}> 
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={600}
                  className="transition-transform transform hover:scale-105"
                />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}