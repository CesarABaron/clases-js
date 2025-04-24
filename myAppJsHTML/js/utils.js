export const validateImput = (titulo, descripcion, img) => {
    if (titulo == "" || descripcion == "" || img == "") {
      return false;
    }
    return true;
  }







  const deleteActivityHandler = (id) =>{
    if(newContainer.some(x => x.id)){
     newContainer.deleteActivity(id)
    } console.log("deleted")
 
 }