import { GalleryList} from "./ImageGalery.styled";
import PropTypes from 'prop-types';
import { ImageGaleryItem} from "../ImageGaleryItem/ImageGaleryItem";

export const ImageGalery = ({ images }) => {
  return (
    <GalleryList>
      { images.map( image => (
        <ImageGaleryItem
          key={image.id}
          image={image}
        />
      )) }
    </GalleryList>
  )
}

ImageGalery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags:PropTypes.string.isRequired,
    })
  ),
};
