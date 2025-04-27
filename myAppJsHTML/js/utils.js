export const validateImput = (titulo, descripcion, img) => {
  console.log("validate se invoco");

  if (titulo == "" || descripcion == "" || img == "") {
    // console.log("no hay info");
    return false;
  }
  // console.log("si hay info");
  return true;
};

export const inyectInfo = (titulo, descripcion, img, id) => {
  const divActivity = document.getElementById(`${id}`);
  divActivity.innerHTML = `${titulo} ${descripcion} ${img}`;
};
