const findTheOldest = function(peopleArr) {
    let peopleWithAges = [];

    peopleArr.forEach(person => {
        if (person.yearOfBirth && person.yearOfDeath)
            var age = person.yearOfDeath - person.yearOfBirth;
        else {
            const currentYear = new Date().getFullYear();
            var age = currentYear - person.yearOfBirth;
        }
        
        person.age = age;
        peopleWithAges.push(person);


    });

    let oldest = peopleWithAges[0];

    for (let i = 1; i < peopleWithAges.length; i++) {
        if (peopleWithAges[i].age > oldest.age)
            oldest = peopleWithAges[i];
    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
