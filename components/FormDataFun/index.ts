export const getFormData = (obj: { [x: string]: string | Blob | any }) =>
  Object.keys(obj).reduce((formData, key) => {
    console.log(obj.images);
    if (key == "images") {
      for (var i = 0; i < obj.images.length; i++) {
        formData.append("images", obj.images[i]);
        console.log(obj.images[i]);
      }
    } else formData.append(key, obj[key]);
    return formData;
  }, new FormData());
