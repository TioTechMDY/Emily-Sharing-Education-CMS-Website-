! function() {
    var e;
    ["scroll", "resize"].forEach((t => {
        document.addEventListener(t, (t => {
            clearTimeout(e), e = setTimeout((function() {
                ! function(e) {
                    "resize" === e.type && (document.body.classList.remove("navbar-dropdown-open"), document.querySelector(".navbar-dropdown").querySelector(".navbar-collapse").classList.remove("show"), document.querySelector(".navbar-dropdown").classList.remove("opened"), Array.from(document.querySelector(".navbar-dropdown").querySelectorAll('.navbar-toggler[aria-expanded="true"]')).forEach((e => {
                        let t = e.querySelector(e.getAttribute("data-target"));
                        t && (t.classList.remove("in"), t.setAttribute("aria-expanded", "false"), e.setAttribute("aria-expanded", "false"))
                    })));
                    let t = document.documentElement.scrollTop;
                    // Array.from(document.querySelectorAll(".navbar-dropdown")).forEach((e => { e.matches(".navbar-fixed-top") && (e.matches(".transparent") && !e.classList.contains("opened") && (t > 0 ? e.classList.remove("bg-color") : e.classList.add("bg-color")), t > 0 ? e.classList.add("navbar-short") : e.classList.remove("navbar-short")) }))

                    Array.from(document.querySelectorAll(".navbar-dropdown")).forEach((e => { e.matches(".navbar-fixed-top") && (e.matches(".transparent") && !e.classList.contains("opened") && (t > 0 ? e.classList.remove("bg-color") : e.classList.add("bg-color")), t > 0 ? e.classList.add(" ") : e.classList.remove(" ")) }))
                }(t)
            }), 10)
        }))
    }));
    ["show.bs.collapse", "hide.bs.collapse"].forEach((e => {
        document.addEventListener(e, (({ target: t }) => {
            const o = t.closest(".navbar-dropdown");
            o && ("show.bs.collapse" === e ? (document.body.classList.add("navbar-dropdown-open"), o.classList.add("opened")) : (document.body.classList.remove("navbar-dropdown-open"), o.classList.remove("opened"), window.dispatchEvent(new Event("scroll.bs.navbar-dropdown.data-api")), o.dispatchEvent(new Event("collapse.bs.navbar-dropdown"))))
        }))
    }));
    document.querySelector("html").classList.contains("is-builder") || document.addEventListener("click", (function(e) {
        const t = e.target;
        if (t.classList.contains("nav-link") || t.parentNode.classList.contains("nav-link")) return;
        const o = document.querySelector("#navbarSupportedContent"),
            a = document.querySelector(".navbar-dropdown"),
            n = o.classList.contains("show"),
            r = t.closest(".nav-item a:not(.dropdown-toggle)"),
            s = a.classList.contains("collapsed");
        (window.matchMedia("(max-width: 991px)").matches || s) && (n && !t.closest(".navbar-collapse") || r) && new bootstrap.Collapse(o)
    })), document.addEventListener("collapse.bs.nav-dropdown", (e => {
        let t = e.relatedTarget.closest(".navbar-dropdown");
        if (t) {
            let e = t.querySelector('.navbar-toggler[aria-expanded="true"]');
            e && e.dispatchEvent(new Event("click"))
        }
    }));
    document.querySelectorAll(".nav-link.dropdown-toggle").forEach((e => { e.addEventListener("click", (e => { e.preventDefault(), e.target.parentNode.classList.toggle("open") })) }))
}();