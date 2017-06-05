var ages = [2, 1, 5, 10, 3, 20, 30, 4, 8, 7, 5, 99, 28, 18];


var sort = function(arr, method='backward') {
    // define 3 vars
    // temp: is the var which is going to store the lowest value or the highest
    var temp;
    // from: this will store the position to change on the arr
    var from;
    // to: this will store the position to change on the arr    
    var to;
    // Create a loop that is going to start on the position 0 to compare the values
    for(var i = 0; i < arr.length; i++){
        // Set the temp as the first position to star comparing
        temp = arr[i];
        // Set to on the position on the loop, it important to change the position before the compare val
        to = i;
        // create a new loop with the others positions remaining
        for(var j = i; j < arr.length; j++){
            // sort the array depending on the method you want to use
            if(method === 'upward'){
                // if the temp value is lower than the val that is compare
                if(temp < arr[j]){
                    // change the temp to the new val
                    temp = arr[j];
                    // set the value from to where you want to change
                    from = j;
                    // change the position on the arr
                    changePosition(from, to, arr)
                }
            } else {
                if(temp > arr[j]){
                    temp = arr[j];
                    from = j;
                    changePosition(from, to, arr)
                }
            }
            
        }
    }
    // return the arr with all the changes
    return arr;
};

var changePosition = function(from, to, arr) {
    arr.splice(to, 0, arr.splice(from, 1)[0]);
};

var assertEqual = function(expected, result) {
    if(JSON.stringify(expected) === JSON.stringify(result)) {
        return 'PASS';
    }
    return `Expected ${expected} but actually got: ${result}`;
}

console.log(sort(ages));
console.log(assertEqual([1, 10, 100, 1000, 10000], sort([10, 1000, 10000, 100, 1])));
console.log(assertEqual([1, 1, 100, 1000, 10000], sort([10, 1000, 10000, 100, 1])));
console.log(assertEqual([1, 2, 11, 12, 13], sort([1, 2, 11, 12, 13])));
console.log(assertEqual([10, 9, 8, 7, 6], sort([10, 9, 8, 7, 6], 'upward')));
