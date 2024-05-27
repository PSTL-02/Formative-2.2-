$(document).ready(function () {








        /** --------- DATEPICKER ---------- */
    // Initialize datepicker on the inputs:
    $("#start-date").datepicker({
        dateFormat: "dd-mm-yy",
        onSelect: function () {
            // run calculate function:
            const diffDays = calculateDays();
            populateResults(diffDays);
        }
    });

    $("#end-date").datepicker({
        // yy-mm-dd
        dateFormat: "dd-mm-yy",
        onSelect: function () {
            // run calculate function:
            const diffDays = calculateDays();
            populateResults(diffDays);
        }
    });

    // Calculate the difference between the two dates:
    function calculateDays() {
        const startDate = $("#start-date").datepicker("getDate");
        const endDate = $("#end-date").datepicker("getDate");

        // check if we have a start date and an end date
        if (startDate && endDate) {
            // calculate the difference:
            const timeDiff = Math.abs(endDate.getTime() - startDate.getTime()) // make sure the number is a positive number
            console.log(timeDiff);

            // 1000 milliseconds per second
            // 3600 seconds per hour
            // 24 hours in a day
            //1000 * 3600 * 24 = number of milliseconds in a day

            // timeDiff / number of millisecond in day = number of days
            // make sure number of days is a whole number - we use Math.ceil()

            const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            console.log(diffDays);

            // update number of days spans
            $("#number-of-days").text(diffDays)
            // return diffDays to make it accessable to the popluate function
            return diffDays;
        } else {
            // make sure number of days is empty:
            $("#number-of-days").text(""); // set it to empty text
        }
    }

    
    // Initialise the map
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [174.7762, -41.2865],
        zoom: 13
    });

     // Swiper
     const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },

      });
});