let dp = document.querySelector("#submit")
dp.addEventListener("click", (d) =>{
    d.preventDefault();
    let dpName = document.querySelector("#departmentName")
    let dpDescription = document.querySelector("#departmentDescription")
    let dpNameValue = dpName.value
    let dpDescriptionValue = dpDescription.value
    let data = {
        Name : dpNameValue,
        Description : dpDescriptionValue
    }
    fetch("https://localhost:7123/api/Department/CreateDepartment", {
        method : "Post",
        headers :{
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
    }).then(pro =>{
        return pro.json();
    }).then(result =>{
        console.log(result)
    })
})