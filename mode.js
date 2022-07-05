mode = localStorage.getItem("mode")


if (mode == "night") {
    document.getElementById('theme_css')
        .href = 'night.css'
} else {
    document.getElementById('theme_css')
        .href = 'https://tuoguan.rth.app/newtab/css/day.css'
}


document.getElementById('nightbtn')
    .addEventListener('click', function() {
    document.getElementById('theme_css')
        .href = 'https://tuoguan.rth.app/newtab/css/night.css';
    localStorage.setItem("mode", "night")
})

document.getElementById('daybtn')
    .addEventListener('click', function() {
    document.getElementById('theme_css')
        .href = 'https://tuoguan.rth.app/newtab/css/day.css';
    localStorage.setItem("mode", "day")
})