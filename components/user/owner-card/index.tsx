import React, { Fragment } from "react";
import { Owner } from "../../../models/owner.model";
import { BlurImage } from "../../blurimage";
interface Props {
  owner: Owner;
}
export const OwnerCard: React.FC<Props> = ({ owner }) => {
  return (
    <Fragment>
      <section className="d-flex  align-items-center flex-wrap">
        {/* {owner.profileImage ? (
          <BlurImage
            image={owner.profileImage}
            classimage="rounded-circle user-img "
          />
        ) : (
          <img
            src={owner.profileImage}
            className="rounded-circle user-img"
          />
        )} */}

        <img
          src={owner?.profileImage?.original}
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
