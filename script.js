function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString('zh-CN', { hour12: false });
    document.getElementById('time').textContent = time;
}

setInterval(updateTime, 1000);