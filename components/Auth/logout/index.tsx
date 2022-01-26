import React, { MouseEventHandler } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Router from "next/router";
import { logout } from "../../../slices/auth.slices";
import { destroyCookie } from "nookies";
interface props {
  handleShow: Function;
  show: Boolean;
}
export const Logout: React.FC<props> = ({ handleShow, show }) => {
  const dispatch = useDispatch();

  const LogoutFun = () => {
    dispatch(logout());
    destroyCookie(null, "token");
    Router.push(`/auth`);

    handleShow(!show);
  };
  return (
    <>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        contentClassName="modal-content-logout"
      >
        <Modal.Header className=" flex-column align-content-center ">
          <h2 className="title-section mb-3">تسجيل الخروج</h2>
          <h3 className="title-subsection-gray">هل تريد تسجيل الخروج ؟</h3>
        </Modal.Header>
        <Modal.Footer className="justify-content-center">
          <Button
            variant="primary"
            className="btn-md"
            onClick={() => {
              LogoutFun();
            }}
          >
            خروج
          </Button>
          <Button
            variant="outline-primary"
            className="btn-md"
            onClick={() => {
              handleShow(!show);
            }}
          >
            تراجع
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
