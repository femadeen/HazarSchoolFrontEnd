let de = document.querySelector("#department")
fetch("https://localhost:7123/api/Department/GetAllDepartments",{
    method : "Get",
}).then((resps) =>{
    return resps.json();
}).then((output) =>{
   console.log(output.data)
    output.data.forEach(element =>{
        de.innerHTML+= `
        <tr>
         <td>${element.name}</td> 
         <td>${element.description}</td> 
        </tr>
        `
       
    });
})

