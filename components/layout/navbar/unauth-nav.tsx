import Link from "next/link";
import React, { Fragment } from "react";
import { Nav } from "react-bootstrap";

export const UnauthNav = () => {
  return (
    <Nav className="me-auto my-2 my-lg-0 " navbarScroll>
      <Nav.Link>
        <Link href={"/login"}>
          <a className="authheader">
            <span> تسجيل دخول</span>
          </a>
        </Link>
      </Nav.Link>
      <Nav.Link>
        <Link href={"/signup"}>
          <a className="authheader">
            <span> إنشاء حساب</span>
          </a>
        </Link>
      </Nav.Link>
    </Nav>
  );
};
