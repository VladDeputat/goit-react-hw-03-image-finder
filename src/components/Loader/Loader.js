import { Component } from 'react';
import Loader from 'react-loader-spinner';
import styles from './Loader.module.scss';

class Spinner extends Component {
  render() {
    return (
      <Loader
        className={styles.loader}
        type="ThreeDots"
        color="#3f51b5"
        height={100}
        width={100}
        timeout={3000}
      />
    );
  }
}

export default Spinner;
