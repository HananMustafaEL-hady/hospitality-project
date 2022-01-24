import React, { MouseEventHandler } from "react";
import { Button, Modal } from "react-bootstrap";
import { RejectedRequest } from "../../../../api/Incoming-request.api";
import { BtnSubmit } from "../../../form/button/btn-submit";
interface props {
  handleShow: Function;
  show: Boolean;
  bookingid: string;
}
export const DeletedRejectedModal: React.FC<props> = ({
  handleShow,
  show,
  bookingid,
}) => {
  return (
    <>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        contentClassName="modal-content-logout"
      >
        <Modal.Header className=" flex-column align-content-center ">
          <h2 className="title-section mb-3">حذف الغرفة</h2>
          <h3 className="title-subsection-gray">
            هل تريد حذف الغرفة من قائمتك ؟
          </h3>
        </Modal.Header>
        <Modal.Footer className="justify-content-center">
          <Button
            variant="primary"
            className="btn-md"
            onClick={() => {
              RejectedRequest(bookingid);
              handleShow(!show);
            }}
          >
            حذف
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
