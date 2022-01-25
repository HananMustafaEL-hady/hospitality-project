import React from "react";
import { Button, Modal } from "react-bootstrap";
import { FilterForm } from "../form";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/router";

interface Props {
  modalShow: boolean;
  setModalShow: Function;
  setIsfiltering: Function;
}
export const FiltrationModal: React.FC<Props> = ({
  modalShow,
  setModalShow,
  setIsfiltering,
}) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const { capacity } = router.query;
  const onSubmit = (data: any) => {
    console.log(data);
    setModalShow(!modalShow);
    const countcapacity = data.capacity != 0 ? data.capacity : capacity;
    const services = data.service != false ? data.service : "";
    router.push({
      query: {
        // latitude: data.latitude,
        // longitude: data.longitude,
        // toDate: data.startdate,
        // fromDate: data.enddate,
        page: 1,
        capacity: countcapacity,
        maxNightPrice: data.maxNightPrice,
        service: services,
        minNightPrice: data.minNightPrice,
      },
    });
    setIsfiltering(true);
  };

  return (
    <div>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        contentClassName="modal-content-filtration"
        c
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
