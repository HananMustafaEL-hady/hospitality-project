import React, { MouseEventHandler } from "react";
import { Button, Modal } from "react-bootstrap";
import { BtnSubmit } from "../../form/button/btn-submit";
interface props {
  handleShow: Function;
  show: Boolean;
}
export const Logout: React.FC<props> = ({ handleShow, show }) => {
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
              handleShow(!show);
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
