
function sameFrequency(num1, num2) {
    let str1 = num1.toString();
    let str2 = num2.toString();

    if (str1.length !== str2.length) return false;

    let digitFreq1 = {};
    let digitFreq2 = {};

    for (let i = 0; i < str1.length; i++) {
        digitFreq1[str1[i]] = (digitFreq1[str1[i]] || 0) + 1;
      }
    
      for (let j = 0; j < str2.length; j++) {
        digitFreq2[str2[j]] = (digitFreq2[str2[j]] || 0) + 1;
      }
    
      for (let key in digitFreq1) {
        if (digitFreq1[key] !== digitFreq2[key]) return false;
      }
      
    return true;
}

module.exports = {sameFrequency};