console.log(typeof NaN);        // number => because NaN is of number type
console.log(9999999999999999);  // 10000000000000000
console.log(0.2+0.1);           // 0.30000000000000004
console.log(Math.max());        // -Infinity
console.log(Math.min());        // Infinity
console.log(String([]));        // ''
console.log(Number([]));        // 0
console.log(String({}));        // '[object Object]'
console.log(Number({}));        // NaN
console.log([]+[]);             // String([]) + String([]) => '' + '' => ''
console.log([]+{});             // String([]) + String({}) => '' + '[object Object]' => '[object Object]'
console.log({}+[]);             // 0 => ?
console.log(true+true+true);    // 1+1+1 => 3
console.log(true-true);         // 1-1 => 0
console.log(9 + '1');           // 91
console.log(9 - '1');           // 8
console.log(! + [] + [] + ![]); // truefalse