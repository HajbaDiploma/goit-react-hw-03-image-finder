import {createPortal} from "react-dom";
import  {Component} from "react";
import PropTypes from "prop-types";
import {Overlay, Modal} from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');

export class ImageModal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleClose);
  }

  handleClose = event => {
    if (event.code === 'Escape') {
      this.props.onCloseModal();
      return;
    }
    if (event.target === event.currentTarget) {
      this.props.onCloseModal();
      return
    }
  };

  render() {
    const {image} = this.props;

    return createPortal(
      <Overlay onClick={this.handleClose}>
        <Modal>
          <img src={image.largeImageURL} alt={image.tags}/>
        </Modal>
      </Overlay>,
      modalRoot
    );
  }
}

ImageModal.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  onCloseModal: PropTypes.func.isRequired,
};
