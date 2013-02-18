/**
 * Created with IntelliJ IDEA.
 * User: linlin.huang
 * Date: 13-2-17
 * Time: 上午8:37
 * To change this template use File | Settings | File Templates.
 */
(function(){
    var ui = $.namespace('ui');


    /**
     * 创建UI组件基类
     * @type {*}
     */
    ui.Cpt = ui.Base.create({
        type:0,//所有的组件都会有一个类型，用来区别组件
        draw:function(app){
            if(!this.app || !app){
                throw new Error('请先把组件添加到app中');
            }




        }
    });
})();
