/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 13-2-12
 * Time: 下午10:07
 * To change this template use File | Settings | File Templates.
 */

(function (w) {
    var d = w.document;

    function $(opt) {
        if ($.isObject(opt)) {
            return opt;
        } else if ($.isFunction(opt)) {
            w.onload = function () {
                opt();
            }
            return;
        }
        return d.querySelectorAll(opt);
    }


    /**
     * 创建命名空间
     * @param str 以.连接的命名空间字符串
     */
    $.namespace = function (str) {
        var orr, i, len, o = null;
        if (str) {
            orr = str.split(".");
            o = window;
            for (i = 0, len = orr.length; i < len; i++) {
                o[orr[i]] = o[orr[i]] || {};
                o = o[orr[i]];
            }
        }
        return o;
    }


    $.isFunction = function (opt) {
        return Object.prototype.toString.call(opt) === "[object Function]";
    }
    $.isObject = function (opt) {
        return Object.prototype.toString.call(opt) === "[object Object]";
    }

    w.$ = $;

})(window);
