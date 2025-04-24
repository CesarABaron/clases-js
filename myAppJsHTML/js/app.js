import { Container } from './container.js';

const newContainer = new Container();

buttonAdd.addEventListener("click", () => {
  addActivityhandler();
});

const addActivityhandler = () => {
  const activityValue = document.getElementById("activity").value;
  const descriptionValue = document.getElementById("description").value;
  const linkValue = document.getElementById("link").value;
  const faltan = document.getElementById("faltanDatos");

  if (validateImput(activityValue, descriptionValue, linkValue) === false) {
    faltan.innerHTML = "Missing info";
  } else
    newContainer.addActivity(
      activityValue,
      descriptionValue,
      linkValue,
      crypto.randomUUID,
      (faltan.innerHTML = "")
    );

  showItem(activityValue, descriptionValue, linkValue);

  // console.log("addactivity1", newContainer.container[0]);
};

const showItem = (a, b, c) => {
  const containerActivity = document.querySelector(".newActivity");
  const actividad = document.createElement("div");

  actividad.classList.add("newBox");

  containerActivity.appendChild(actividad);

  // console.log("2",a, b, c);

  actividad.innerHTML = `${a} ${b} ${c}`;

  const deleteButton = document.getElementsByClassName("newBox");

 
  deleteButton[0].addEventListener("click", () =>{
    console.log("aqui", newContainer.container[0].id)
  })

};

;





module.exports = { Actividad, Container };
