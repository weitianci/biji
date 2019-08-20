// url : 路径地址
// type : 请求方式；默认是get
// async : 同步异步 默认是true
// dataType:"json"  默认是json
// beforeSend : 在发送请求之前执行的回调；一般情况下在这个回调中去设置cookie；
// success: 当请求成功之后执行的回调函数；并且把获取的数据转成json传递给当前的第一个参数；
// timeout :设置超时时间；
// error : 当请求失败触发的回调函数；
// cache : 是否走缓存；默认是true；
// complete : 完成；不管请求成功或者失败都会执行的回调；
// data: 参数



// jquery的核心原理
$.ajax({
    url: "index.css",
    timeout: 1000,
    type: "post",
    data: { user: 1, pass: 2 },
    //dataType:"jsonp",// 跨域
    success: function (data) {
        console.log(100);
        // console.log(this);// jquery 的一个ajax对象；
    },
    error: function () {

    },
    complete: function () {
        //
        console.log(200);
    }
})