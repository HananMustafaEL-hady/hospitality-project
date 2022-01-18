import React from "react";
import { useRouter } from "next/router";

export const ProfileEditbtn = () => {
  const router = useRouter();

  return (
    <div>
      <button
        className="btn btn-outline-primary btn-sm"
        onClick={() => {
          router.push("/profile/edit");
        }}
      >
        <span className="mx-1"> تعديل الحساب </span>
      </button>
    </div>
  );
};
