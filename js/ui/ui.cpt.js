/**
 * Created with IntelliJ IDEA.
 * User: linlin.huang
 * Date: 13-2-17
 * Time: 上午8:37
 * To change this template use File | Settings | File Templates.
 */
(function(){
    var ui = $.namespace('ui');

    ui.Cpt = ui.Base.create({
        draw:function(app){
            if(!this.app || !app){
                throw new Error('请先把组件添加到app中');
            }




        }
    });
})();
