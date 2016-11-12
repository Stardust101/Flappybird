function Pipe(x, speed, imgUp, imgDown, ctx) {
    /*
    1.位置：两个属性来决定的
        x : x轴的坐标
        upPipeHeight ：上面的管子露出来的高度。得到了它，就都能得到所有管子要绘制的y轴坐标。这个值要随机获取。
        speed ： 管子移动的速度。
        ……
     */
    this.x = x;
    this.speed = speed;
    this.imgUp = imgUp;
    this.imgDown = imgDown;
    this.ctx = ctx;
    this.upPipeHeight = Math.random() * 200 + 100;  // 要求一个100~300之间的随机数
}

Pipe.prototype.setGapAndCount = function (gap, count) { // 间隙和个数，因为管子不能一个挨一个的放
    Pipe.gap = gap;
    Pipe.count = count;
};

// 把这一组管子绘制出来
Pipe.prototype.draw = function () {
    this.ctx.drawImage(this.imgUp,
        this.x, this.upPipeHeight - 420);
    this.ctx.drawImage(this.imgDown,
        this.x, this.upPipeHeight + 150);
};

Pipe.prototype.update = function (dt) {
    this.x = this.x + this.speed * dt; // 管子要向左边位移
    if (this.x < -52) { // 管子离开屏幕之后，要抽回到最右边
        this.x = this.x + Pipe.gap * Pipe.count; // 两个管子之间的间隔 * 管子的数目 = 需要移动的距离
        // 要求一个100~300之间的随机数，重新设置一下管子露出来的高度，因为要随机
        // 看上去像是变成了一个新的管子一样，实际上还是原来那个，只不过改了点数据。
        this.upPipeHeight = Math.random() * 200 + 100;
    }
};

Pipe.prototype.hitTest = function (x, y) { // 判断这个是不是在柱子中间，在的话就是撞上了
    return (x > this.x && x < this.x + 52)
        && (!(y > this.upPipeHeight && y < this.upPipeHeight + 150));
};