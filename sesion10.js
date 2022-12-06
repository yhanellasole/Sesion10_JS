class alumno{
    constructor(codigo,nombre, nota1, nota2, nota3, nota4){
        this.codigo =codigo;
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
    }

   get promedio(){
        let promedio = Math.round((this.nota1*0.15 + this.nota2*0.20 + this.nota3*0.25 + this.nota4*0.40))

        return "El promedio de mis notas es de:" + " " + promedio
   }

   get condicion(){
    let promedio = Math.round((this.nota1*0.15 + this.nota2*0.20 + this.nota3*0.25 + this.nota4*0.40))
    if (promedio>12){

        return "Felicidades aprobaste el curso"

    } else {
        return "Reprobaste el curso: Intentalo nuevamente"
    }
   }


   get obsequio(){
    let promedio = Math.round((this.nota1*0.15 + this.nota2*0.20 + this.nota3*0.25 + this.nota4*0.40))
    if (promedio>17){

        return "¡Ganaste una mochila!"

    } else {
        return "Sigue intentanto: no ganaste" 
    }

   }
}


let lagos = new alumno ('001', "Yhanella", 20, 18, 20, 20)

document.write(lagos.promedio); 

document.write(lagos.condicion);

document.write(lagos.obsequio);