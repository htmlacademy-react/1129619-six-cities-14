type OfferGalleryProps = {
  images: string[];
  title: string;
};

export function OfferGallery({
  images,
  title,
}: OfferGalleryProps): JSX.Element {
  return (
    <div className="offer__gallery">
      {images.map((img) => (
        <div key={img} className="offer__image-wrapper">
          <img className="offer__image" src={img} alt={title} />
        </div>
      ))}
    </div>
  );
}
