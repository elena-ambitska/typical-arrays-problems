
exports.min = function min (array) {
  
  if (Array.isArray(array) && array.length>0){
  return Math.min(...array);
  }else{
    return 0
  }
}

exports.max = function max (array) {
  if (Array.isArray(array) && array.length>0){
  return Math.max(...array);
}else{
  return 0
}
}





exports.avg = function avg (array) {
  if (Array.isArray(array) && array.length>0){
    let sum=array.reduce((a, b) => a + b, 0);
    let avg=sum / array.length;
    return  avg;
  }else{
    return 0
  }
  }