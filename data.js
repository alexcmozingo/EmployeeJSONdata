var employeePromise = d3.json("employee.json");

var successFCN = function(employee)
    {
        console.log("Data Collected", employee); 
    }
var failFCN = function(errorMsg)
    {
        concole.log("No Data", errorMsg);
    }
employeePromise.then(successFCN, failFCN);