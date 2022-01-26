import React from "react";
import { Button, Modal } from "react-bootstrap";
import { ImagesSwiper } from "../../swiper";

export const ChatImagesForm: React.FC<any> = ({
  setShow,
  show,
  handleSubmit,
  onSubmit,
  register,
  isLoading,
  reset,
  imagesState,
  setImagesState,
  handleImageChange,
  handleDeleteImage,
}) => {
  console.log("from chat images from ", imagesState?.length);
  return (
    <Modal
      show={show && imagesState?.length != 0}
      onHide={() => {
        setShow(!show);
        reset();
        setImagesState([]);
      }}
      size="lg"
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        {/* <ImagesSwiper
          images={imagesState}
          handleDeleteImage={handleDeleteImage}
        /> */}
      </Modal.Body>
      <Modal.Footer>
        <label htmlFor="filesImage" className="chat-form__label">
          <i className="fas fa-plus"></i>
        </label>
        <form className="chat-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="chat-form__input"
            placeholder="إكتب هنا …"
            {...register("textWithImages")}
          />
          <input
            type="file"
            id="filesImage"
            className="chat-form__input__file"
            {...register("images")}
            onChange={(e) => {
              handleImageChange(e);
            }}
          />

          <Button
            className="btn btn-default chat-form__btn"
            disabled={isLoading}
            type="submit"
          >
            <i className="far fa-paper-plane"></i>
          </Button>
        </form>
      </Modal.Footer>
    </Modal>
  );
};
