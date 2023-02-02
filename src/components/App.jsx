import { Component } from "react";
import { fetchImg } from "service/Api/Api";
import { PER_PAGE as pagelimit } from '../service/Api/Api';
import { Button } from "./Button/Button";
import { ImageGalery } from "./ImageGalery/ImageGalery";
import { Searchbar } from './Searchbar/Serchbar';
import ImageLoader from "./Loader/Loader";
import toast, { Toaster } from 'react-hot-toast';

export class App extends Component {

  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    loadMore: false,
  }

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.page !== page || prevState.query !== query) {
      this.setState({ isLoading: true });
      const { hits: data, totalHits } = await fetchImg(query, page);

      if (data.length) {
        const { page } = this.state;

        this.setState(
          prevState => ({
            images: [...prevState.images, ...data],
            loadMore: page <= Math.ceil(totalHits / pagelimit),
          }),
          () => {
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: 'smooth',
            });
          }
        );
      } else {
        toast.error('Nothing was found for your request', {
          duration: 3000,
          style: {
            border: '1px solid transparent',
            padding: '16px',
            color: 'red',
            width: '300px',
          },
        });
        this.setState({isLoading: false});
      }
      this.setState({isLoading: false});
    }
  }

  handleSubmitSearch = query => {
    this.setState({ query, page:1, images:[]})
  }

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };


  render () {
    const { images, loadMore, isLoading } = this.state;
    return (
      <>
        <Searchbar onSubmit = {this.handleSubmitSearch} />
        {images.length > 0 && (<ImageGalery images={images}/>)}

        {images.length >= pagelimit && loadMore && (<Button onLoadMore = {this.handleLoadMore}/>)}

        {isLoading && (<ImageLoader/>)}

        <Toaster position="top-right" />
      </>
    );
  }


};
