const mesureWidth = () => {
    return 500;
}

const closeEveryItemInContainer = (container) => {
    const items = container.find(".products-menu__item");
    const content = container.find(".products-menu__content");

    items.removeCLass("active");
    content.width(0);
}

const openItem = (item) => {
    const hiddenContent = item.find(".products-menu__content");
    const reqWidth = mesureWidth();

    item.addClass("active");
    hiddenContent.width(reqWidth); 
}

$(".products-menu__title").on("click", (e) => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const item = $this.closest(".products-menu__item");
    const itemOpened = item.hasClass("active");
    const container = $this.closest(".products-menu");

    if (itemOpened) {
        closeEveryItemInContainer(container)
    } else {
        openItem(item); 
    }
});