//选项卡：ul>li*3>div*3
//执行：Tabs(标题元素,内容元素,"标题class","内容class","鼠标事件","鼠标指针样式(可以不写)")

//隔行变色：ul>li*3
//执行：lineColor(元素,"单行色","偶行色","鼠标悬停高亮","鼠标指针样式(可以不写)")

//查找上一个兄弟元素：（兼容所有浏览器）
//执行：getBrother(元素)

//获取url信息：
//执行：queryUrl(变量)

//倒计时：
//执行：codeTime("2019/7/5 17:13:00","显示事件的元素","结束后显示的文字(可以不写,默认00：00：00)");

//单数补零：
//执行：addZero(num)

//类数组转数组：
//执行toArray(元素)

function Tabs(eLis, eDiv, tab_read, tab_body, on, mouse) {
    for (let i = 0; i < eLis.length; i++) {
        eLis[i][on] = function () {
            for (let j = 0; j < eLis.length; j++) {
                eLis[j].className = "";
                eDiv[j].className = ""
            }
            this.style.cursor = mouse;
            this.className = tab_read;
            eDiv[i].className = tab_body
        }
    }
}

function lineColor(element, first, ending, onmouseover, mouse) {
    for (let i = 0; i < element.length; i++) {
        if (i % 2 == 0) {
            element[i].style.background = first;
            element[i].ag = first
        } else {
            element[i].style.background = ending;
            element[i].ag = ending
        }
        element[i].onmouseover = function () {
            this.style.cursor = mouse;
            this.style.background = onmouseover
        }
        element[i].onmouseout = function () {
            this.style.background = this.ag
        }
    }
}

function getBrother(curEle) {
    if ("previousElementSibling" in curEle) {
        return curEle.previousElementSibling
    }
    var pre = curEle.previousSibling
    while (pre) {
        if (pre.nodeType === 1) {
            return pre;
        }
        pre = pre.previousSibling;
    }
    return null
}

function queryUrl(url) {
    var index = url.indexOf("?"),
        newStr = url.substring(index + 1),
        ary = newStr.split("&"),
        obj = {};
    for (let i = 0; i < ary.length; i++) {
        var a = ary[i].split("=");
        obj[a[0]] = a[1];
    }
    return obj
}

function codeTime(targetTime, element, text) {
    var targetTime = new Date(targetTime),
        difTime = targetTime - new Date(),
        timer = setInterval(codeTime, 1000, targetTime, element, text);
    if (difTime <= 0) {
        clearInterval(timer);
        if (!text) {
            element.innerHTML = "00 : 00 : 00";
        } else {
            element.innerHTML = text;
        }
        return;
    }
    var hour = Math.floor(difTime / (1000 * 60 * 60)),
        min = Math.floor((difTime - hour * 1000 * 60 * 60) / 1000 / 60),
        second = Math.floor((difTime - hour * 1000 * 60 * 60 - min * 1000 * 60) / 1000),
        str = addZero(hour) + " : " + addZero(min) + " : " + addZero(second);
    element.innerHTML = str;
}

function addZero(num) {
    return num < 10 ? "0" + num : num;
}

function toArray(likeAry) {
    var ary = [];
    try {
        ary = Array.prototype.slice.call(likeAry)
    } catch (error) {
        for (var i = 0; i < likeAry.length; i++) {
            ary[i] = likeAry[i];
        }
    }
    return ary;
}