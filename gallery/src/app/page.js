"use client";
import ImageCard from "../components/ImageCard";
import { images } from "../data/ImagesData";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid gap-6 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}