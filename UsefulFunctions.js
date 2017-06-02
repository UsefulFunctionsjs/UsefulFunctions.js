

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
//Finds the sum of the numbers in "myList".
function sum(myList) {
 	var mysum = 0
	for (var i = 0; i < myList.length; i++) {
		mysum += myList[i]
		}
	return mysum
}
//Finds the mean, or average of the numbers in "myList".
function mean(myList) {
	var av = sum(myList)
	
	return(av/myList.length)

}
//Finds the highest number in "myList".
function max(myList) {
	var greatest=myList[0]
	for (var i = 0; i < myList.length; i++) {
		if(myList[i] > greatest){
			greatest=myList[i]
		}
	
	}
return(greatest)
}
//Finds the lowest number in "myList".
function min(myList) {
	var least=myList[0]
	for (var i = 0; i < myList.length; i++) {
		if(myList[i] < least){
			least=myList[i]
		}
	
	}
return(least)
}
//Finds how many numbers in "myList" that are over the threshold, "t".
function overThreshold(myList, t){
	var over=0
	for (var i = 0; i < myList.length; i++) {
		if (myList[i] > t){
			over ++
		}
	}
	return(over)
}


//finds the index of the smallest number in "myList"
//new
function minIndex(myList) {
	var least=0
		for (var i = 0; i < myList.length; i++) {
			if(myList[i] < myList[least]){
				least=i
			}
		
		}
	
	return(least)
}
//finds the index of the largest number in "myList"
//new
function maxIndex(myList) {
	var most=0
		for (var i = 0; i < myList.length; i++) {
			if(myList[i] > myList[most]){
				most=i
			}
		
		}
	
	return(most)
}
//finds the median of "myList"
//new
function median(myList){
	for(var i = 0; myList.length < 3; i++){
		var smallIndex = minIndex(myList)
		var largeIndex = maxIndex(myList)
		if(smallIndex != -1) {
			myList.splice(smallIndex, 1);
		}
		if(largeIndex != -1) {
				myList.splice(largeIndex, 1);
		}
	}
return mean(myList)
}
// Returns "myList" with "num1" and "num2" swapped
//new
function swap(myList, num1, num2) {
	var foo = myList[num1]
	var gaa = myList[num2]
	myList[num1] = gaa
	myList[num2] = foo
	return myList
}
//sorts "myList" into acending order
//advantage over bubble:faster
//disadvantage over bubble:uses more data
//new
function sSort(myList){
	var length = myList.length
    var sortedArray = []

	for (var i = 0; i < length; i ++) {
		var least = min(myList)
		sortedArray.push(least)
		var index = findMinIndex(myList);
	if(index != -1) {
		myList.splice(index, 1);
	}
	}
	
	return sortedArray
}
//sorts"myList" into acending order
//advantage over sSort: uses less data
//disadvantage over sSort: slower
//new
function bubble(myList){
	
	for(var i = 0; i < myList.length; i++){
		for(var j = 0; j < myList.length-1; j++){
			if(myList[j]>myList[j+1]){
				swap(myList, j, j+1)
			}
		}
	}
	return(myList)
	
}



