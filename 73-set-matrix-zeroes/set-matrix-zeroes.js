/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {

    let rowArray = new Array(matrix.length).fill(-1);
    let colArray = new Array(matrix[0].length).fill(-1);
    
    setcondition(rowArray,colArray,matrix);
    setZero(rowArray,colArray,matrix);
};

const setcondition = (rowArray,colArray,matrix)=>{
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j]===0){
                rowArray[i] = 0;
                colArray[j] = 0;
            }
        }
    }
};


 const setZero =(rowArray,colArray,matrix)=>{
     for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(rowArray[i]===0 ||colArray[j]===0){
                matrix[i][j]=0;
            }
        }
     }
 }