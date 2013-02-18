/**
 * Created with IntelliJ IDEA.
 * User: linlin.huang
 * Date: 13-2-17
 * Time: 上午8:37
 * To change this template use File | Settings | File Templates.
 */
(function(){
    var ui = $.namespace('ui');

    ui.App = ui.Base.create({
        id:'app',
        h:'100%',
        w:'320',
        /**
         * 主面板绘制方法
         */
        draw:function(){
            var b = document.body,c=document.createElement('canvas');
            c.id=this.id;
            c.setAttribute('width',this.w);
            c.setAttribute('height',this.h);
            b.appendChild(c);
        },
        //向app中添加组件
        addItem:function(c){
            if(c && c instanceof ui.Cpt){

                return c;
            }
            throw new Error('请添加组件');
        }
    });
})();
