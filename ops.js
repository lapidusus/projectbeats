const sections = $("section");
const display = $(".maincontent");

let inScroll = false;

sections.first().addClass("active");

const performTransition = (sectionEq) => {
    if (inScroll == false) {
        inScroll = true;
        const position = sectionEq * -100;

        display.css({
            transform: `translateY(${position}%)`,
        });
    
        sections.eq(sectionEq).addClass("active").siblings().removeClass("active");

        setTimeout(() => {
            inScroll = false;

        }, 1300);
    }
};

const scrollViewport = (direction) => {
    const activeSection = sections.filter(".active");
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if (direction == "next" && nextSection.length) {
        performTransition(nextSection.index());
    }

    if (direction == "prev" && prevSection.length) {
        performTransition(prevSection.index());
    }
};

$(window).on("wheel", (e) => {
    const deltaY = e.originalEvent.deltaY;

    if (deltaY > 0) {
        scrollViewport("next");
    }

    if (deltaY <0) {
        scrollViewport("prev");
    }
});

$("[data-scroll-to]").click(e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-scroll-to");
    const reqSection = $(`[data-section-id=${target}]`);

    performTransition(reqSection.index());
});