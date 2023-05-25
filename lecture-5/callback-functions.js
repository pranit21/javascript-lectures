function fun1() {
    console.log('fun1');
}

// cb is called as callback function
// callback function is passed as a parameter to another function
// function to which a callback function is passed is called as higher order function
function fun2(cb) {   // assume this function is asynchronous
    console.log('fun2');
    cb();
}
fun2(fun1);

function ask(question, yes, no) {
    const answer = confirm(question);
    if (answer) {
        yes();
    } else {
        no();
    }
}

let showOk = function() {
    console.log('Ok');
}

function showCancel() {
    console.log('Cancelled');
}
// ask('Do you want to delete this user?', showOk, showCancel);

ask(
    'Do you agree to the terms & conditions?',
    function() { console.log('Yes, I agree!'); },
    function() { console.log('No, I don\'t agree!'); }
);