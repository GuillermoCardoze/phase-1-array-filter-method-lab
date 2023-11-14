const drivers = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
]

function findMatching(drivers, name) {
    const matchingDrivers = [];
    for (let i = 0; i < drivers.length; i++) {
        const driver = drivers[i];
        if (driver.toLowerCase() === name.toLowerCase()) {
            matchingDrivers.push(driver);
        }
    }
    return matchingDrivers;
}

function fuzzyMatch(drivers, query) {
    const matchingDrivers = [];

    for (let i = 0; i < drivers.length; i++) {
        if (drivers[i].startsWith(query)) {
            matchingDrivers.push(drivers[i]);
        }
    }

    return matchingDrivers;
}


const result = fuzzyMatch(drivers, 'Sa');

console.log(result);



function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }