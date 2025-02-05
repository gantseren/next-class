"use client";

import { useState } from "react";
import ButtonCloseModal from "../../../../components/ButtonCloseModal";
import { images } from "../../../../data/ImagesData";
import ModalDetailCard from "../../../../components/ModalDetailCard";

export default function ModalDetail({ params }) {
  const { id } = params;

  const initialImageIndex = images.findIndex((img) => img.id === id);

  const [currentIndex, setCurrentIndex] = useState(initialImageIndex);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="fixed inset-0 bg-zinc-900/20 z-10">
      <div className="flex items-center h-full max-w-4xl mx-auto">
        <div className="relative bg-white w-full p-9 rounded-lg">
          <ButtonCloseModal />
          <ModalDetailCard
            image={images[currentIndex]}
            goToNext={goToNext}
            goToPrevious={goToPrevious}
          />
        </div>
      </div>
    </div>
  );
}
