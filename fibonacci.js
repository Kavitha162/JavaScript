function fibonacci(num){
	var num1=0;
	var num2=1;
	var sum;
	var count=10;
	console.log(num1+" "+num2);
	for(var i=2;i<=count;++i)
	{
		sum=num1+num2;
		console.log(" "+sum);
		num1=num2;
		num2=sum;
	}
}