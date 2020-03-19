module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  return members.filter(s => typeof s === 'string')
    .map(str => str.trim())
    .map(str => str[0].toUpperCase())
    .sort()
    .join('');
}