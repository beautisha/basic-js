const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let arr = [];
  let str = '';
  if (members.length == 0) return false;
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == 'string') {
      arr[i] = members[i].trimStart()[0];
    }
  }
  arr.sort();
  for (let j = 0; j < arr.length; j++) {
    str = str + arr[j];
  }
  return str.toUpperCase();
}

module.exports = {
  createDreamTeam
};
