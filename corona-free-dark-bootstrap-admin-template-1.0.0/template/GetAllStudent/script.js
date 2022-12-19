let id = 0;
let table = document.querySelector("#student")
fetch("https://localhost:7123/api/Student/GetAllStudent",{
    method : "Get",
    
}).then((response) =>{
    return response.json();
}).then((output) =>{
    output.data.forEach(element => {
    id ++
     table.innerHTML += `
     <tr>
     <td> ${id}</td> 
     <td> ${element.firstName}</td>
     <td> ${element.lastName} </td>
     <td> ${element.email}</td>
   </tr>

     `   
    });

})
