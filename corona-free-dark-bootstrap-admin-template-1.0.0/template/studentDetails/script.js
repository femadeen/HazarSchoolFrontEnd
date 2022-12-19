let studentId = localStorage.getItem("studentId")
let studentName = document.querySelector("#student-name")
let student = document.querySelector("#studentPage")
student.textContent = localStorage.getItem("studentName")
studentName.textContent = localStorage.getItem("studentName")
let firstName = document.querySelector("#firstName")
let lastName = document.querySelector("#lastName")
let email = document.querySelector("#Email")
let dpt = document.querySelector("#departments")
fetch(`https://localhost:7123/api/Student/GetStudentDetails?id=${studentId}`,{
    method : "Get",
    
}).then((respond) =>
{
    return respond.json();
}).then((output) =>{
    console.log(output)
    firstName.value =  `${output.data.firstName}`;
    lastName.value = `${output.data.lastName}`
    email.value = `${output.data.email}`
    dpt.innerHTML = `<option value=${output.data.departmentId}>${output.data.departmentName}</option>`
})
fetch("https://localhost:7123/api/Department/GetAllDepartments", {
    method:"GET"
}).then(response => {
    return response.json();
}).then(result => {
    // console.log(result);
   result.data.forEach(element => {
    dpt.innerHTML += `<option value=${element.id}>${element.name}</option>`
   });
})

let getUpdateBtn = document.querySelector("#update");
getUpdateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let selectedOptions = dpt.options;
    let selected = dpt.selectedIndex;
    let select = (selectedOptions[selected]);
    let departmentValue = select.value;
    let data = {
        lastName : lastName.value,
        email : email.value,
        departmentId : departmentValue
    }
    fetch(`https://localhost:7123/api/Student/UpdateStudent?id=${studentId}`,{
        headers : {"Content-Type":"application/json"},
        method : "Put",
        body : JSON.stringify(data)
    }).then(prom =>{
        return prom.json()
    }).then(result =>{
        console.log(result)
    })
})