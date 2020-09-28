const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false;
    }
    
    let twoLetterArr = [];

    members.forEach(element => {
        if (typeof (element) === 'string' && element != '') {
            twoLetterArr.push(element.trim().toUpperCase().slice(0, 1));
        } else {
            return false;
        }
    });

  return twoLetterArr.sort().join('');

};