import { Component } from 'react';
import styles from './Searchbar.module.scss';

class Searchbar extends Component {
  state = {
    query: '',
  };

  onHandleChange = e => {
    this.setState({ query: e.target.value });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.onHandleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            name="query"
            type="text"
            value={this.state.query}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onHandleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
