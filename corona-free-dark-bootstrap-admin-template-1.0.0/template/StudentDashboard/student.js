let getStudentName =  document.querySelector("#student-name");
let studentName = document.querySelector("#student")
getStudentName.textContent = localStorage.getItem("studentName")
studentName.textContent = localStorage.getItem("studentName")
