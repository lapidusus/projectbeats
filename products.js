const mesureWidth = () => {
    return 500;
};

const closeEveryItemInContainer = (container) => {
    const items = container.find(".products-menu__item");
    const content = container.find(".products-menu__content");

    items.removeClass("active");
    content.width(0);
};

const openItem = (item) => {
    const hiddenContent = item.find(".products-menu__content");
    const reqWidth = mesureWidth();

    item.addClass("active");
    hiddenContent.width(reqWidth); 
};

$(".products-menu__title1, .products-menu__title2, .products-menu__title3").on("click", (e) => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const item = $this.closest(".products-menu__item");
    const itemOpened = item.hasClass("active");
    const container = $this.closest(".products-menu");

    if (itemOpened) {
        closeEveryItemInContainer(container)
    } else {
        closeEveryItemInContainer(container)
        openItem(item);     
    }
});


$(".products-menu__close").on("click", e => {
    e.preventDefault();

    closeEveryItemInContainer($('.products-menu'));
})