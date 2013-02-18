/**
 * Created with IntelliJ IDEA.
 * User: linlin.huang
 * Date: 13-2-17
 * Time: 上午10:04
 * To change this template use File | Settings | File Templates.
 */
(function () {
    var st = $.namespace('st');

    st.Ui = st.Base.create({
        /**
         * 初始化，所有继承与Base的类都含有初始化方法，并且在new之后会被自动调用
         * @private
         */
        _init: function () {
            this._typeObj = {};//保存同一type的所有组件
            this._idIndex = {};  //保存组件ID与组件在数组中的索引的对应关系
        },
        setItem: function (obj) {
            if (!obj) {
                throw new Error('请放入UI组件');
            } else {
                this.list = this.list || [];
                var ts = this._typeObj[obj.type] || (this._typeObj[obj.type] = []);//判断并且赋值
                this._setUn(obj, ts);
                this._setUn(obj, this.list);
                this._idIndex[obj.id] = this.list.length - 1; //保存关系
            }
        },
        /**
         * 避免重复添加组件
         * @param obj UI组件
         * @param arr 数组
         * @private
         */
        _setUn: function (obj, arr) {
            console.log(obj.id);
            var it = null, flag = true;//flag 标识是否存在重复元素
            for (var i = 0, len = arr.length; i < len; i++) {
                it = arr[i];
                if (it && it.id === obj.id) {
                    flag = false;
                } else {
                    flag = true;
                    break;
                }
            }

            if (flag) {
                arr.push(obj);
            }
        },
        /**
         * 根据ID获取组件对象
         * @param id 组件对象，不能为空
         * @return {*}
         */
        getById: function (id) {
            if (!id) {
                throw new Error('请传入ID');
            }
            return this.list[this._idIndex[id]];
        },
        /**
         * 根据组件类型返回组件数组，当type不存在时返回undefined
         * @param type 组件类型
         * @return {*}
         */
        getByType: function (type) {
            return this._typeObj[type];
        }
    });


})();
