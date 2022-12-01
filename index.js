// Write your solution in this file!
const employee = {
    name: "Edwin Thuita",
    streetAddress: "Thika"
}


function updateEmployeeWithKeyAndValue(obj, key, value){
  return {
    ...obj,
    [key] : value
  }

}
console.log(updateEmployeeWithKeyAndValue(employee, "workId", 340))
console.log(employee);

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value
    return obj
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, "workId", 250)
console.log(employee);

function deleteFromEmployeeByKey(obj, key){
    const newObj = {
        ...obj
    }
    delete newObj[key]

    return newObj
    
}

console.log(deleteFromEmployeeByKey(employee, "workId"))
console.log(employee);

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key]
    return obj
}

destructivelyDeleteFromEmployeeByKey(employee, "workId")
console.log(employee);