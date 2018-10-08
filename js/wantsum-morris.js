$(document).ready(function () {
    var items = $('#footerCarousel .carousel-item');

    if (items.length) {
        function normalizeHeights() {
            var heights = [];
            items.each(function () {
                heights.push($(this).height());
            });
            var tallest = Math.max.apply(null, heights);
            items.each(function () {
                $(this).css('height', tallest + 'px');
            });
        }

        function resetHeights() {
            items.each(function () {
                $(this).css('height', 'auto');
            });
            normalizeHeights();
        }

        console.debug("Calling normalizeHeights for document ready event");
        normalizeHeights();

        var $images = $('#footerCarousel .carousel-item img');
        $images.on('load', function () {
            $image = $(this);
            console.debug("Received load event for image. Recalculating heights.");
            console.debug($image);
            resetHeights();
        });

        $(window).on('resize orientationchange', function () {
            console.debug("Orientation or resize. Recalculating heights.");
            resetHeights();
        });
    }
});
