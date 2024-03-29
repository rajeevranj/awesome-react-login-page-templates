function notWorking() {
    let items = $(".output-slider_slide");
    let wrap = $(".output-slider");
    let totalItems = items.length / 2 + 1;
    let duration = totalItems * 3.2;
    function makeItemActive(myIndex) {
      items.removeClass("active");
      $(".output-slider_list").each(function (index) {
        $(this).find(".output-slider_slide").eq(myIndex).addClass("active");
      });
    }
    makeItemActive(3);
    function checkPosition() {
      let wrapCenter = wrap.offset().top + wrap.height() / 2;
      items.each(function (index) {
        let itemHeight = $(this).height() / 2;
        let offsetTop = $(this).offset().top + itemHeight;
        if (
          offsetTop < wrapCenter + itemHeight / 2 &&
          offsetTop > wrapCenter
        ) {
          let myIndex = $(this).index();
          makeItemActive(myIndex);
        }
      });
    }
    let marquee = gsap.timeline({ repeat: -1 }).fromTo(
      ".output-slider_track",
      { yPercent: 0 },
      {
        yPercent: -50,
        duration: duration,
        ease: "none",
        onUpdate: () => {
          checkPosition();
        },
      }
    );
  }
  setTimeout(() => {
    console.log("working fine now ! ");
    notWorking();
  }, 5000);