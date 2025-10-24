const nameFilter = require("../fiteration");

describe("Validate The Input Field", () => {
    test("Check If Name Is Empty", () => {
        expect(nameFilter()).toBe("Unknown");
    })

    test("Check For Spaces (Start + End)", () => {
        expect(nameFilter("      Ismail  ")).toBe("Ismail");
    })

    test("Check If Name.length > 10", () => {
        expect(nameFilter("Ismail_Mohammed_Ahmed")).toBe("Ismail_Moh")
    })
    
    test("Check If Name Not Starts with Underscore > 10", () => {
        expect(nameFilter("_Ismail")).toBe("Ismail")
    })

})