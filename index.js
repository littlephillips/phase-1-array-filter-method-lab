// Code your solution here


function findMatching (drivers, list){
    return drivers.filter(
        (possibleMatch) => possibleMatch.toLowerCase() === list.toLowerCase()
    );
    
}



function fuzzyMatch(drivers, letters) {
    return drivers.filter(
        (possibleMatch) => possibleMatch.toLowerCase().indexOf(letters.toLowerCase()) === 0
    );

}


function matchName( drivers, listLetters) {
    return drivers.filter((record) => record.name === listLetters);

}


