import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ChatImagesForm } from "../chat-images-form";
export const ChatForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [imagesState, setImagesState] = useState<any>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
    setValue,
    watch,
  } = useForm();

  async function onSubmit(data: any) {
    setIsLoading(true);
    setTimeout(() => {
      console.log(data);
      setIsLoading(false);
      reset();
      setShow(!show);
      setImagesState([]);
    }, 2000);
  }
  const handleImageChange = (e: any) => {
    console.log(e);
    if (e.target.files && e.target.files[0]) {
      setImagesState((prevstate: any) => [...prevstate, e?.target?.files[0]]);
    }
    console.log(imagesState);
  };
  const handleDeleteImage = (index: number) => {
    console.log(index);
    let array = [...imagesState];
    array.splice(index, 1);
    setImagesState(array);
  };

  useEffect(() => {
    setValue("images", imagesState);
  }, [imagesState]);
  const [show, setShow] = useState(false);

  console.log(imagesState.length);
  return (
    <section>
      <ChatImagesForm
        setShow={setShow}
        show={show}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        isLoading={isLoading}
        reset={reset}
        imagesState={imagesState}
        handleImageChange={handleImageChange}
        setImagesState={setImagesState}
        handleDeleteImage={handleDeleteImage}
      />

      <form className="chat-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="chat-form__input"
          placeholder="إكتب هنا …"
          {...register("message")}
        />
        <input
          type="file"
          id="files"
          className="chat-form__input__file"
          {...register("images")}
          onChange={(e) => {
            setShow(!show);
            handleImageChange(e);
          }}
        />
        <label htmlFor="files" className="chat-form__label">
          <i className="fas fa-paperclip"></i>
        </label>
        <button
          className="btn btn-default chat-form__btn"
          type="submit"
          disabled={isLoading}
        >
          <i className="far fa-paper-plane"></i>
        </button>
      </form>
    </section>
  );
};
