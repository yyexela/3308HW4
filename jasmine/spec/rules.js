describe("isEmpty() Unit Tests", function() {
 
    describe("Inputting a non-empty valid string to isEmpty()", function(){
        it("should return false", function() {
            expect(isEmpty("BYE FELICIA")).toEqual(false);
        });
    });

    describe("Inputting an empty string to isEmpty()", function(){
        it("should return true", function() {
            expect(isEmpty("")).toEqual(true);
        });
    });

    describe("Inputting an undefined string to isEmpty()", function(){
        it("should return true", function() {
            expect(isEmpty(undefined)).toEqual(true);
        });
    });
});