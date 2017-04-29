function euclidean(x1,y1,x2,y2) {
		
			return(Math.sqrt(Math.pow((Math.abs(x1-x2)),2)+Math.pow((Math.abs(y1-y2)),2)))
}

function randInt(int1, int2) {
	
	return(Math.floor(Math.random()*(int2-int1)+int1))


}
function randNum(num1, num2) {
	return(Math.random()*(num2-num1)+num1)
}
function sum(mylist) {
	var mysum = 0
	for (var i = 0; i < mylist.length; i++) {
		mysum += mylist[i]
		}
function mean(mylist) {
	var av = sum(mylist)
	
	return(av/mylist.length)

}
function max(mylist) {
	var t=mylist[0]
	for (var i = 0; i < mylist.length; i++) {
		if(mylist[i] > t){
			t=mylist[i]
		}
	
	}
return(t)
}
function min(mylist) {
	var t=mylist[0]
	for (var i = 0; i < mylist.length; i++) {
		if(mylist[i] < t){
			t=mylist[i]
		}
	
	}
return(t)
}
function overThreshold(mylist, t){
	over=0
	for (var i = 0; i < mylist.length; i++) {
		if (mylist[i] > t){
			over ++
		}
	}
	return(over)
}
