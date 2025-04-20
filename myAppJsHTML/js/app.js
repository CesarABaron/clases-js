class Actividad {
  constructor(titulo, descripcion, img, id) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.img = img;
    this.id = id;
  }
}

class Container {
  constructor() {
    this.container = [];
  }

  addActivity(titulo, descripcion, img, id) {
    const myActivity1 = new Actividad(titulo, descripcion, img, id);
    this.container.push(myActivity1);
  }

  showActivity() {
    console.log(this.container);
  }

  deleteActivity(id) {
    this.container = this.container.filter((x) => x.id != id);
  }

  filterActivity(activity) {
    const result = (this.container = this.container.filter(
      (x) => x.titulo == activity
    ));
    return result;
  }
}

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

const validateImput = (a, b, c) => {
  if (a == "" || b == "" || c == "") {
    return false;
  }
  return true;
};



const deleteActivityHandler = (id) =>{
   if(newContainer.some(x => x.id)){
    newContainer.deleteActivity(id)
   } console.log("deleted")

}

module.exports = { Actividad, Container };
