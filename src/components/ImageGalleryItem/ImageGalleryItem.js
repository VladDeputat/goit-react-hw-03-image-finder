import styles from './ImageGalleryItem.module.scss';

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
