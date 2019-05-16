
module.exports.getDate=function(){
  var today=new Date;
  var options={
    day:"numeric",
    weekday:"long",
    month:"long",
  }
  var day=today.toLocaleDateString("en-US",options);
  return day;

};

module.exports.getDay=function(){
  var today=new Date;
  var options={
    weekday:"long",
  }
  var day=today.toLocaleDateString("en-US",options);
  return day;
};






/*module.exports.functionName=function;
...define function */
