let le = document.querySelector("#lecturer")
let id = 0;
fetch("https://localhost:7123/api/Lecturer/GetAllLecturers",{
    method : "Get",
}).then((prom) =>{
    return prom.json();
}).then((result) =>
{
    console.log(result)
    result.data.forEach(element =>{
        id++
        le.innerHTML+= `
        <tr>
        <td> ${id}</td> 
         <td> ${element.firstName}</td>
         <td> ${element.lastName} </td>
         <td> ${element.email}</td>
        </tr>
        `
    })
})