


// 第一个参数：存储了图片的路径
// 第二个参数：主函数，这个函数会接受我们创建好的图片标签
function loadImages(imgUrls, callback) {
    // 加载的计数器
    var count = imgUrls.length; // 设置它的值为图片的数量
    // 一个对象，用于存储我们创建出来的图片标签
    var imgEls = {};
    for (var i = 0; i < imgUrls.length; i++) {
        var imgEl = new Image(); // 创建图片标签
        imgEl.src = imgUrls[i].path; // 设置图片的资源路径，让图片标签开始加载资源
        var name = imgUrls[i].name; // 图片的名字
        imgEls[name] = imgEl;
        imgEl.addEventListener('load', function () { // 监听load事件
            count--; // 有一张图片已经加载完了，所以计数器减一
            if (count == 0) { // 代表所有图片已经加载完了
                // 我们图片加载完成之后要传出去，因为是异步的所以不能return，只好用callback传递数值
                callback(imgEls) ;
            }
        })
    }
}
