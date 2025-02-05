import Image from "next/image";
import Link from "next/link";

type image = {
  src: string;
  alt: string;
  id: string;
};

type Props = {
  image: image;
};

export default function ImageCard({ image }: Props) {
  return (
    <div className="p-4 shadow-md rounded-lg bg-white">
      <Link href={`/photo/${image.id}`}>
        <Image
          src={image.src}
          alt={image.alt || "Image preview"}
          width={600}
          height={600}
          className="rounded-lg transition-transform transform hover:scale-105"
        />
      </Link>
    </div>
  );
}