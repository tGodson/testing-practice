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
