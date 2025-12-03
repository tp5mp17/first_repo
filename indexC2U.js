function combinUesrs(...args) {
    const combinedObject = {
    uesrs: []
    };
    for (const userArray of args) {
        combinedObject.users = [...combinedObject.uesrs, ...userArray];
        
        combinedObject.merge_date = Data.today().format('11/12/2025')

    }

    return combinedObject;
}
 const A = [{ id: 1, name: 'Alice' }];
 const B = [{ id: 2, name: 'bill'}]

const finalCombinedData = combinUesrs(A, B);
console.log(finalCombinedData);

 module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};