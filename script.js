$(window).on('mousemove', (e) => {
  let w = $(window).width();
  let h = $(window).height();

  let offsetX = 0.5 - e.pageX / w;
  let offsetY = 0.5 - e.pageY / h;

  $('.parallax').each(function (i, el) {
    let offset = parseInt($(el).data('offset'));

    let translate = 'translate3d(' + Math.round(offsetX * offset) + 'px,' + Math.round(offsetY * offset) + 'px, 0px)';

    $(el).css({
      transform: translate,
    });
  });
});
