/**
 * Build two frequency counters. If any of the message characters are not
 *  found in the 'letters' characters, or if there are not enough of them,
 *  return false. Otherwise return true.
 */
function constructNote(message, letters) {
    let msgFreqCount = {};
    let letFreqCount = {};

    for (let c of message) {
        let charCount = msgFreqCount[c] || 0;
        msgFreqCount[c] = charCount + 1;
    }

    for (let c of letters) {
        let charCount = letFreqCount[c] || 0;
        letFreqCount[c] = charCount + 1;
    }

    for (let c in msgFreqCount) {
        if (!letFreqCount[c]) return false;
        if (msgFreqCount[c] > letFreqCount[c]) return false;
    }

    return true;
}

module.exports = { constructNote };