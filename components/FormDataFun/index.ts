export const getFormData = (obj: { [x: string]: string | Blob | any }) =>
  Object.keys(obj).reduce((formData, key) => {
    console.log(obj.images);
    if (key == "images") {
      for (var i = 0; i < obj.images.length; i++) {
        formData.append("images", obj.images[i]);
      }
    } else if (key == "image") {
      formData.append("image", JSON.stringify(obj.image));
    } else formData.append(key, obj[key]);
    return formData;
  }, new FormData());

// if (!(obj.images[i] instanceof File)) {
//   var image = JSON.stringify(obj.images[i]);
//   formData.append("image", image);
// } else formData.append("image", obj.images[i]);
// console.log(obj.images[i]);
