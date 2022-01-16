import React, { Fragment } from "react";
import Image from "next/image";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import { Logout } from "../../../Auth/logout";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
export const ProfileDropdown = () => {
  const [logoutModalShow, setLogoutModalShow] = React.useState(false);
  const user = useSelector((state: RootState) => state.auth.user);
  console.log("user", user);
  const name = user ? user?.name.split(" ") : [""];
  return (
    <Fragment>
      <NavDropdown
        title={<span className="user-title">مرحبا {name[0]} </span>}
        id="navbarScrollingDropdowProfile"
      >
        <div className="dropdown-menu-profile">
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
        </div>
      </NavDropdown>
      <Logout handleShow={setLogoutModalShow} show={logoutModalShow} />
    </Fragment>
  );
};
