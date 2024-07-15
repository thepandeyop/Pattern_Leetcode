/**
 * @param {string} s
 * @return {string}
 */
var findLatestTime = function(s) {
   return s.replaceAll("?", (_, i) => {
        switch (i) {
            case 0:
                return +s[1] > 1 ? "0" : "1";
            case 1:
                return s[0] === "1" || s[0] === "?" ? "1" : "9";
            case 3:
                return "5";
            case 4:
                return "9";
        }
    });   
};