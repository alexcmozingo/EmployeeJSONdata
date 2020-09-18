var employeePromise = d3.json("employee.json");

var successFCN = function(employee)
    {
        console.log("Data Collected", employee);
        drawTable(employee);
    }
var failFCN = function(errorMsg)
    {
        concole.log("No Data", errorMsg);
    }
employeePromise.then(successFCN, failFCN);

//d3.select("body")
//.selectAll("tr")
//.data(employeePromise)
//.enter()
//.append("tr")
var drawTable = function(employee)
    {
        

var rows = d3.select("tbody")
.selectAll("tr")
.data(employee)
.enter()
.append("tr")

rows.append("td")
    .text(function(employee)
          {
    return employee.firstName
})

rows.append("td")
    .text(function(employee)
          {
    return employee.lastName
})

rows.append("td")
    .text(function(employee)
          {
    return employee.bio
})

rows.append("td")
    .text(function(employee)
          {
    return employee.unit
})
rows.append("td")
    .text(function(employee)
          {
    return employee.email
})
rows.append("td")
    .text(function(employee)
          {
    return employee.phone
})
        var getPhoto = function(employee)
          {
    return employee.photo
}
rows.append("td")
        .append("img")
        .attr("src", getPhoto)

    }
