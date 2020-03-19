module.exports = function createDreamTeam(members) {
let name = [];
for (let person of members) {
  if (typeof person === string){
    let newPerson = person.trim().split('');
    name.push(newPerson[0]);
    return name.sort().join('').toUpperCase();
  }
  else {return false}
}
};