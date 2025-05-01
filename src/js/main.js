$(document).ready(function() {
    //слайдер
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        spaceBetween: 500,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      });
    // табы с описанием
    const $tabs = $(".yacht-descrption__tab");
    if($tabs.length > 0){
        const $displays = $(".yacht-descrption__display");
        $tabs.each(function(){
            $(this).on("click", function(){
                $tabs.each(function(){
                    $(this).removeClass("tab-active");
                });
                $displays.each(function(){
                    $(this).removeClass("display-active");
                })
                $(this).addClass("tab-active");
                $(`.${$(this).data('display')}`).addClass("display-active")
            })
        })
    }
    //faq
    $questions = $(".services__item");
    if($questions.length > 0){
      $questions.each(function(){
          $(this).on("click", function(){
            if(!$(this).hasClass(".services__item-active")){
              $currenItem = $(this);
              $questions.each(function(){
                if($(this)[0] !==  $currenItem[0]){
                  $(this).removeClass("services__item-active")
                  $(this).find(".services__item-plus").text("+")
                }
              })
            }
            $plus = $(this).find(".services__item-plus")
            $(this).toggleClass("services__item-active");
            if($plus.text() == "-"){
              $plus.text("+")
            }else{
              $plus.text("-")
            }

          })
      })
    }
    // const $faqItems= $(".faq__item");
    // if($faqItems.length>0){
    //     $faqItems.each(function(){
    //         $(this).on("click",function(){
    //             $faqItems.each(function(){
    //                 $(this).find(".faq__answer").slideUp("slow")

    //             })
    //             $(this).find(".faq__answer").slideDown("slow")
    //         })
    //     })
    // }

})