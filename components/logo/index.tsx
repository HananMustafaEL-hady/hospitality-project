import React from "react";
import Image from "next/image";

export const Logo = () => {
  return (
    <div className={`logo mt-4`}>
      <div className={`logo__title`}>
        <h1 className={`main__title`}>Room Smart</h1>
        <h2 className={`secondary__title`}>Booking Room</h2>
      </div>
      <Image src="/logo.png" width={60} height={50} />
    </div>
  );
};
