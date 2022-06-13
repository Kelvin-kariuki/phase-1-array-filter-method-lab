// Code your solution 
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const findMatching = (drivers, drive)=> drivers.filter(function (driver){
    return driver.toUpperCase() === drive.toUpperCase()
});

const fuzzyMatch = (namesArray, string)=> namesArray.filter((element)=> element.slice(0,2) == string.slice(0,2));

const matchName = (namesArray,string)=> namesArray.filter((element)=>element.name == string)
