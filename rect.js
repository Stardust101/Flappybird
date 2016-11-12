// 矩形的构造函数
function Rect(x, y, w, h, sColor, lineWidth, fColor,speed) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.sColor = sColor;
    this.lineWidth = lineWidth;
    this.fColor = fColor;
    this.speed = speed;
}
// 矩形的绘制和更新
Rect.prototype.draw = function () {
    ctx.fillStyle = this.fColor;
    ctx.strokeStyle = this.sColor;
    ctx.lineWidth = this.lineWidth;
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.strokeRect(this.x, this.y, this.w, this.h);
};
Rect.prototype.update = function (dt) {
    // 根据间隔时间来算位置
    var s = this.speed * dt; // 路程 = 速度 x 时间
    this.x = this.x + s;  // 新的位置 = 旧的位置 + 路程
};