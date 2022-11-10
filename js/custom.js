let imgList = [];
let elList = {};

let imgUl = {};
let currImg = '';
let imgViewer = '';
let container = {};
let mask = {};

function getImgList() {
    elList = $('.post__content').find('img');
    imgUl = $('#img-viewer-container .img-list');
    imgViewer = $('#img-viewer-container .img-viewer');
    for (let item of elList) {
        imgList.push(item.src);
    }
}

function bindActions() {

    mask = $('.img-viewer-mask');
    container = $('#img-viewer-container');
    elList.each(function() {

        const target = $(this)[0].src;
        const index = imgList.indexOf(target);
        const targetClass = 'post-img-' + index;
        imgUl.append(`<li class="viewer-img-item ${targetClass}"><img src="${$(this)[0].src}"></li>`);
        $(this).click(function() {

            currImg = targetClass;
            $(`.${targetClass}`).eq(0).css('display', 'block');
            showViewer();

        });
    });
    mask.click(function() {
        hideViewer();
    });
}

function showViewer() {

    container.css('display', 'block');
    imgViewer.css('display', 'block');
    mask.css('display', 'block');
    $(`.${currImg}`).css('display', 'block');

}

function hideViewer() {

    container.css('display', 'none');
    imgViewer.css('display', 'none');
    mask.css('display', 'none');
    $(`.${currImg}`).css('display', 'none');
}

function init() {

    getImgList();
    bindActions();
}

init();
