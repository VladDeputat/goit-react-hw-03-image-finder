import styles from './ImageGalleryItem.module.scss';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ src, alt, largeImg, onClick }) => {
  const openModal = () => onClick(largeImg, alt);
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={src}
        alt={alt}
        className={styles.ImageGalleryItemImage}
        onClick={openModal}
      />
    </li>
  );
};
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.number,
  largeImg: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
