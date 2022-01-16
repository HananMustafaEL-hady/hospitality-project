import React, { Fragment, useState } from "react";
import { image, OwnerImage } from "../../models/image.model";
import { Blurhash } from "react-blurhash";

interface Props {
  image: image | OwnerImage;
  classimage?: string;
}
export const BlurImage: React.FC<Props> = ({ image, classimage }) => {
  const [isLoadingState, setIsLoadingState] = useState(true);
  return (
    <Fragment>
      <Blurhash
        hash={image.thumbnail ? image.thumbnail : image.placeholder}
        width={"100%"}
        height={"100%"}
        className="blurImg"
      />
      <img
        className={`${classimage}` + isLoadingState ? `isloading` : "isready"}
        src={image.original}
        onLoad={(e) => {
          setIsLoadingState(false);
        }}
      />
    </Fragment>
  );
};
