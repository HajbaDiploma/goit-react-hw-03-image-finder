import React from "react";
import { RotatingLines } from "react-loader-spinner";
import { LoaderWrap } from "./Loader.styled";

const ImageLoader = () => {
  return (
    <LoaderWrap>
      <RotatingLines
        strokeColor="blue"
        strokeWidth="5"
        animationDuration="0.75"
        width="120"
        visible={true}
      />
    </LoaderWrap>
  )
}

export default ImageLoader;
