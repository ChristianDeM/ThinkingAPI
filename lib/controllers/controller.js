const  StudentsService =require("../services/StudentsService");
const   Reader = require("../utils/Reader");


class Controller{
    static GetAllStudents(){
        Students=Reader.readJsonFile("./visualpartners.test.json")
        return(StudentsService.Getstudents)
    }

    static GetValidationCertification(){
        Students=Reader.readJsonFile("./visualpartners.test.json")
        return(StudentsService.ValidationCertification(Students))
    }
    static Getbycredits(){
        Students=Reader.readJsonFile("./visualpartners.test.json")
        return(StudentsService.GetCredits(Students))
    }

}