const { Container, Actividad } = require('../js/app')


describe("Container", () => {
    it("debe estar creada", () => {
        expect(typeof Container.prototype.constructor).toBeDefined();
    });
});


describe("Actividad", () => {
    it("debe estar creada", () => {
        expect(typeof Actividad.prototype.constructor).toBeDefined();
    });
});


describe("container debe terner 5 metodos", () =>{
    it("cada una de ellas debe ser una funcion",()=> {
        const container = new Container()
        expect(typeof container.addActivity).toBe("function")
        expect(typeof container.filterActivity).toBe("function")
        expect(typeof container.showActivity).toBe("function")
        expect(typeof container.returnActivity).toBe("function")
        expect(typeof container.deleteActivity).toBe("function")

    })
})

describe("addActivity debe debe recibir 4 parametros", () => {
    it("titulo debe ser string, descripcion debe ser string, imagen debe ser string, numero debe ser string",()=>{
        const container = new Container()
        container.addActivity("pesca","pescar Peces", "IMG", 1)
        const actividad = container.container[0]

        expect(typeof actividad.titulo).toBe("string")
        expect(typeof actividad.descripcion).toBe("string")
        expect(typeof actividad.img).toBe("string")
        expect(typeof actividad.id).toBe("number")
    } )
})


describe("filterActivity ",()=>{
    it("debe devolver un array con el titulo de la actividad que se le pasa por parametro", () =>{
        const container = new Container()
        container.addActivity("pesca","pescar Peces", "IMG", 1)
        
        const result = container.filterActivity("pesca")
        
        expect(result).toEqual([{ titulo: 'pesca',descripcion: 'pescar Peces',img: 'IMG',id: 1}])
    })

})
