
function clock(t) {
    
    var step = 1,//计数动画次数
        num = 0,//计数倒计时秒数（n - num）
        start = -0.5 * Math.PI,// 开始的弧度
        end = 1.5 * Math.PI,// 结束的弧度
        time = null;// 计时器容器

    var   n = 5; // 当前倒计时
    // 动画函数
    function animation() {
        if (step <= n) {
            end = end + 2 * Math.PI / n;
            ringMove(start, end);
            step++;
        } else {
            clearInterval(time);
        }
    };
    // 画布绘画函数
    function ringMove(s, e) {
        var context = wx.createCanvasContext('round')

        var gradient = context.createLinearGradient(200, 100, 100, 200);
        gradient.addColorStop("0", "#2661DD");
        gradient.addColorStop("0.5", "#40ED94");
        gradient.addColorStop("1.0", "#5956CC");

        // 绘制圆环
        context.setStrokeStyle('white')
        context.beginPath()
        context.setLineWidth(3)
        context.arc(150, 150, 130, s, e, true)
        context.stroke()
        context.closePath()

        var minute = parseInt((n - num) / 60)
        if (minute < 10) {
            minute = "0" + minute
        }
        var seconds = (n - num) % 60
        if (seconds < 10) {
            seconds = "0" + seconds
        }
        // 绘制倒计时文本

        context.beginPath()
        context.setLineWidth(1)
        context.setFontSize(40)
        context.setFillStyle('#ffffff')
        context.setTextAlign('center')
        context.setTextBaseline('middle')
        context.fillText(minute + ":" + seconds, 150, 150, 100)
        context.fill()
        context.closePath()

        context.draw()

        // 每完成一次全程绘制就+1
        num++;
    }
    // 倒计时前先绘制整圆的圆环
    ringMove(start, end);
    // 创建倒计时
    time = setInterval(animation,1000);

}
module.exports = {
    clock:clock
}