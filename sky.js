// 一个显示对象应该分成三个部分：数据、绘制、更新

function Sky(x, speed, img, ctx) {
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
Sky.prototype.setCount = function (count) {
    Sky.count = count;
};


Sky.prototype.draw = function () {
    ctx.drawImage(this.img, this.x, 0);
};

Sky.prototype.update = function (dt) {
    this.x = this.x + this.speed * dt;
    if (this.x < -800) { // 如果天空从左边移出了屏幕，则抽到右边去
        this.x = this.x +  800 * Sky.count;
        //this.x = 800; // 不能这些，因为定时器不稳定，不一定能够达到正好的-800
    }

};