const logItems = function (array) {
    let itemNumber = 0;
    let arrayName;

    if (parseInt(array)) {
        arrayName = 'Array of Numbers';
    } else {
        arrayName = 'Array of String';
    };

    console.log(arrayName);

    for (let i = 0; i < array.length; i += 1) {
        itemNumber = i + 1;
        console.log(`${itemNumber} - ${array[i]}`);
    }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);