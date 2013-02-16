/**
 * Created with IntelliJ IDEA.
 * User: linlin.huang
 * Date: 12-12-13
 * Time: 下午3:20
 * To change this template use File | Settings | File Templates.
 */
describe("utils", function () {

    it('namespace', function () {
        var o = $.namespace("ui.base");
        o.toString = function () {
            return "ui.base";
        }
        o.toString().should.eql("ui.base");
    });

});

describe("base", function () {
//
//    it('create id', function () {
//        var A = Base.create({});
//        var a = new A();
//        a.id.should.eql('base_1');
//    });
//
//    it('create id2', function () {
//        var A = Base.create({});
//        var a = new A();
//        a.id.should.eql('base_2');
//    });

    it('create prototype', function () {
        var A = Base.create({});
        var a = new A({'name': 'aaa'});
        a.name.should.eql('aaa');
    });

});

describe("ui.base", function () {

    it('draw', function () {
        var b = new ui.Base({draw:function(){return {}}});
        b.draw().should.ok;
    });

});