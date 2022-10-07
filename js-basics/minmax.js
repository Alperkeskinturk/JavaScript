
function minMax(arr) {
    let minNum = arr[0];
    for (let i=0; i<arr.length; i++){
        if(arr[i]<minNum){
            minNum=arr[i];
        }
    }
    let maxNum = arr[0];
    for (let i=0; i<arr.length; i++){
        if(arr[i]>maxNum){
            maxNum=arr[i];
        }
    }
	let result=[]
	result[0]=minNum
	result[1]=maxNum
    return result;
}