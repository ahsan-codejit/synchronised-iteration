module.exports = {
	iterate: function(arr, promiseFunc, limit=1){
		return new Promise((resolve, reject)=>{
			if(!Array.isArray(arr) || arr.length<=0) return;
			if(limit<1) limit=1;
			let promiseArray = [];
			do{
				(function mainrunner(narr){
					let counter=0;
					(function runPromiseFunc(item){
						let promise = promiseFunc(item)
						.then(res=>{
							counter++;
							return res;
						})
						promiseArray.push(promise);
						if(narr.length>0){
							runPromiseFunc(narr.pop())
						}
					})(narr.pop());
					if(arr.length>0 && counter===limit){
						mainrunner(arr.splice(0,limit))
					}
					if(arr.length===0){
						resolve(promiseArray);
					}
				})(arr.splice(0,limit));
				
			} while(arr.length>0);
		});
	}
}