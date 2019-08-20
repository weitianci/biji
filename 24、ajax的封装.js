// jquery :
// 封装: 把实现同一个功能的代码放到函数中，当想实现类似的功能，直接调用函数就可以；
// 主要通过参数来区分或者控制函数的执行；
$.ajax({
    url: "",
    type: "get",
    async: true,
    cache: true,
    data: { username: "a", password: "b" },
    success: function () {

    }
})

function ajax(option) {
    let default_op = {
        type: "get",
        async: true,
        cache: true,
        data: null,
        success: null,
        dataType: 'json'
    }
    // 循环option，覆盖default_op
    for (let key in option) {
        // 用option中传递来的覆盖默认的；
        default_op[key] = option[key];
    }
    if (default_op.type === "get" && default_op.data) {
        let str = "";
        for (let key in default_op.data) {
            str += `${key}=${default_op.data[key]}&`;
        }
        str = str.slice(0, str.length - 1);
        default_op.url += "?" + str;
        if (!default_op.cache) {
            // 如果是false那么不走缓存，需要在地址后面拼上一个时间戳；
            default_op.url += `&time=${new Date()}`
        }
    }

    let xhr = new XMLHttpRequest();
    xhr.open(default_op.type, default_op.url, default_op.async);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && /^2\d{2}/.test(xhr.status)) {
            let val = xhr.responseText;
            if (default_op.dataType === "json") {
                val = JSON.parse(xhr.responseText)
            }
            if (typeof default_op.success === "function") {
                default_op.success(val);
            }
        }
    }
    if (default_op.type === "get") {
        default_op.data = null;
    }
    xhr.send(default_op.data);
}
ajax({
    url: ""
})