import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

export const ProfileCard = () => {
  return (
    <Link href={`/room/profile/ownerID`}>
      <section className="  d-flex flex-column justify-content-center align-items-center   room-details__item room-details__owner">
        <p className="f-bold">مالك الغرفة </p>
        <Image
          src="/man2.png"
          width={150}
          height={150}
          className="rounded-circle"
        />
        <p className="gray-color mb-3">حسين صابر الرفاعي</p>
        <button className="btn btn-primary btn-sm">
          <i className="fas fa-comment-dots ml-16 font-16"></i>
          <span className="  "> محادثة </span>
        </button>
      </section>
    </Link>
  );
};
