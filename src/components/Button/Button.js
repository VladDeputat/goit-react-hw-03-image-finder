import { Component } from 'react';
import styles from './Button.module.scss';

class Button extends Component {
  render() {
    return (
      <button
        type="button"
        onClick={this.props.onClick}
        className={styles.Button}
      >
        Load more
      </button>
    );
  }
}
export default Button;
