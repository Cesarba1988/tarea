const tabla=[
    {nombre:"mario",apellido:"gomez",cedula:"34567895",direccion:"calle 45"},
    {nombre:"luna",apellido:"buitraco",cedula:"12345684",direccion:"carrera 80"},
    {nombre:"carmela",apellido:"burdiso",cedula:"76543890",direccion:"calle 34"},

]


const listar=()=>{
    let tbody=document.getElementById("usuarios")
    let tablallena="";
    for(let i=0;i<tabla.length;i++){
        tablallena+="<tr><td>"+tabla[i].nombre+"</td><td>"+tabla[i].apellido+"</td><td>"+tabla[i].cedula+"</td><td>"+tabla[i].direccion+"</td></tr>";
    }
    
    tbody.innerHTML=tablallena;
}
const registrar=()=>{
    
    const nombre=document.getElementById("nombre").value
    const apellido=document.getElementById("apellido").value
    const cedula=document.getElementById("cedula").value
    const direccion=document.getElementById("direccion").value
    
    if (nombre=="".trim()) {
        alert("Ingrese el nombre")
        return
    }
  
    if (!cedula.trim()) {
        alert("Ingrese el cedula")
        return
        
    }


    let tbody=document.getElementById("usuarios")
    tbody.innerHTML+="<tr><td>"+nombre+"</td><td>"+apellido+"</td><td>"+cedula+"</td><td>"+direccion+"</td></tr>";
    const nuevo={nombre:nombre,apellido:apellido,cedula:cedula,direccion:direccion}
    tabla.push(nuevo)
   
    
}



