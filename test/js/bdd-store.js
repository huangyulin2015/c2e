/**
 * Created with IntelliJ IDEA.
 * User: linlin.huang
 * Date: 12-12-13
 * Time: 下午3:20
 * To change this template use File | Settings | File Templates.
 */
describe("ui", function () {

    it('set', function () {
        var st = new window.st.Ui();
        st.setItem.should.throw(Error);
        var c = new ui.Cpt();
        st.setItem(c);
        st.setItem(c);
//        c.should.eql(st.getItem());
        st.list.length.should.eql(1);
    });


    it('getById', function () {
        var st = new window.st.Ui();
        var c = new ui.Cpt();
        st.setItem(c);
        var c2 = new ui.Cpt();
        st.setItem(c2);
        st.getById(c.id).should.eql(c);
        st.getById(c2.id).should.eql(c2);
    });

    it('getByType', function () {
        var st = new window.st.Ui();
        var c = new ui.Cpt();
        st.setItem(c);
        var c2 = new ui.Cpt();
        st.setItem(c2);
        st.getByType(c.type).length.should.eql(2);
    });


});
