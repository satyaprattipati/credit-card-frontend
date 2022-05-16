import axios from "axios";

let credit={
   

    cardId: 1001,
    type: "Visa",
   joiningfee: 500,
   annulfee: 3000,
   limit: 60000

   
}

test("Testing List All creditcard funciton.", async () => {
    axios.get("http://localhost:8081/api/creditcard/getAll").then(resp => {
        let creditcard = result.data;
        expect(creditcard).toBe(creditcard);       
    });
});



test("Testing View creditcard by creditcardId funciton.", async () => {
    axios.get("http://localhost:8081/api/creditcard/get/" + 1001).then(resp => {
        
        let creditcard = result.data;
        expect(creditcard).toBe(creditcard);        
    });
});


