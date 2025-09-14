
import GalleryItem from "./GalleryItem";
import { galleryData } from "./json/galleryData";

  

export default function Gallery() {
  return (
    <div className="mt-12 px-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Gallery</h2>
       
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {galleryData.map((img, i) => (
          <GalleryItem key={i} src={img.src} alt={img.alt} />
        ))}
      </div>
    </div>
  );
}
