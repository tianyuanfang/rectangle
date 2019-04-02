var expect = chai.expect;

describe('矩形面积函数的测试', function() {
  it('area(10, 5) = 50', function() {
    var r =new Rectangle(10,5);
    expect(r.area()).to.be.equal(50);
  });

  it('area("10", "5") = 50', function() {
    var r =new Rectangle('10','5');
    expect(r.area()).to.be.equal(50);
  });
  
  it('宽度和高度都是非法字符串', function(){
    var r = new Rectangle('a', 'b');
    expect(isNaN(r.area())).to.be.ok;                
    });

  it('空数据是非法数据', function() {
    var result = validate('');
    expect(result.isOK).not.to.be.ok;              
  });

  it('e 科学计数法是合法数据', function() {
    var result = validate('3.4e3');
    expect(result.isOK).to.be.ok;              
  });

});
