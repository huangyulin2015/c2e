/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 13-2-12
 * Time: ÏÂÎç10:07
 * To change this template use File | Settings | File Templates.
 */

(function (w) {
    var d = w.document;

    function $(opt) {
        if ($.isObject(opt)) {
            return opt;
        } else if ($.isFunction(opt)) {
            w.onload=function(){
                opt();
            }
            return ;
        }
        return d.querySelectorAll(opt);
    }


    $.isFunction = function (opt) {
        return Object.prototype.toString.call(opt) === "[object Function]";
    }
    $.isObject = function (opt) {
        return Object.prototype.toString.call(opt) === "[object Object]";
    }

    w.$ = $;

})(window);
