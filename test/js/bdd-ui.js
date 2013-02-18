/**
 * Created with IntelliJ IDEA.
 * User: linlin.huang
 * Date: 12-12-13
 * Time: 下午3:20
 * To change this template use File | Settings | File Templates.
 */
describe("app", function () {

    it('draw', function () {
        var app = new ui.App({});
        app.draw();
        var o = $("#" + app.id)[0];
        o.tagName.should.eql('CANVAS');
    });

    it('addItem', function () {
        var app = new ui.App({});
        app.draw();
        var c = new ui.Cpt();
        app.addItem(c).ok;


    });



});

describe("cpt", function () {

    it('draw failed', function () {
        var cpt = new ui.Cpt();
        cpt.draw.should.throw(Error);
    });


});
