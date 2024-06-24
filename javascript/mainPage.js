// 슬라이드 바
$(document).ready(function () {
  $(".slideContentWrapper").each(function () {
    let $wrapper = $(this);
    let $contentSlider = $wrapper.find(".contentBoxs");
    let $leftButton = $wrapper.find("#leftButton");
    let $rightButton = $wrapper.find("#rightButton");
    let currentIndex = 0;
    let slideWidth = $wrapper.width();

    function slide() {
      let translateValue = -slideWidth * currentIndex + "px";
      $contentSlider.css("transform", `translateX(${translateValue})`);
    }

    $leftButton.on("click", function () {
      if (currentIndex > 0) {
        currentIndex--;
        slide();
      }
    });

    $rightButton.on("click", function () {
      let maxIndex = Math.ceil($contentSlider[0].scrollWidth / slideWidth) - 1;
      if (currentIndex < maxIndex) {
        currentIndex++;
        slide();
      }
    });
  });
});

// 카테고리 바

$("#showCategoryBar").on("click", function(){
  console.log("ddd")
  if ($(".categoryBar").css("display") == "none"){
    $(".categoryBar").slideDown(200);
  } else {
    $(".categoryBar").slideUp(200);
  }
})

// 무한 슬라이드
$(function(){
    var $slides = $(this).find('li');
    const $contentSlider = $(".infinitySlider > ul");
    const slideCount = $slides.length;
    let currentIndex = 0;
    const slideWidth = 1280;
    
    setInterval(showNextSlide, 2000);

    function showNextSlide() {
        var nextIndex = (currentIndex + 1) % slideCount;
  
        let translateValue = -slideWidth * currentIndex + "px";
        $contentSlider.css("transform", `translateX(${translateValue})`);
        currentIndex = nextIndex;
      }
  })
  
  


