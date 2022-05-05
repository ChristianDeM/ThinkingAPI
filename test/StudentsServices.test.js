const StudentsService = require("../lib/services/StudentsService");
const  Students = require("./visualpartners.test.json");

describe("Tests StudentsServices Reader", () => {
    test("Requerimiento devuelve los Students", () => {       
        const  GetallStudents= Students
        expect(GetallStudents[0].id).toBe("6264d5d89f1df827eb84bb23");
    });
});

describe("Test Validationcertification con true", () => {
    test("Devuelve a los Estudents con true", () => {       
        const Validationcertification = StudentsService.ValidationCertification(Students);
        expect(Validationcertification[0].haveCertification).toBe(true);
    });
});

describe("Tests GetCredits mayo de 500", () => {
    test("Devulve a los que tienen mayor de 500", () => {       
        const Credits = StudentsService.GetCredits(Students);
        expect(Credits[0].credits).toBe(508);
        expect(Credits[1].credits).toBe(677);
    });
})

