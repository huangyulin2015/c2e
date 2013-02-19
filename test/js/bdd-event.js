/**
 * Created with IntelliJ IDEA.
 * User: linlin.huang
 * Date: 12-12-13
 * Time: 下午3:20
 * To change this template use File | Settings | File Templates.
 */
describe("event", function () {

    it('on', function () {
        var ev = new evt.Base();
        ev.on('ccc',function(a){
        });
    });

    it('handler event', function (done) {
        var ev = new evt.Base();
        ev.on('ccc',function(a){
            a.should.eql('aaa');
        });
        ev.on('ccc',function(a,b,c){
            a.should.eql('aaa');
            b.should.eql(12);
            c.should.eql('dd');

            done();
        });
        ev.trigger('ccc','aaa',12,'dd');

    });

    it('off', function (done) {
        var ev = new evt.Base();
        ev.on('ccc',function(a){
            a.should.eql('aaa');
            done();
        });
        ev.trigger('ccc','aaa',12,'dd');
        ev.off('ccc');
        ev.trigger('ccc','aaa',12,'dd');
    });

    it('clear', function () {
        var ev = new evt.Base();
        ev.on('ccc',function(a){
        });
        ev.on('ddd',function(a){
        });
        Object.keys(ev._events).length.should.eql(2);
        ev.clear();
        Object.keys(ev._events).length.should.eql(0);

    });


});
