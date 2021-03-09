
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let sortAsc;
    if (matrix === undefined) {
        return [];
    }
    for (let i = 0; i < matrix.length ; i++) {
        if (sortAsc) {
            matrix[i].sort((a,b) => b - a);
        } else {
            matrix[i].sort((a,b) => a- b);
        }
        sortAsc = !sortAsc;
    }
  return matrix.flat();
}
