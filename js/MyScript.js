let st = document.querySelector("#submit");
st.addEventListener("click", (e) =>{
    let fName = document.querySelector(".fname")
    let lName = document.querySelector(".lname")
    let email = document.querySelector(".email")
    let password = document.querySelector(".password")
    let departmentId = document.querySelector(".department")
    let fNameValue = fName.value;
    let lNameValue = lName.value;
    let emailValue = email.value;
    let passwordValue = password.value;
    let departmentIdValue = departmentId.value;
    let data = {
        FirstName : fNameValue,
        LastName : lNameValue,
        Email : emailValue,
        Password : passwordValue,
        DepartmentId : departmentIdValue

    }
    fetch("https://localhost:7123/api/Student/RegisterStudent",{
        method : "Post",
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify(data)
    }).then((res) =>{
        return res.json();
    }).then((prom) =>{
        console.log(prom)
        alert (prom.message);
        console.log("seen")
        window.location.href="../corona-free-dark-bootstrap-admin-template-1.0.0/template/StudentDashboard/student.html"
    })
})
