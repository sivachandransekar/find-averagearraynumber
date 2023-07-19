var arr=[20,33,45,70,56,90,20,10];
var sem=0;
var averagevalue;
document.write("Given arry elements"+arr+"<br>");
for(let i=0;i<arr.length;i++){
	sem=sem+arr[i];
	averagevalue=parseFloat(sem/arr.length);
}

document.write("Average value is="+averagevalue);