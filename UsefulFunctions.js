
// Finds the distance between 2 points on 2D plane using their x and y positions.
function euclidean(x1,y1,x2,y2) {
		
			return(Math.sqrt(Math.pow((Math.abs(x1-x2)),2)+Math.pow((Math.abs(y1-y2)),2)))
}
//picks a random integer(without decimals) between "int1" and "int2". Includes "int1", but not "int2".
function randInt(int1, int2) {
	
	return(Math.floor(Math.random()*(int2-int1)+int1))


}
//Picks a random number(with decimals) between "num1" and "num2". Includes "num1", but not "num2".
function randNum(num1, num2) {
	return(Math.random()*(num2-num1)+num1)
}
//Finds the sum of the numbers in "mylist".
function sum(mylist) {
 	var mysum = 0
	for (var i = 0; i < mylist.length; i++) {
		mysum += mylist[i]
		}
	return mysum
}
//Finds the mean, or average of the numbers in "mylist".
function mean(mylist) {
	var av = sum(mylist)
	
	return(av/mylist.length)

}
//Finds the highest number in "mylist".
function max(mylist) {
	var greatest=mylist[0]
	for (var i = 0; i < mylist.length; i++) {
		if(mylist[i] > greatest){
			greatest=mylist[i]
		}
	
	}
return(greatest)
}
//Finds the lowest number in "mylist".
function min(mylist) {
	var least=mylist[0]
	for (var i = 0; i < mylist.length; i++) {
		if(mylist[i] < least){
			least=mylist[i]
		}
	
	}
return(least)
}
//Finds how many numbers in "mylist" that are over the threshold, "t".
function overThreshold(mylist, t){
	var over=0
	for (var i = 0; i < mylist.length; i++) {
		if (mylist[i] > t){
			over ++
		}
	}
	return(over)
}


