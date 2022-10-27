const Drivers=['ant', 'bison', 'camel', 'duck', 'elephant']


    const returnFirstTwoDrivers= function(array){
        return array.slice(0,2);
    }

console.log(returnFirstTwoDrivers(Drivers))



const azad=['ant', 'bison', 'camel', 'duck', 'elephant']


    const returnLastTwoDrivers= function(last){
        return last.slice(-2);
    }

console.log(returnLastTwoDrivers(azad))

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers ]

function createFareMultiplier(multiplier){
    return function (value){
        return multiplier*value

    }

}

const fareDoubler = createFareMultiplier(2)

console.log(fareDoubler)

const fareTripler = createFareMultiplier(3)

console.log(fareTripler)

function selectDifferentDrivers(){
    const drivers=[returnFirstTwoDrivers,returnLastTwoDrivers ]
    return drivers

}











