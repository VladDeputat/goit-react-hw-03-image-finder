import React, { Component } from 'react';
import 'modern-normalize/modern-normalize.css';
import Api from '../servises/API';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    modalIsOpen: false,
    modalLargeImageURL: '',
    modalImgid: '',
    error: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query) {
      this.setState({ images: [], page: 1, isLoading: true });
      this.getItems();
    }
    if (this.state.page !== prevState.page) {
      this.getItems();
    }
  }

  submitHandler = request => {
    this.setState({ query: request });
  };

  getItems = () => {
    const { query, page } = this.state;
    Api.searchImg({ query, page })
      .then(res => {
        this.setState(prevState => ({ images: [...prevState.images, ...res] }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
        if (this.state.page > 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
      });
  };

  openModal = (url, id) => {
    this.setState({
      modalLargeImageURL: url,
      modalImgid: id,
      modalIsOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      modalLargeImageURL: '',
      modalImgid: '',
      modalIsOpen: false,
    });
  };

  addPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const {
      images,
      isLoading,
      modalLargeImageURL,
      modalImgid,
      modalIsOpen,
    } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.submitHandler} />
        <ImageGallery items={this.state.images} onClick={this.openModal} />
        {isLoading && <Loader />}
        {images.length > 0 && <Button onClick={this.addPage} />}
        {modalIsOpen && (
          <Modal
            src={modalLargeImageURL}
            alt={modalImgid}
            onClose={this.closeModal}
          />
        )}
      </>
    );
  }
}

export default App;
