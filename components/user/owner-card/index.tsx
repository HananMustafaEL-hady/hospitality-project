import React, { Fragment } from "react";
import Image from "next/image";
export const OwnerCard = () => {
  return (
    <Fragment>
      <section className="d-flex  align-items-center flex-wrap">
        <img
          src="/profile2.png"
          className="rounded-circle user-img  "
          // width={"160px"}
          // height={"160px"}
        />

        <div>
          <h2 className="title-section-user">حسين صابر الرفاعي</h2>
          <h3 className="title-subsection-user">
            <i className="fas fa-door-open"></i>
            <span>24 غرفة</span>
          </h3>
        </div>
      </section>
    </Fragment>
  );
};
