/**
 * Created with IntelliJ IDEA.
 * User: linlin.huang
 * Date: 12-12-13
 * Time: 下午3:20
 * To change this template use File | Settings | File Templates.
 */
describe("utils", function () {

    it('namespace', function () {
        var o = $.namespace("tt.base");
        o.toString = function () {
            return "tt.base";
        }
        o.toString().should.eql("tt.base");
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

describe("st.base", function () {

    it('set', function () {
        var st = new window.st.Base();
        st.setItem(0);
    });

    it('get', function () {
        var st = new window.st.Base();
        st.setItem(1);
        st.setItem(2);
        st.setItem(3);
        st.setItem(4);
        st.setItem(5);
        st.setItem(6);
        st.setItem(7);
        st.setItem(8);
        st.setItem(9);
        st.setItem(10);
        st.getItem().should.eql(1);
        st.getItem(5).should.eql(6);
        st.getItem('fdsa',true).should.eql(1);
        st.list.length.should.eql(9);
        st.getItem(5,true).should.eql(7);
        st.list.length.should.eql(8);

    });

});