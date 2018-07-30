//challenge 1

function PrintStudents(arr)
{
    var str = ""
    for (var i = 0; i<arr.length; i++)
    {
        str += ("Name: " + arr[i].name + ", Cohort: " + arr[i].cohort + "\n");
    }
    return (str)
}
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
]

console.log(PrintStudents(students));

//challenge 2

function PrintUsers(users)
{
    var newObj = {};
    newObj.EMPLOYEES = [];
    newObj.MANAGERS = [];
    for (var i = 0; i < users.employees.length; i++)
    {
        newObj.EMPLOYEES.push((i+1) + " - " + users.employees[i].first_name + ", " + users.employees[i].last_name + "\n");
    }
    for (var j = 0; j < users.managers.length; j++)
    {
        newObj.MANAGERS.push((j+1) + " - " + users.managers[j].first_name + ", " + users.managers[j].last_name + "\n");
    }
    return(newObj);
}


let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 console.log(PrintUsers(users));