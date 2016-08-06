/**
 * Created by zhouweitao on 16/8/6.
 */
window.onload = function () {
    topButton();
    imgLocation('container', 'box');

    var imgData = {
        'data': [{'src': '0.jpg'}, {'src': '1.jpg'}, {'src': '2.jpg'}, {'src': '3.jpg'}, {'src': '4.jpg'}, {'src': '5.jpg'}, {'src': '6.jpg'}
            , {'src': '7.jpg'}, {'src': '8.jpg'}, {'src': '9.jpg'}, {'src': '10.jpg'}, {'src': '11.jpg'}, {'src': '12.jpg'}, {'src': '13.gif'}
            , {'src': '14.gif'}, {'src': '15.gif'}, {'src': '16.gif'}, {'src': '17.gif'}]
    }

    window.onscroll = function () {
        if (checkFlag()) {
            var cParent = document.getElementById('container');
            for (var i = 0; i < imgData.data.length; i++) {
                var cContent = document.createElement('div');
                cContent.className = 'box';
                cParent.appendChild(cContent);
                var boxImg = document.createElement('div');
                boxImg.className = 'box_img';
                cContent.appendChild(boxImg);
                var img = document.createElement('img');
                img.src = 'images/' + imgData.data[i].src;
                boxImg.appendChild(img);
            }
            imgLocation('container', 'box');
        }
    }
}

/** 判读如果*/
function checkFlag() {
    var cParent = document.getElementById('container');
    var cContent = getChildElement(cParent, 'box');
    var lastContentHeight = cContent[cContent.length - 1].offsetTop;
    // console.log(lastContentHeight);
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // console.log(scrollTop);
    var pageHeight = document.documentElement.clientHeight || document.body.clientHeight;
    // console.log(lastContentHeight+"/"+scrollTop+"/"+pageHeight)
    if (lastContentHeight < (scrollTop + pageHeight)) {
        return true;
    }
}

function imgLocation(parent, content) {
    /*将父级空间parent下所有的content全部取出*/
    var cParent = document.getElementById(parent);  //得到父级控件
    var cContent = getChildElement(cParent, content);   //得到cParent中className为content的所有元素(也就是放图片img,className为'box'的所有div)
    var imgWidth = cContent[0].offsetWidth;  //注意:此时cContent中存放的是className为'box'的div元素,所以imgWidth实为图片加div边框的宽度
    var winWidth = document.documentElement.clientWidth;    //得到浏览器宽度
    var cols = Math.floor(winWidth / imgWidth);     //Math.floor舍去小数部分//得到一行图片的最大个数
    /**
     * 设置父级控件的cssText;
     * 固定父级控件宽度为一行图片的宽度;
     * 设置外边距上下为0,左右自适应,可以实现父级控件中内容居中效果
     * */
    cParent.style.cssText = 'width:' + imgWidth * cols + 'px;margin:0 auto';

    var boxHeightArr = []; //存放图片高度
    for (var i = 0; i < cContent.length; i++) {
        if (i < cols) {
            boxHeightArr[i] = cContent[i].offsetHeight;
        } else {
            var minHeight = Math.min.apply(null, boxHeightArr);  //得到数组最小值//图片最小高度
            var minIndex = getMinHeightLocation(boxHeightArr, minHeight);   //得到高度最小图片的位置(在数组中的位置)
            // console.log(cContent[i]);
            cContent[i].style.position = 'absolute';     //设置绝对布局
            cContent[i].style.top = minHeight + 'px';       //设置第二行第一个图片top(距离浏览器窗口顶部的距离)
            cContent[i].style.left = cContent[minIndex].offsetLeft + 'px';  //设置第二行第一个图片的left(距离浏览器窗口左边的距离)
            boxHeightArr[minIndex] += cContent[i].offsetHeight;
            /** 重新设置最小图片的高度;最小高度+当前加载的图片的高度*/
        }
    }

}
/**
 * 得到最小高度图片的位置
 * */
function getMinHeightLocation(boxHeightArr, minHeight) {
    for (var i in boxHeightArr) {
        if (boxHeightArr[i] == minHeight) {
            // console.log(i);
            return i;
        }
    }
}
/**
 * 得到cParent中className为content的所有元素
 * */
function getChildElement(parent, content) {
    var contentArr = [];
    var allContent = parent.getElementsByTagName("*");  //得到父级控件中所有内容
    for (var i = 0; i < allContent.length; i++) {
        if (allContent[i].className == content) {   //如果父级控件中控件className内容为'box'
            contentArr.push(allContent[i]);   //push向数组末尾追加内容//将className为'box'的元素放入数组
        }
    }
    return contentArr;
}


/*控制top按钮*/
function topButton() {
    var tb = document.getElementById('pTop');
    var w = (document.documentElement.clientWidth || document.body.clientWidth) - 100;
    var h = (document.documentElement.clientHeight || document.body.clientHeight) -100;
    console.log(w+"/"+h);
    tb.style.left = + w+'px';
    tb.style.top = h+'px';
    tb.style.paddingTop = (tb.offsetHeight - tb.fontSize)/2 + 'px';
    tb.addEventListener('click', gotoTop);
}
function gotoTop() {
    changeTop();
    window.scrollBy(0,-100);
    var timer=setTimeout('gotoTop()',1);
    if(document.body.scrollTop==0){
        changOver();clearTimeout(timer);
    }

}
function changeTop() {
    var tb = document.getElementById('top');
    tb.style.backgroundColor = '#fff';
    tb.style.color =  '#63c637';
}
function changOver() {
    var tb = document.getElementById('top');
    tb.style.backgroundColor = '#63c637';
    tb.style.color =  '#fff';
    
}