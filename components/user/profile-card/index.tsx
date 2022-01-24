import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { Owner } from "../../../models/owner.model";
interface Props {
  owner: Owner;
  provider?: Owner;
}
export const ProfileCard: React.FC<Props> = ({ owner, provider }) => {
  console.log("owner", owner, "owner");
  let imgsrc = "/avatar.png";
  return (
    <Link href={`/profile/${owner?._id ? owner._id : provider?._id}`}>
      <section className="  d-flex flex-column justify-content-center align-items-center   room-details__item room-details__owner">
        <p className="f-bold">مالك الغرفة </p>
        <div className="room-details__owner__img">
          <Image
            src={
              owner?.profileImage
                ? owner.profileImage?.original
                : provider?.profileImage
                ? provider?.profileImage.original
                : imgsrc
            }
            width={140}
            height={140}
            objectFit="contain"
            // layout="fill"
            className="rounded-circle "
          />
        </div>

        <p className="gray-color mb-3">
          {" "}
          {owner && owner?.name ? owner?.name : provider?.name}
        </p>
        <button className="btn btn-primary btn-sm mb-24">
          <i className="fas fa-comment-dots ml-16 font-16"></i>
          <span className="  "> محادثة </span>
        </button>
      </section>
    </Link>
  );
};
