import React, { Fragment } from "react";
import Image from "next/image";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import { Logout } from "../../../Auth/logout";
import { useSelector } from "react-redux";
import { useCurrentUser } from "../../../../slices/auth.slices";
export const ProfileDropdown = () => {
  const [logoutModalShow, setLogoutModalShow] = React.useState(false);
  const user = useSelector(useCurrentUser);
  const name = user ? user?.name.split(" ") : [""];
  return (
    <Fragment>
      <NavDropdown
        title={<span className="user-title">مرحبا {name[0]} </span>}
        id="navbarScrollingDropdowProfile"
      >
        <div className="dropdown-menu-profile">
          <Link href={`/profile/${user?._id}`}>
            <a className="dropdown-item dropdown-menu-profile__item">
              الملف الشخصي
            </a>
          </Link>
          <Link href={"/profile/incomingrequests"}>
            <a className="dropdown-item dropdown-menu-profile__item">
              الطلبات الواردة
            </a>
          </Link>
          <Link href={"/profile/reservations"}>
            <a className="dropdown-item dropdown-menu-profile__item">
              {" "}
              حجوزاتي
            </a>
          </Link>
          <Link href={`/profile/${user?._id}/favourites`}>
            <a className="dropdown-item dropdown-menu-profile__item">
              {" "}
              المفضلات
            </a>
          </Link>
          <NavDropdown.Item
            onClick={() => {
              setLogoutModalShow(!logoutModalShow);
            }}
          >
            <span className="dropdown-menu-profile__item"> تسجيل خروج</span>
          </NavDropdown.Item>
        </div>
      </NavDropdown>
      <Logout handleShow={setLogoutModalShow} show={logoutModalShow} />
    </Fragment>
  );
};
