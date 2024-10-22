function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}
locomotiveAnimation();

document.addEventListener("mousemove", function (e) {
    const cursorText = document.getElementById("cursor-text");

    // Set the position of the text slightly offset from the cursor
    const offset = 5; // You can adjust this offset to your preference
    cursorText.style.left = (e.clientX + offset) + "px";
    cursorText.style.top = (e.clientY + offset) + "px";
});

document.querySelector("#moving-div").addEventListener("mouseenter", function () {
    document.getElementById("cursor-text").style.display = "block";
});

document.querySelector("#moving-div").addEventListener("mouseleave", function () {
    document.getElementById("cursor-text").style.display = "none";
});

window.onload = function() {
    // Hide the loading overlay
    document.getElementById("loading-overlay").style.display = "none";
};
