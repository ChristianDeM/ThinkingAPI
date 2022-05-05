const Controller = require("./controllers/controller");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res)=>{
    res.send("hola a todos ");
});

app.get("/v1/students/", (request,response)=>{
    const AllStudents = Controller.GetAllStudents();
    response.json(AllStudents);

});
app.get("/v1/students/haveCertification", (request,response)=>{
    const AllStudents = Controller.GetValidationCertification();
    response.json(AllStudents);

});
app.get("/v1/students/credits", (request,response)=>{
    const AllStudents = Controller.Getbycredits();
    response.json(AllStudents);

});


app.listen(port,()=>{
    console.log("server listo calisto¡");
});