document.addEventListener('DOMContentLoaded', function(e) {
    // TODO: Alarmに変更する
    reloadIcon();
    setInterval(function() {
        reloadIcon();
    }, 1000 * 10);
});
