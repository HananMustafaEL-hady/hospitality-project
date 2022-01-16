import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { Owner } from "../../../models/owner.model";
interface Props {
  owner: Owner;
}
export const ProfileCard: React.FC<Props> = ({ owner }) => {
  let imgsrc = "/avatar.png";
  return (
    <Link href={`/room/profile/ownerID`}>
      <section className="  d-flex flex-column justify-content-center align-items-center   room-details__item room-details__owner">
        <p className="f-bold">مالك الغرفة </p>
        <Image
          src={owner?.profileImage ? owner.profileImage.original : imgsrc}
          width={150}
          height={150}
          className="rounded-circle"
        />
        <p className="gray-color mb-3"> {owner && owner?.name}</p>
        <button className="btn btn-primary btn-sm">
          <i className="fas fa-comment-dots ml-16 font-16"></i>
          <span className="  "> محادثة </span>
        </button>
      </section>
    </Link>
  );
};
