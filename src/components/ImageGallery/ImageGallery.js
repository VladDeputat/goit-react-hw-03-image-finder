import styles from './ImageGallery.module.scss';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem.js';
import PropTypes from 'prop-types';

const ImageGallery = ({ items, onClick }) => {
  return (
    <ul className={styles.ImageGallery}>
      {items.map(item => (
        <ImageGalleryItem
          src={item.webformatURL}
          alt={item.id}
          key={item.id}
          largeImg={item.largeImageURL}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.number,
  key: PropTypes.number,
  largeImg: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
