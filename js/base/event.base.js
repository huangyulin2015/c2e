/**
 * Created with IntelliJ IDEA.
 * User: linlin.huang
 * Date: 13-2-17
 * Time: 上午9:33
 * To change this template use File | Settings | File Templates.
 */
(function () {
    var ev = $.namespace('evt');
    ev.Base = Base.create({
        _init: function () {
            this._events = {};
        },
        /**
         * 触发事件，第一个参数必须是事件名称，后面可以传入任意多个事件函数的参数
         */
        trigger: function () {
            var _name = arguments[0], i, len, h;
            if (!_name) {
                throw new Error('事件名称不允许为空');
            }
            var _hands = this._events[_name];
            if (_hands) {
                for (i = 0, len = _hands.length; i < len; i++) {
                    h = _hands[i];
                    h.apply(this, Array.prototype.slice.call(arguments, 1));
                }
            }
        },
        /**
         * 绑定处理函数
         * @param name 事件名称
         * @param fun 处理函数，不能为空
         */
        on: function (name, fun) {
            if (!name || !fun) {
                throw new Error('事件名称和处理函数都不允许为空');
            }
            if (!$.isFunction(fun))throw new Error('处理函数不是函数对象');

            var hands = this._events[name] || (this._events[name] = []);
            hands.push(fun);

        },
        /**
         * 删除事件处理函数
         * @param name 事件名称
         * @param fun 处理函数，当fun为空时会清空所有name事件的处理函数
         */
        off: function (name, fun) {
            var i, len, h;
            if (!name) {
                throw new Error('事件名称不允许为空');
            }
            var _hands = this._events[name];
            if (_hands) {
                if (fun)
                    for (i = 0, len = _hands.length; i < len; i++) {
                        h = _hands[i];
                        if (h === fun) {
                            _hands.splice(i, 1);
                        }
                    }
                else
                    this._events[name] = [];
            }


        },
        /**
         * 清空所有事件和处理函数
         */
        clear: function () {
            this._events = {};
        }

    });

})();