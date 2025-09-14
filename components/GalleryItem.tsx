
interface GalleryItemProps {
    src: string;
    alt: string;
  }
  
  export default function GalleryItem({ src, alt }: GalleryItemProps) {
    return (
      <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-sm">
        <img
          src={src}
          alt={alt}
          className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
          <span className="text-white text-lg font-medium">View</span>
        </div>
      </div>
    );
  }
  