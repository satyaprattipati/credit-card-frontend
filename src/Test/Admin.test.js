import axios from "axios";

let ad={
   

    adminId: 1,
    fName: "siva",
    lName: "prattipati",
    userName: "siva",
    password: "siva123",
    mail: "siva@gmail.com",
    number: 9441872485
   
}

test("Testing List All Admin funciton.", async () => {
    axios.get("http://localhost:8081/api/admin/alladmin").then(resp => {
        let admin = result.data;
        expect(admin).toBe(admin);       
    });
});



test("Testing user login funciton.", async () => {
    axios.post("http://localhost:8081/api/admin/login", ad).then((resp) => {
        let admin = result.data;
        expect(admin).toBe(admin);        
    });
});
