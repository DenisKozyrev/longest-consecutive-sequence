module.exports = function longestConsecutiveLength(array) {
    const sortArray = array.sort(function(a, b) {
        return a - b;
    });

    const arrCount = [];
    let count = 0;
    for (i = 0; i < sortArray.length; i++) {
        if (sortArray[i] == sortArray[i + 1]) {
            delete sortArray[i];
        } else if (sortArray[i] + 1 == sortArray[i + 1]) {
            count++
        } else {
            arrCount.push(count + 1);
            count = 0;
        }
    }
    return ~~Math.max(...arrCount);

}