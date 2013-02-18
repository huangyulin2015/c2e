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
        setItem: function (obj) {
            if (!obj) {
                throw new Error('请放入UI组件');
            } else {
                this.list = this.list || [];
                this.list.push(obj);
            }
        }
    });


})();
