function combinUesrs(...args) {
    const combinObject = {
    uesrs: []
    };
    for (const userArray of args) {
        combinObject.users = [...combinObject.uesrs, ...userArray];

    }

    return combinObject;
}
 const A = [{ id: 1, name: 'Alice' }];
 const B = [{ id: 2, name: 'bill'}]

const finalCombinedData = combinUesrs(A, B);
console.log(finalCombinedData);

 module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};