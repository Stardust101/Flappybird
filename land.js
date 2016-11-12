// 一个显示对象应该分成三个部分：数据、绘制、更新

function Land(x, speed, img, ctx) {
    /*
     * 数据有：
     * x 天空的x轴坐标
     * speed 速度
     * img，ctx
     */
    this.x = x;
    this.speed = speed;
    this.img = img;
    this.ctx = ctx;
}

// 用户调用这个函数，来设置天空的片数，用于计算左边的天空如何抽回到右边去
Land.prototype.setCount = function (count) {
    Land.count = count;
};


Land.prototype.draw = function () {
    ctx.drawImage(this.img, this.x, 488);
};

Land.prototype.update = function (dt) {
    this.x = this.x + this.speed * dt;
    if (this.x < -336) { // 如果大地从左边移出了屏幕，则抽到右边去
        this.x = this.x + 336 * Land.count;
    }
};