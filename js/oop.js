/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 13-2-12
 * Time: ����10:36
 * To change this template use File | Settings | File Templates.
 */
(function (w) {

    function Base() {

    }

    Base.__uid = 1;

    /**
     * ʵ�ּ̳�
     * @param pr ����
     * @return {Function} �����õ��Ѿ��ӻ���̳еĺ�������
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
     * ʵ�ּ̳�
     * @param sup ����
     * @param sub ����
     * @private
     */
    function _inh(sup, sub) {
        var fun = function () {
        };
        fun.prototype = sup.prototype;
        sub.prototype = new fun();
        sub.prototype._super=sup.prototype;  //�������������
        sub.prototype.constructor = sub;
    }

    w.Base=Base;
})(window);