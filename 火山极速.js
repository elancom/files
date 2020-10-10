
// threads.start(function () {
//     setInterval(() => { check_hb() }, 5 * 1000);
// });

while (true) {
    main();
    // check_hb();
    // sleep(1000);
}

function main() {
    // 随机等待
    var sleepSec = random(8, 15)
    var r = random(1, 100) // *%
    if (r <= 0) { // 2%
        sleepSec = random(30, 50)
    }
    else if (r <= 0) { // 10%
        sleepSec = random(15, 30)
    }
    else if (r >= 99) { // 2%
        sleepSec = random(2, 4)
    }
    else if (r >= 96) { // 3%
        sleepSec = random(4, 8)
    }
    toast("等待：" + sleepSec + "秒");
    for (var i = 0; i < sleepSec; i++) {
        
        sleep(1000);
    }

    toast("开始滑动完成");
    hua_dong();

    // 检查广告
    sleep(500);
    if (check_hb()) {
        hua_dong()
    }
}

// 滑动
function hua_dong() {
    swipe(device.width / 2 + random(-100, 100), device.height * 0.8, device.width / 2 + random(-100, 100), device.height * 0.02, random(800, 1000));
}

// 红包检查
function check_hb() {
    // 查找广告字眼
    if (className("TextView").textContains("广告").exists()) {
        toastLog("跳过广告")
        return true;
    }
    return false;
}
