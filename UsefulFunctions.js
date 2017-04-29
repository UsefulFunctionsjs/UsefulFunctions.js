
function euclidean(x1,y1,x2,y2) {
		
			return(Math.sqrt(Math.pow((Math.abs(x1-x2)),2)+Math.pow((Math.abs(y1-y2)),2)))
}

function randInt(int1, int2) {
	
	return(Math.floor(Math.random()*(int2-int1)+int1))


}
function randNum(num1, num2) {
	return(Math.random()*(num2-num1)+num1)
}
