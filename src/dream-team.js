module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  return members.filter(item => typeof item === 'string').map(item => item.trim().split(' ')[0].toUpperCase()[0]).sort().join('');
};