/**
 * Created with IntelliJ IDEA.
 * User: linlin.huang
 * Date: 13-2-17
 * Time: 上午9:33
 * To change this template use File | Settings | File Templates.
 */
(function () {
    var st = $.namespace('st');
    /**
     * 创建基础数据存储结构
     * @type {*}
     */
    st.Base = Base.create({
        list: null,
        /**
         * 在集合中放入非空数据
         * @param obj
         */
        setItem: function (obj) {
            if (obj) {
                this.list = this.list || [];
                this.list.push(obj);
            } else {
                if (obj !== 0 && obj !== false) {
                    throw new Error('请放入非空对象');
                } else {
                    this.list = this.list || [];
                    this.list.push(obj);
                }
            }
        },
        /**
         * 取出数据
         * @param i 索引
         * @param f 是否再集合中删除该数据
         * @return {null|boolean|*}
         */
        getItem: function (i, f) {
            var item = this.list && this.list.length > 0 && this.list[0];

            if (!f) {
                item = this.list[i];
            } else {
                item = this.list.splice(i, 1)[0];
            }
            return (item = item || this.list[0]);
        }

    });

})();