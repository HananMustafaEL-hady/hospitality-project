import React, { Fragment } from "react";
import Image from "next/image";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import { Logout } from "../../../Auth/logout";
export const ProfileDropdown = () => {
  const [logoutModalShow, setLogoutModalShow] = React.useState(false);

  return (
    <Fragment>
      <NavDropdown
        title={<span className="user-title">مرحبا محمد </span>}
        id="navbarScrollingDropdowProfile"
      >
        <Link href={"/profile"}>
          <a className="dropdown-item">الملف الشخصي</a>
        </Link>
        <Link href={"/profile/incomingrequests"}>
          <a className="dropdown-item">الطلبات الواردة</a>
        </Link>
        <Link href={"/profile/reservations"}>
          <a className="dropdown-item"> حجوزاتي</a>
        </Link>
        <Link href={"/profile/reservations"}>
          <a className="dropdown-item"> المفضلات</a>
        </Link>

        <NavDropdown.Item
          onClick={() => {
            setLogoutModalShow(!logoutModalShow);
          }}
        >
          تسجيل خروج
        </NavDropdown.Item>
      </NavDropdown>
      <Logout handleShow={setLogoutModalShow} show={logoutModalShow} />
    </Fragment>
  );
};
