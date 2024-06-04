$.fn.circleType = function (a) {
    var b = { dir: 1, position: 'relative' };
    if (typeof $.fn.lettering !== 'function') {
        console.log('Lettering.js is required');
        return;
    }
    return this.each(function () {
        if (a) {
            $.extend(b, a);
        }
        var f = this,
            e = 180 / Math.PI,
            d = parseInt($(f).css('line-height'), 10),
            g = parseInt($(f).css('font-size'), 10),
            k = f.innerHTML.replace(/^\s+|\s+$/g, '').replace(/\s/g, '&nbsp;'),
            j,
            c;
        f.innerHTML = k;
        $(f).lettering();
        f.style.position = b.position;
        j = f.getElementsByTagName('span');
        c = Math.floor(j.length / 2);
        var i = function () {
            var w = 0,
                m,
                q = 0,
                p,
                s,
                n,
                o,
                u,
                t,
                v;
            for (m = 0; m < j.length; m++) {
                w += j[m].offsetWidth;
            }
            p = w / Math.PI / 2 + d;
            if (b.fluid && !b.fitText) {
                b.radius = Math.max(f.offsetWidth / 2, p);
            } else {
                if (!b.radius) {
                    b.radius = p;
                }
            }
            if (b.dir === -1) {
                s = 'center ' + (-b.radius + d) / g + 'em';
            } else {
                s = 'center ' + b.radius / g + 'em';
            }
            n = b.radius - d;
            for (m = 0; m < j.length; m++) {
                o = j[m];
                q += (o.offsetWidth / 2 / n) * e;
                o.rot = q;
                q += (o.offsetWidth / 2 / n) * e;
            }
            for (m = 0; m < j.length; m++) {
                o = j[m];
                u = o.style;
                t = (-q * b.dir) / 2 + o.rot * b.dir;
                v = 'rotate(' + t + 'deg)';
                u.position = 'absolute';
                u.left = '50%';
                u.marginLeft = -(o.offsetWidth / 2) / g + 'em';
                u.webkitTransform = v;
                u.MozTransform = v;
                u.OTransform = v;
                u.msTransform = v;
                u.transform = v;
                u.webkitTransformOrigin = s;
                u.MozTransformOrigin = s;
                u.OTransformOrigin = s;
                u.msTransformOrigin = s;
                u.transformOrigin = s;
                if (b.dir === -1) {
                    u.bottom = 0;
                }
            }
            if (b.fitText) {
                if (typeof $.fn.fitText !== 'function') {
                    console.log('FitText.js is required when using the fitText option');
                } else {
                    $(f).fitText();
                    $(window).resize(function () {
                        l();
                    });
                }
            }
            l();
        };
        var h = function (o) {
            var n = document.documentElement,
                m = o.getBoundingClientRect();
            return {
                top: m.top + window.pageYOffset - n.clientTop,
                left: m.left + window.pageXOffset - n.clientLeft,
                height: m.height,
            };
        };
        var l = function () {
            var o = h(j[c]),
                m = h(j[0]),
                n;
            if (o.top < m.top) {
                n = m.top - o.top + m.height;
            } else {
                n = o.top - m.top + m.height;
            }
            f.style.height = n + 'px';
        };
        if (b.fluid && !b.fitText) {
            $(window).resize(function () {
                i();
            });
        }
        if (document.readyState !== 'complete') {
            f.style.visibility = 'hidden';
            $(window).load(function () {
                f.style.visibility = 'visible';
                i();
            });
        } else {
            i();
        }
    });
};
