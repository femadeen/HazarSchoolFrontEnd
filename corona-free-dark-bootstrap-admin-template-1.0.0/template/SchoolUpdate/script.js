let updateId = localStorage.getItem("studentId");
let update = document.querySelector("#update-form")
let lastName = document.querySelector("#")
fetch(`https://localhost:7123/api/Student/UpdateStudent?id=${updateId}`, {
    method : "Patch",
    headers : {"Content-Type" : "application/json"},
    body : JSON.stringify(data)
})