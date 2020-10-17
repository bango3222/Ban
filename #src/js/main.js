$(function(){
    let counter = $('.btn__quantity');


    counter.each(function () {
        let input = $(this).find(".quantity__pole")
        let minBtn = $(this).find(".quantity__btnmin")
        let plusBtn = $(this).find(".quantity__btnplas")

        plusBtn.click(function () {
            input.val(Number(input.val()) + 1)
        });
        minBtn.click(function () {
            if(Number(input.val()) > 1 ) {
                input.val(Number(input.val()) - 1)
            }
        })

        function resizeInput() {

        }



    })
});