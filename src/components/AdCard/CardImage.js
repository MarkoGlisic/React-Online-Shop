import React from "react";

const CardImage = ({ imgURL }) => {
  return (
    <>
      <img width={64} height={64} src={imgURL} alt="img" />
    </>
  );
};

export default CardImage;
