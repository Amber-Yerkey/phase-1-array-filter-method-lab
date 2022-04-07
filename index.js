const { check } = require("yargs")

function findMatching(drivers, name){
const newDrivers = drivers.filter(drivers => drivers.toLowerCase() === name.toLowerCase())
return newDrivers
}


// function fuzzyMatch(drivers, name){
//   return drivers.filter(function(check) {
//     return check.indexOf(name) !== -1
//   })
// }

function fuzzyMatch(drivers, name){
  const isMatch = drivers.filter(function(drivers){
    if (name === drivers.slice(0,2)){
    return drivers
    }
  })
  return isMatch
}


// function matchName(drivers, match){
//   for (const user of drivers) {
//     if (user.name === match){
//       console.log(user)
//     }
//   }
// }

function matchName(drivers, match){
  return drivers.filter(x => x.name === match)
}
        /* 
  describe('matchName()', function () {
    it('accesses the data structure to check if name matches', function () {
      const drivers = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];

      expect(matchName(drivers, 'Bobby')).to.eql([
        {
          name: 'Bobby',
          hometown: 'Pittsburgh'
        },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay'
        }
      ]);
    });
  });
});

*/
