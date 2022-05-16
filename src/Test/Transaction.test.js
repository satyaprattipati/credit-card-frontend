import axios from "axios";

let trans={
   

    transactionId: 66,
  transactiondate:"2022-02-11",
  status: "success",
  amount: 300,

   
}

test("Testing List All Transaction funciton.", async () => {
    axios.get("http://localhost:8081/api/transaction/viewalltransaction").then(resp => {
        let transaction = result.data;
        expect(transaction).toBe(transaction);       
    });
});



test("Testing View  transaction by transactionId funciton.", async () => {
    axios.get("http://localhost:8081/api/transaction/gettransaction/" + 66).then(resp => {
        
        let transaction = result.data;
        expect(transaction).toBe(transaction);        
    });
});

test("Testing View  transaction by  cardnumber funciton.", async () => {
    axios.get("http://localhost:8081/api/transaction/getalltransaction/" + 939396298812).then(resp => {
        
        let transaction = result.data;
        expect(transaction).toBe(transaction);        
    });
});