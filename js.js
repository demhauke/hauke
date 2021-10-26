
//    function timeRefresh(time) {
//    setTimeout("location.reload(true);", time);
//    }

function change_discord() {
    document.getElementById("button_id").innerHTML = 'Discord';
}

function copy_discord() {
    document.getElementById("button_id").innerHTML = 'kopiert!';
    navigator.clipboard.writeText('dem Hauke#5791');
    setTimeout(change_discord, 800)  
}


"use strict";
window.bubbly = function(t) {
    var n = t || {}
      , o = function() {
        return Math.random()
    }
      , r = n.canvas || document.createElement("canvas")
      , e = r.width
      , a = r.height;
    null === r.parentNode && (r.setAttribute("style", "position:fixed;z-index:-1;left:0;top:0;min-width:100vw;min-height:100vh;"),
    e = r.width = window.innerWidth,
    a = r.height = window.innerHeight,
    document.body.appendChild(r));
    var i = r.getContext("2d");
    i.shadowColor = n.shadowColor || "#fff",
    i.shadowBlur = n.blur || 4;
    var l = i.createLinearGradient(0, 0, e, a);
    l.addColorStop(0, n.colorStart || "#2AE"),
    l.addColorStop(1, n.colorStop || "#17B");
    for (var c = n.bubbles || Math.floor(.02 * (e + a)), u = [], d = 0; d < c; d++)
        u.push({
            f: (n.bubbleFunc || function() {
                return "hsla(0, 0%, 100%, " + .1 * o() + ")"
            }
            ).call(),
            x: o() * e,
            y: o() * a,
            r: (n.radiusFunc || function() {
                return 4 + o() * e / 25
            }
            ).call(),
            a: (n.angleFunc || function() {
                return o() * Math.PI * 2
            }
            ).call(),
            v: (n.velocityFunc || function() {
                return .1 + .5 * o()
            }
            ).call()
        });
    !function t() {
        if (null === r.parentNode)
            return cancelAnimationFrame(t);
        !1 !== n.animate && requestAnimationFrame(t),
        i.globalCompositeOperation = "source-over",
        i.fillStyle = l,
        i.fillRect(0, 0, e, a),
        i.globalCompositeOperation = n.compose || "lighter",
        u.forEach(function(t) {
            i.beginPath(),
            i.arc(t.x, t.y, t.r, 0, 2 * Math.PI),
            i.fillStyle = t.f,
            i.fill(),
            t.x += Math.cos(t.a) * t.v,
            t.y += Math.sin(t.a) * t.v,
            t.x - t.r > e && (t.x = -t.r),
            t.x + t.r < 0 && (t.x = e + t.r),
            t.y - t.r > a && (t.y = -t.r),
            t.y + t.r < 0 && (t.y = a + t.r)
        })
    }()
}
;
bubbly({
    animate: true, // default is true
    blur: 1, // default is 4
    bubbleFunc: () => `hsla(${Math.random() * 360}, 100%, 50%, ${Math.random() * 0.25})`, // default is () => `hsla(0, 0%, 100%, ${r() * 0.1})`)
    bubbles: 70, // default is Math.floor((canvas.width + canvas.height) * 0.02);
    canvas: document.querySelector("#background"), // default is created and attached
    colorStart: "#bf00ff", // default is blue-ish
    colorStop: "#ff0000", // default is blue-ish
    compose: "lighter", // default is "lighter"
    shadowColor: "#fff", // default is #fff
    angleFunc: () => Math.random() * Math.PI * 2, // default is this
    velocityFunc: () => 0.15 + Math.random() * 0.01, // default is this
    radiusFunc: () => 4 + Math.random() * 20 // default is 4 + Math.random() * width / 25
});