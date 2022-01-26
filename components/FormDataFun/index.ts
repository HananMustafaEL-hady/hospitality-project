export const getFormData = (obj: { [x: string]: string | Blob | any }) =>
  Object.keys(obj).reduce((formData, key) => {
    if (key == "images") {
      for (var i = 0; i < obj.images.length; i++) {
        formData.append("images", obj.images[i]);
      }
    } else if (key == "image") {
      formData.append("image", JSON.stringify(obj.image));
    } else formData.append(key, obj[key]);
    return formData;
  }, new FormData());
