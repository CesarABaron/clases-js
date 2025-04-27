import { Container } from "./container.js";
import { Actividad } from "./activity.js";
import { Ui } from "./uiHandlres.js";

const newContainer = new Container();
const newUi = new Ui();

const buttonAdd = document.getElementById("buttonAdd");

buttonAdd.addEventListener("click", () => {
  newUi.addInformation();
});
