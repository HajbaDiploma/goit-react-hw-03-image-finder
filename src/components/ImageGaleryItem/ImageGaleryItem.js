import { GaleryImg, GaleryItem} from "./ImageGaleryItem.styled";
import { Component } from "react";
import PropTypes from "prop-types";
import { ImageModal } from "components/Modal/Modal";

export class ImageGaleryItem extends Component {

  state = {
    isOpenModal: false,
  }

  handleToggleModal = () => {
    this.setState(prevState => ({ isOpenModal: !prevState.isOpenModal }));
    return
  };

  render() {
    const { image } = this.props;
    const { isOpenModal } = this.state;

    return (
      <>
        <GaleryItem>
          <GaleryImg
            src={image.webformatURL}
            alt={image.tags}
            onClick={this.handleToggleModal}
          />
        </GaleryItem>
        { isOpenModal && (
          <ImageModal
            image={image}
            onCloseModal={this.handleToggleModal}
          />
        )}
      </>
    )
  }
}

ImageGaleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired
};
