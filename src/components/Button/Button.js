import PropTypes from 'prop-types';
import {LoadBtn, LoadBtnWrap} from "./Button.styled";

export const Button = ({ onLoadMore }) => {
  return (
    <LoadBtnWrap>
      <LoadBtn type="button" onClick={onLoadMore}>
        Load more
      </LoadBtn>
    </LoadBtnWrap>
  )
}

Button.propTypes = {
  onLoadMore:PropTypes.func.isRequired,
}
