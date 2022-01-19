import React, { Fragment } from "react";
import { Owner } from "../../../models/owner.model";
import { BlurImage } from "../../blurimage";
interface Props {
  owner: Owner;
}
export const OwnerCard: React.FC<Props> = ({ owner }) => {
  let imgsrc = "/avatar.png";

  return (
    <Fragment>
      <section className="d-flex  align-items-center flex-wrap">
        <img
          src={owner?.profileImage ? owner.profileImage?.original : imgsrc}
          className="rounded-circle user-img"
        />
        <div>
          <h2 className="title-section-user">{owner?.name}</h2>
          <h3 className="title-subsection-user">
            <i className="fas fa-door-open"></i>
            <span>{owner?.roomCount} غرفة</span>
          </h3>
        </div>
      </section>
    </Fragment>
  );
};
