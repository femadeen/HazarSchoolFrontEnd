let lecturerId = localStorage.getItem("lecturerId")
let lecturerName = document.querySelector("#Lecturer-Name")
lecturerName.textContent = localStorage.getItem("LecturerName")
let le = document.querySelector("#lecturer-info")
fetch(`https://localhost:7123/api/Lecturer/GetLecturerDetails?id=${lecturerId}`,{
    method : "Get",

}).then(prom=>{
    return prom.json();
}).then(result =>{
    console.log(result)
    le.innerHTML=`
    <tr>
    <td>
    ${result.data.firstName}
    </td>
    <td>
    ${result.data.lastName}
    </td>
    <td>
    ${result.data.email}
    </td>
    </tr>
    `
})