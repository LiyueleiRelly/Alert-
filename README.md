# Alert-
不使用jQuery,纯原生JS
ico 使用font awesome http://www.fontawesome.com.cn/
## 使用示例
    <link rel="stylesheet" href="/static/css/font-awesome.min.css" media="all">
    <script src="/static/js/Alert.js"></script>
###没有id的情况下新建
    Alert({
        icon: 'fa-spinner fa-spin',
        title: '提交请求中',
        id: 'alertBox',
        closefunction: function () {

        }
    });
 ###如果要覆盖更改某个弹出框的内容，比如请求后台弹出请等待，成功后更改为提交成功
 ###这时可以Alert(para,id)的方式调用
    Alert({
        icon: 'fa-check',
        title: '新建成功',
        info: '审核过后我们会通知您',
        close: '关闭',
        closefunction: function(){
        }
    }, 'alertBox');