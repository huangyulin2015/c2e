/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 13-2-12
 * Time: 下午10:36
 * To change this template use File | Settings | File Templates.
 */
(function (w) {

    function Base() {

    }

    Base.__uid = 1;

    /**
     * 实现继承
     * @param pr 配置
     * @return {Function} 创建好的已经从基类继承的函数对象
     * @private
     */
    var __create = function (pr) {
        var p = pr || {}, b = function () {
        },i=pr.init||{};
        if (this === Base || (this.prototype instanceof Base)) {
            _inh(this, b);
        }
        b.prototype.id = p.id || 'base_' + (Base.__uid++);
        b.create=arguments.callee;
        for(var k in i){
            if(i.hasOwnProperty(k)){
                b.prototype[k]=i[k];
            }
        }
        return b;
    }
    Base.create = Base.prototype.create = __create;





    /**
     * 实现继承
     * @param sup 父类
     * @param sub 子类
     * @private
     */
    function _inh(sup, sub) {
        var fun = function () {
        };
        fun.prototype = sup.prototype;
        sub.prototype = new fun();
        sub.prototype._super=sup.prototype;  //保留父类的引用
        sub.prototype.constructor = sub;
    }

    w.Base=Base;
})(window);