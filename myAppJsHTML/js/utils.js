import { Actividad } from "./activity.js";
import { Container } from "./container.js";

const newContainer = new Container();


export const validateImput = (titulo, descripcion, img) => {

  if (titulo == "" || descripcion == "" || img == "") {
    // console.log("no hay info");
    return false;
  }
 
  return true;


};

export const inyectInfo = (titulo, descripcion, img, id) => {
  const divActivity = document.getElementById(`${id}`);

  const tituloDiv = document.createElement("h3")
  tituloDiv.textContent = titulo
  const descripcionDiv = document.createElement("p")
  descripcionDiv.textContent = descripcion
  const imageDiv = document.createElement("img")
  imageDiv.src = img
  imageDiv.alt = "Activity Image"
  imageDiv.classList.add("imgs")


  newContainer.addActivity(titulo, descripcion, img)

  divActivity.appendChild(tituloDiv)
  divActivity.appendChild(imageDiv)
  divActivity.appendChild(descripcionDiv)
  

};
