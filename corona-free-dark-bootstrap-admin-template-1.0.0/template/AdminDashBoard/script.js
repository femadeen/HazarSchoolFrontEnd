let stCount = document.querySelector("#studentCount")
let leCount = document.querySelector("#lecturerCount")
let deCount = document.querySelector("#department")
fetch("https://localhost:7123/api/Dashboard/DashboardCount", {
    method: "Get",

}).then((prom) =>{
    return prom.json();
}).then((result) =>
{
    console.log(result)
    stCount.textContent = result.studentCount;
    leCount.textContent = result.lecturerCount;
    deCount.textContent = result.departmentCount;


})