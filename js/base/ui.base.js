/**
 * Created with IntelliJ IDEA.
 * User: linlin.huang
 * Date: 13-2-16
 * Time: 上午10:46
 * To change this template use File | Settings | File Templates.
 */
(function(){
    var ui = $.namespace('ui');
    ui.Base = Base.create({
        draw:function(){
            throw new Error('请在子类中实现该方法!');
        }
    });

})();
