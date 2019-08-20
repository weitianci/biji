// ajax四步：
    let data;
    // 1、创建一个ajax实例
    let xhr = new XMLHttpRequest();//  XMLHttpRequest是一个内置的类
    // 2、打开一个路径，请求的方式，路径，同步异步（false：同步；true：异步）
    xhr.open("get", "data.json", true);
    // 3、监听函数
    xhr.onreadystatechange = () => {
        // 当xhr身上的readyState属性值发生改变，就会触发这个函数
        // 当readState变为4，那么数据就会统一放在xhr.responseText
        // 只要客户端接收到服务器的响应头，那么这个状态码基本确定，不再发生改变
        // if (xhr.readyState === 4 && /^2\d{2}/.test(xhr.status)) {
        //     data = JSON.parse(xhr.responseText)
        // }
        console.log(1)
    }
    console.log(3)
    // 4、发送请求
    xhr.send();
    console.log(2)
    // false：3、1、2   true：3、2、1

// 传参
    // 1、get在open？后传参
    // xhr.open("get", "data.json?username=aaa&password=112233", true);

    // 2、post在send发送请求时传参
    // xhr.send({username="aaa",password:"112233"});

// jquery ajax：
    $.ajax({
        type: "get",
        url: "url",
        async: true,
        data: "data",
        dataType: "json",
        success: function (data) {
            
        }
    });

// xhr.readyState：这个属性值01234；每个值代表当前ajax请求进行到了不同的阶段
    // 0：创建了ajax的实例
    // 1：确定请求的方式，路径，同步异步
    // 2：说明服务器已经接受到客户端发来的请求，并且在数据传输之前，把响应头传送给客户端
    // 3：说明服务端正在向客户端传送数据信息
    // 4：说明客户端已经完全接受到了服务器传递过来的数据

// 同异步请求
    // js是单线程，同一时间只能执行一个任务
    // 浏览器是多线程，可以同时执行多个任务
    // 先执行ajax send()前面onreadystatechange内部代码的为同步，跳过ajax先执行send()后面代码的为异步

// 常见HTTP状态码
    // 2 开头
    // 200 : 代表一切正常，数据请求成功；请求的响应头或者响应体将这个状态返回；
    // 201 : 请求实现，需要建立一个新的资源
    // 202 : 服务器已经接收到请求，但是尚未处理

    // 3 开头
    // 301 : 永久重定向
    // 304： 代表了走缓存；
    // 307： 临时转移；

    // 4 开头： 一般情况下都是客户端的问题
    // 401 : 当前请求需要验证；
    // 403 : 没有权限访问；
    // 404 : 路径找不到

    // 5 开头
    // 500 : 服务器未知的错误；
    // 503 : 超负荷；过载；

// URL
    // http https：协议
    // www.baidu.com：域名
    // 端口号
    // 资源路径
    // ？后面跟的参数