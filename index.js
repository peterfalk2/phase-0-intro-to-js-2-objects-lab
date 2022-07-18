// Write your solution in this file!
const employee = {
    name: 'value 1', 
    streetAddress: 'value 2'
    }



function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };
  
    newObj[key] = value;
  
    return newObj;
    }

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value; 
  
    return obj;
  }

  function deleteFromEmployeeByKey(obj, key) {
    const newObj = { ...obj }
   newObj[key] = undefined;
    return newObj;
  }

  function destructivelyDeleteFromEmployeeByKey(obj, key) {
    const newObj = { ...obj }
    delete obj[key];
    return obj;
    
  }
