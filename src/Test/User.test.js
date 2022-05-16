import axios from "axios";

let customer={
    userId: 800,
    fName: "veera",
    lName:" ragavan",
    mail: "veera@gmail.com",
    phNumber: 9663961988,
    village: "chagallu",
    city: "nidadavolu",
    state: "andhara pradesh",
    pincode: 534211,
    userName: "veera",
    password: "veera123",
    income: 400000,
    gender: "male",
    education: "graduate",
    dob: "2000-06-01",
    role: "admin"
   
}

test("Testing List All USER funciton.", async () => {
    axios.get("http://localhost:8081/api/user/alluser").then(resp => {
        let user = result.data;
        expect(user).toBe(user);       
    });
});

test("Testing Add user funciton.", async () => {
    axios.post("http://localhost:8081/api/user/adduser", customer).then((resp) => {
        let user = result.data;
        expect(user).toBe(user);        
    });
});

test("Testing View user by userId funciton.", async () => {
    axios.get("http://localhost:8081/api/user/getuser/" + 800).then(resp => {
        let user = result.data;
        expect(user.fName).toBe("veera");        
    });
});

test("Testing user login funciton.", async () => {
    axios.post("http://localhost:8081/api/user/login", customer).then((resp) => {
        let user = result.data;
        expect(user).toBe(user);        
    });
});

test("Testing user validations funciton.", async () => {
    axios.post("http://localhost:8081/api/user/validate", customer).then((resp) => {
        let user = result.data;
        expect(user).toBe(user);        
    });
});

test("Testing user update funciton.", async () => {
    axios.put("http://localhost:8081/api/user/user", customer).then((resp) => {
        let user = result.data;
        expect(user).toBe(user);        
    });
});