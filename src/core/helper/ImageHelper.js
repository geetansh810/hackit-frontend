import React from "react";
import { API } from "../../backend";

const ImageHelper = ({productId}) => {
  const imageUrl =
    productId !== undefined
      ? `${API}/product/photo/${productId}`
      : "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-2-CRC.png";
  return (
    <div className="">
      <img
        src={imageUrl}
        alt="Book"
        style={{ maxHeight: "250px", maxWidth: "100%" }}
        className=""
      />
    </div>
  );
};

export default ImageHelper;
