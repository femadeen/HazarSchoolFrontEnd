let lg = document.querySelector("#log-in")
console.log(lg)
lg.addEventListener(("click"), (l) =>{
    console.log("testing")
    l.preventDefault(); 

let login = document.querySelector("#email")
let password = document.querySelector("#password")
let loginValue = login.value;
let passwordValue = password.value;
let data = {
    Email : loginValue,
    Password : passwordValue
}
    if(login.value == "admin@gmail.com" && passwordValue == "admin")
    {
        window.location.href = "../AdminDashBoard/index.html"
    }
fetch("https://localhost:7123/api/User/Login",{
    method : "Post",
    headers : {"Content-Type": "application/json"},
    body : JSON.stringify(data)
}).then((res) =>{
    console.log(res);
    return res.json();
    
}).then((prom) =>{
    console.log(prom)
    alert(prom.message);
    if(prom.data.roleName === "Student")
    {
        localStorage.setItem("studentName", `${prom.data.firstName} ${prom.data.lastName}`)
        localStorage.setItem("studentId", `${prom.data.studentId}`)
        window.location.href="../StudentDashboard/student.html"
    }
    else
    {
        localStorage.setItem("LecturerName",`${prom.data.firstName} ${prom.data.lastName}`)
        localStorage.setItem("lecturerId", `${prom.data.lecturerId}`)
        window.location.href="../LecturerDashboard/index.html"
    }
    
})
})