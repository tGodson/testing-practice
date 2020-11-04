// const arrey = [1,8,3,4,2,6];
// let sum=0;
// let object;

// export const analyze = (ar) => {
const analyze = (ar) => {
   let sum = 0;
   let object;
    for(let i = 0;i<ar.length;i++){
        sum += ar[i];
    }

    return object = {
      average: sum/ar.length,
      min: Math.min.apply(null, ar),
      max: Math.max.apply(null, ar),
      length: ar.length
    };
}

module.exports = analyze
