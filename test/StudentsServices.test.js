const StudentsService = require("../lib/services/StudentsService");
const  Students = require("./visualpartners.test.json");

describe("Tests StudentsServices Reader", () => {
    test("Requerimiento devuelve los Students", () => {       
        const  GetallStudents= Students
        expect(GetallStudents[0].id).toBe("6264d5d89f1df827eb84bb23");
    });

});

describe("Tests StudentsServices Reader", () => {
    test("Requeasdrimiento devuelve los Students", () => {       
        const Validationcertification = StudentsService.ValidationCertification(Students);
        expect(Validationcertification[0].haveCertification).toBe(true);
    });

});

