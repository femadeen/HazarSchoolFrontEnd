let getDepartment = document.querySelector("#departments");
fetch("https://localhost:7123/api/Department/GetAllDepartments", {
    method:"GET"
}).then(response => {
    return response.json();
}).then(result => {
   result.data.forEach(element => {
       getDepartment.innerHTML += `<option value=${element.id}>${element.name}</option>`
   });
})
let rg = document.querySelector("#submit");
rg.addEventListener("click", (e) =>{
 e.preventDefault();
    let firstname = document.querySelector("#firstName")
    let lastname = document.querySelector("#lastName")
    let email = document.querySelector("#Email")
    let password = document.querySelector("#password")
    let department = document.querySelector("#departments")
    let firstnameValue = firstname.value
    let lastnameValue = lastname.value
    let emailValue = email.value
    let passwordValue = password.value
    let selectedOptions = department.options;
    let selected = department.selectedIndex;
    let select = (selectedOptions[selected]);
    let departmentValue = select.value;
    let data = {
        FirstName : firstnameValue,
        LastName : lastnameValue,
        Email : emailValue,
        Password : passwordValue,
        Departmentid : departmentValue

    }
    fetch("https://localhost:7123/api/Lecturer/RegisterLecturer", {
    method : "Post",
    headers : {
        "content-type" : "application/json"
    },
    body : JSON.stringify(data)
    }).then(prom =>{
        return  prom.json();  
    }).then(output =>{
        console.log(output)
        alert(output.message)
    })
})
