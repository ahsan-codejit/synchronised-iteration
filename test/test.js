const si = require('../index');
const expect = require('chai').expect;
describe('#Synchronised-Iterator', function(){
	it('should be an object', function(done){
		expect(si).to.be.an('object');
		done();
	});
	it('should have a method called iterate', function(done){
		expect(si.iterate).to.be.a('function');
		done();
	});
	it('should takes array [1, 2] and returns promise with valude [1,2]', function(done){
		function show(n){
			return new Promise((resolve, reject)=>{
				resolve(n)
			})
		}
		si.iterate([1,2], show)
		.then(res => {
			console.log(res, [show(1), show(2)])
			//expect(res).to.be([show(1), show(2)]);
			res[0].then(val=>{
				console.log(val);
				expect(val).to.be.equal(1);
			});
			res[1].then(val=>{
				console.log(val);
				expect(val).to.be.equal(2);
			});
		});
		done();
	});
});