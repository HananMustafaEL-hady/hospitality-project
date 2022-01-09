import React from "react";
import { Button, Modal } from "react-bootstrap";
import { FieldValues, UseFormSetValue } from "react-hook-form";
import { LocationModal } from "./map";
interface Props {
  setValue?: UseFormSetValue<FieldValues>;
}
export const Selectlocation: React.FC<Props> = ({ setValue }) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="grid__item ">
      <div onClick={() => setModalShow(!modalShow)}>
        <i className="fas fa-map-marker-alt" aria-hidden="true"></i>{" "}
        <span>الموقع</span>
        <p className="secondary__title px-1 m-0"> إبحث عن المكان </p>
      </div>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <LocationModal setValue={setValue} />
        </Modal.Body>
        <Modal.Footer>
          <Button className="main__btn " onClick={() => setModalShow(false)}>
            تأكيد
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
