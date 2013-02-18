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
        c.should.eql(st.getItem());
    });


});
