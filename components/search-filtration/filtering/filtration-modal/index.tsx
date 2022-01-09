import React from "react";
import { Button, Modal } from "react-bootstrap";
import { FilterForm } from "../form";
import { useForm, Controller } from "react-hook-form";

interface Props {
  modalShow: boolean;
  setModalShow: Function;
}
export const Selectlocation: React.FC<Props> = ({
  modalShow,
  setModalShow,
}) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    setModalShow(!modalShow);
  };

  return (
    <div>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        contentClassName="modal-content-filtration"
      >
        <Modal.Header className="justify-content-center">
          <Modal.Title className="font-18 f-bold">عوامل التصفية</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-content-filtration">
          <FilterForm
            register={register}
            setValue={setValue}
            control={control}
          />
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button
            className="main__btn"
            onClick={handleSubmit((e) => onSubmit(e))}
            type="submit"
          >
            إظهار النتائج
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
