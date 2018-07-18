//$(document).ready(function(){

    var start_stop_status = "stop";

self.onInit = function() {
    //console.log(self.ctx.defaultSubscription.data)
    //self.ctx.$scope.data = self.ctx.defaultSubscription.data;
    self.ctx.$scope.data =  array();

    $(".bg_load").fadeOut(2000);

    showAutoData();

    self.onResize();
}


    $(document).on('click', '#auto', function(e) {
        auto();
    });

    $(document).on('click', '#on_off', function(e) {
        on_off();
    });

    $(document).on('click', '#batch', function(e) {
        batch();
    });

    $(document).on('click', '#prime', function(e) {
        prime();
    });

    $(document).on('click', '#chemical', function(e) {
        chemical();
    });

    $(document).on('click', '#battery', function(e) {
        battery();
    });

    $(document).on('click', '#solar', function(e) {
        solar();
    });

    $(document).on('click', '#settings', function(e) {
        settings();
    });

self.onDataUpdated = function() {
    //auto();
    // for (var i = 0; i < self.ctx.data.length; i++) {
    //     var cellData = self.ctx.data[i];
    //     if (cellData.data.length > 0) {
    //         var tvPair = cellData.data[cellData.data.length - 1];
    //     }
    // }
}

self.onResize = function() {}

self.onDestroy = function() {

}

function showAutoData() {
    $("#auto_data").show();

    $('.auto-plus').click(function(e) {
        if (start_stop_status == "stop") {
            e.stopPropagation();
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseFloat($('#quantity').text());
            // If is not undefined
            res = parseFloat(quantity) + 0.5;
            if (res <= 50) {
                $('#quantity').text("" + res);
            }
        }
        else {
            $("#msg_spn").text("Pump must be stopped to change settings");
        }
    });

    $('.auto-minus').click(function(e) {
        if (start_stop_status == "stop") {
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseFloat($('#quantity').text());
    
            // If is not undefined
            res = parseFloat(quantity) - 0.5;
    
            if (quantity > 0) {
                $('#quantity').text("" + res);
            }
        }
        else {
            $("#msg_spn").text("Pump must be stopped to change settings");
        }
    });

    $('#auto_start_btn').click(function(e) {
        //Auto
        $(this).css('background-color', '#4CAF50');
        $(this).css('color', '#ffffff');
        $("#auto_start_spn").css('color', '#ffffff');
        
        $("#auto_stop_btn").css('background-color', '#ffffff');
        $("#auto_stop_btn").css('color', '#4CAF50');
        $("#auto_stop_spn").css('color', '#4CAF50');
        //End Auto
        
        //On_off
        $("#on_off_start_btn").css('background-color', '#4CAF50');
        $("#on_off_start_btn").css('color', '#ffffff');
        $("#on_off_start_spn").css('color', '#ffffff');
        
        $("#on_off_stop_btn").css('background-color', '#ffffff');
        $("#on_off_stop_btn").css('color', '#4CAF50');
        $("#on_off_stop_spn").css('color', '#4CAF50');
        //End On_off
        
        //Batch
        $("#batch_start_btn").css('background-color', '#4CAF50');
        $("#batch_start_btn").css('color', '#ffffff');
        $("#batch_start_spn").css('color', '#ffffff');
        
        $("#batch_stop_btn").css('background-color', '#ffffff');
        $("#batch_stop_btn").css('color', '#4CAF50');
        $("#batch_stop_spn").css('color', '#4CAF50');
        //End Batch
        
        //Prime
        $("#prime_start_btn").css('background-color', '#4CAF50');
        $("#prime_start_btn").css('color', '#ffffff');
        $("#prime_start_spn").css('color', '#ffffff');
        
        $("#prime_stop_btn").css('background-color', '#ffffff');
        $("#prime_stop_btn").css('color', '#4CAF50');
        $("#prime_stop_spn").css('color', '#4CAF50');
        //End Prime
        
        start_stop_status = "start";
        $("#msg_spn").text('Pump Started');
    });
    
    $('#auto_stop_btn').click(function(e) {
        // Auto
        $(this).css('background-color', '#ff3232');
        $(this).css('color', '#ffffff');
        $("#auto_stop_spn").css('color', '#ffffff');
        
        $("#auto_start_btn").css('background-color', '#ffffff');
        $("#auto_start_btn").css('color', '#4CAF50');
        $("#auto_start_spn").css('color', '#4CAF50');
        //Auto End
        
        //On_off
        $("#on_off_stop_btn").css('background-color', '#ff3232');
        $("#on_off_stop_btn").css('color', '#ffffff');
        $("#on_off_stop_spn").css('color', '#ffffff');
        
        $("#on_off_start_btn").css('background-color', '#ffffff');
        $("#on_off_start_btn").css('color', '#4CAF50');
        $("#on_off_start_spn").css('color', '#4CAF50');
        //On_off End
        
        //Batch
        $("#batch_stop_btn").css('background-color', '#ff3232');
        $("#batch_stop_btn").css('color', '#ffffff');
        $("#batch_stop_spn").css('color', '#ffffff');
        
        $("#batch_start_btn").css('background-color', '#ffffff');
        $("#batch_start_btn").css('color', '#4CAF50');
        $("#batch_start_spn").css('color', '#4CAF50');
        //On_off End
        
        //Prime
        $("#prime_stop_btn").css('background-color', '#ff3232');
        $("#prime_stop_btn").css('color', '#ffffff');
        $("#prime_stop_spn").css('color', '#ffffff');
        
        $("#prime_start_btn").css('background-color', '#ffffff');
        $("#prime_start_btn").css('color', '#4CAF50');
        $("#prime_start_spn").css('color', '#4CAF50');
        //On_off End
        
        start_stop_status = "stop";
        $("#msg_spn").text('Pump Stoped');
    });

}

function auto() {
    $("#auto_data").show();
    $("#on_off_data").hide();
    $("#batch_data").hide();
    $("#prime_data").hide();
    $("#chemical_data").hide();
    $("#battery_data").hide();
    $("#solar_data").hide();
    $("#settings_data").hide();


    $('.auto-plus').unbind("click");
    $('.auto-minus').unbind("click");
    showAutoData();
}

function on_off() {
    $("#on_off_data").show();
    $("#auto_data").hide();
    $("#batch_data").hide();
    $("#prime_data").hide();
    $("#chemical_data").hide();
    $("#battery_data").hide();
    $("#solar_data").hide();
    $("#settings_data").hide();

    $('.on_off-plus').unbind("click");
    $('.on_off-minus').unbind("click");

    $('.on_off-plus_second').unbind("click");
    $('.on_off-minus_second').unbind("click");

    var quantitiy = 0;
    $('.on_off-plus').click(function(e) {
        if (start_stop_status == "stop") {
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($(
                '#on_off_id_value').text());
    
            // If is not undefined
            res = parseInt(quantity) + 1;
            if (res <= 999) {
                $('#on_off_id_value').text("" + res);
            }
        }
        else {
            $("#msg_spn").text("Pump must be stopped to change settings");
        }

    });

    $('.on_off-minus').click(function(e) {
        if (start_stop_status == "stop") {
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($(
                '#on_off_id_value').text());
    
            // If is not undefined
            res = parseInt(quantity) - 1;
    
            if (quantity > 0) {
                $('#on_off_id_value').text("" + res);
            }
        }
        else {
            $("#msg_spn").text("Pump must be stopped to change settings");
        }
    });

    var quantitiy = 0;
    $('.on_off-plus_second').click(function(e) {
        if (start_stop_status == "stop") {
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($(
                '#on_off_id_value_second').text());
    
            // If is not undefined
            res = parseInt(quantity) + 1;
            if (res <= 999) {
                $('#on_off_id_value_second').text("" + res);
            }
        }
        else {
            $("#msg_spn").text("Pump must be stopped to change settings");
        }
    });

    $('.on_off-minus_second').click(function(e) {
        if (start_stop_status == "stop") {
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($(
                '#on_off_id_value_second').text());
    
            // If is not undefined
            res = parseInt(quantity) - 1;
    
            if (quantity > 0) {
                $('#on_off_id_value_second').text("" +
                    res);
            }
        }
        else {
            $("#msg_spn").text("Pump must be stopped to change settings");
        }
    });
    
    $('#on_off_start_btn').click(function(e) {
        //On_off
        $(this).css('background-color', '#4CAF50');
        $(this).css('color', '#ffffff');
        $("#on_off_start_spn").css('color', '#ffffff');
        
        $("#on_off_stop_btn").css('background-color', '#ffffff');
        $("#on_off_stop_btn").css('color', '#4CAF50');
        $("#on_off_stop_spn").css('color', '#4CAF50');
        //End On_off
        
        //Auto
        $("#auto_start_btn").css('background-color', '#4CAF50');
        $("#auto_start_btn").css('color', '#ffffff');
        $("#auto_start_spn").css('color', '#ffffff');
        
        $("#auto_stop_btn").css('background-color', '#ffffff');
        $("#auto_stop_btn").css('color', '#4CAF50');
        $("#auto_stop_spn").css('color', '#4CAF50');
        //End Auto
        
        //Batch
        $("#batch_start_btn").css('background-color', '#4CAF50');
        $("#batch_start_btn").css('color', '#ffffff');
        $("#batch_start_spn").css('color', '#ffffff');
        
        $("#batch_stop_btn").css('background-color', '#ffffff');
        $("#batch_stop_btn").css('color', '#4CAF50');
        $("#batch_stop_spn").css('color', '#4CAF50');
        //End Batch
        
        //Prime
        $("#prime_start_btn").css('background-color', '#4CAF50');
        $("#prime_start_btn").css('color', '#ffffff');
        $("#prime_start_spn").css('color', '#ffffff');
        
        $("#prime_stop_btn").css('background-color', '#ffffff');
        $("#prime_stop_btn").css('color', '#4CAF50');
        $("#prime_stop_spn").css('color', '#4CAF50');
        //End Prime
        
        start_stop_status = "start";
        $("#msg_spn").text('Pump Started');
    });
    
    $('#on_off_stop_btn').click(function(e) {
        //On_off
        $(this).css('background-color', '#ff3232');
        $(this).css('color', '#ffffff');
        $("#on_off_stop_spn").css('color', '#ffffff');
        
        $("#on_off_start_btn").css('background-color', '#ffffff');
        $("#on_off_start_btn").css('color', '#4CAF50');
        $("#on_off_start_spn").css('color', '#4CAF50');
        //End On_off
        
        // Auto
        $("#auto_stop_btn").css('background-color', '#ff3232');
        $("#auto_stop_btn").css('color', '#ffffff');
        $("#auto_stop_spn").css('color', '#ffffff');
        
        $("#auto_start_btn").css('background-color', '#ffffff');
        $("#auto_start_btn").css('color', '#4CAF50');
        $("#auto_start_spn").css('color', '#4CAF50');
        //Auto End
        
        //Batch
        $("#batch_stop_btn").css('background-color', '#ff3232');
        $("#batch_stop_btn").css('color', '#ffffff');
        $("#batch_stop_spn").css('color', '#ffffff');
        
        $("#batch_start_btn").css('background-color', '#ffffff');
        $("#batch_start_btn").css('color', '#4CAF50');
        $("#batch_start_spn").css('color', '#4CAF50');
        //On_off End
        
        //Prime
        $("#prime_stop_btn").css('background-color', '#ff3232');
        $("#prime_stop_btn").css('color', '#ffffff');
        $("#prime_stop_spn").css('color', '#ffffff');
        
        $("#prime_start_btn").css('background-color', '#ffffff');
        $("#prime_start_btn").css('color', '#4CAF50');
        $("#prime_start_spn").css('color', '#4CAF50');
        //On_off End
        
        start_stop_status = "stop";
        $("#msg_spn").text('Pump Stoped');
    });
}

function batch() {
    
    $("#batch_data").show();
    $("#auto_data").hide();
    $("#on_off_data").hide();
    $("#prime_data").hide();
    $("#chemical_data").hide();
    $("#battery_data").hide();
    $("#solar_data").hide();
    $("#settings_data").hide();

    $('.batch-plus').unbind("click");
    $('.batch-minus').unbind("click");

    $('.batch-plus_second').unbind("click");
    $('.batch-minus_second').unbind("click");

    $('.month-plus').unbind("click");
    $('.month-minus').unbind("click");

    $('.day-plus').unbind("click");
    $('.day-minus').unbind("click");

    $('.year-plus').unbind("click");
    $('.year-minus').unbind("click");

    $('.min-plus').unbind("click");
    $('.min-minus').unbind("click");

    $('.second-plus').unbind("click");
    $('.second-minus').unbind("click");

    var quantitiy = 0;
    $('.batch-plus').click(function(e) {
        if (start_stop_status == "stop") {
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#batch_id_value').text());
    
            var days = parseInt($('#batch_id_value_second').text());
            
            // If is not undefined
            res = parseInt(quantity) + 1;
            var maxBatchQuarts = days * 50;
            if (res <= maxBatchQuarts) {
                $('#batch_id_value').text("" + res);
            }
        }
        else {
            $("#msg_spn").text("Pump must be stopped to change settings");
        }
    });

    $('.batch-minus').click(function(e) {
        if (start_stop_status == "stop") {
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#batch_id_value')
                .text());
    
            // If is not undefined
            res = parseInt(quantity) - 1;
    
            if (quantity > 0) {
                $('#batch_id_value').text("" + res);
            }
        }
        else {
            $("#msg_spn").text("Pump must be stopped to change settings");
        }
    });

    var quantitiy = 0;
    $('.batch-plus_second').click(function(e) {
        if (start_stop_status == "stop") {
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#batch_id_value_second').text());
    
            // If is not undefined
            res = parseInt(quantity) + 1;
            $('#batch_id_value_second').text("" + res);
        }
        else {
            $("#msg_spn").text("Pump must be stopped to change settings");
        }
    });

    $('.batch-minus_second').click(function(e) {
        if (start_stop_status == "stop") {
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#batch_id_value_second').text());
    
            // If is not undefined
            res = parseInt(quantity) - 1;
    
            if (quantity > 0) {
                $('#batch_id_value_second').text("" +
                    res);
            }
        }
        else {
            $("#msg_spn").text("Pump must be stopped to change settings");
        }
    });

    var monthsEnum = {
        "January": 1,
        "February": 2,
        "March": 3,
        "April": 4,
        "May": 5,
        "June": 6,
        "July": 7,
        "August": 8,
        "September": 9,
        "October": 10,
        "November": 11,
        "December": 12
    };

    function getMonth(month) {
        for (var prop in monthsEnum) {
            if (monthsEnum.hasOwnProperty(prop)) {
                if (monthsEnum[prop] === month)
                    return prop;
            }
        }
    }


    var month = "";
    $('.month-plus').click(function(e) {
        if (start_stop_status == "stop") {
            e.preventDefault();
            month = $('#month_id_value').text();
            var month_index = monthsEnum[month];
            next_month = parseInt(month_index) + 1;
            if (next_month <= 12) {
                res = getMonth(next_month);
                $('#month_id_value').text("" + res);
            }
        }
        else {
            $("#msg_spn").text("Pump must be stopped to change settings");
        }
    });

    $('.month-minus').click(function(e) {
        if (start_stop_status == "stop") {
            e.preventDefault();
            month = $('#month_id_value').text();
            var month_index = monthsEnum[month];
            prev_month = parseInt(month_index) - 1;
            if (prev_month > 0) {
                res = getMonth(prev_month);
                $('#month_id_value').text("" + res);
            }
        }
        else {
            $("#msg_spn").text("Pump must be stopped to change settings");
        }
    });


    $('.day-plus').click(function(e) {
        if (start_stop_status == "stop") {
            e.preventDefault();
            day = $('#day_id_value').text();
            next_day = parseInt(day) + 1;
            if (next_day <= 31) {
                if (next_day <= 9) {
                    $('#day_id_value').text("0" + next_day);
                }
                else {
                   $('#day_id_value').text("" + next_day);
                }
            }
        }
        else {
            $("#msg_spn").text("Pump must be stopped to change settings");
        }
    });

    $('.day-minus').click(function(e) {
        if (start_stop_status == "stop") {
            e.preventDefault();
            day = $('#day_id_value').text();
            prev_day = parseInt(day) - 1;
            if (prev_day > 0) {
                if (prev_day <= 9) {
                    $('#day_id_value').text("0" + prev_day);
                }
                else {
                    $('#day_id_value').text("" + prev_day);
                }
            }
        }
        else {
            $("#msg_spn").text("Pump must be stopped to change settings");
        }
    });

    $('.year-plus').click(function(e) {
        if (start_stop_status == "stop") {
            e.preventDefault();
            year = $('#year_id_value').text();
            next_year = parseInt(year) + 1;
            if (next_year <= 2050) {
                $('#year_id_value').text("" + next_year);
            }
        }
        else {
            $("#msg_spn").text("Pump must be stopped to change settings");
        }
    });

    $('.year-minus').click(function(e) {
        if (start_stop_status == "stop") {
            e.preventDefault();
            year = $('#year_id_value').text();
            prev_year = parseInt(year) - 1;
            if (prev_year > 1900) {
                $('#year_id_value').text("" + prev_year);
            }
        }
        else {
            $("#msg_spn").text("Pump must be stopped to change settings");
        }
    });

    $('.min-plus').click(function(e) {
        if (start_stop_status == "stop") {
            e.preventDefault();
            min = $('#min_id_value').text();
            //var min = res.substring(0, 1);
            next_min = parseInt(min) + 1;
            
            if (next_min <= 24) {
                if (next_min <= 9) {
                    $('#min_id_value').text("0" + next_min);
                }
                else {
                    $('#min_id_value').text("" + next_min);
                }
            }
        }
        else {
            $("#msg_spn").text("Pump must be stopped to change settings");
        }
    });

    $('.min-minus').click(function(e) {
        if (start_stop_status == "stop") {
            e.preventDefault();
            min = $('#min_id_value').text();
            prev_min = parseInt(min) - 1;
            if (prev_min > 0) {
                if (prev_min <= 9) {
                    $('#min_id_value').text("0" + prev_min);
                }
                else {
                    $('#min_id_value').text("" + prev_min);
                }
            }
        }
        else {
            $("#msg_spn").text("Pump must be stopped to change settings");
        }
    });

    $('.second-plus').click(function(e) {
        if (start_stop_status == "stop") {
            e.preventDefault();
            min = $('#second_id_value').text();
            //var min = res.substring(0, 1);
            next_min = parseInt(min) + 1;
            if (next_min <= 60) {
                if (next_min <= 9) {
                    $('#second_id_value').text("0" + next_min);
                }
                else {
                    $('#second_id_value').text("" + next_min);
                }
            }
        }
        else {
            $("#msg_spn").text("Pump must be stopped to change settings");
        }
    });

    $('.second-minus').click(function(e) {
        if (start_stop_status == "stop") {
            e.preventDefault();
            min = $('#second_id_value').text();
            prev_min = parseInt(min) - 1;
            if (prev_min > 0) {
                if (prev_min <= 9) {
                    $('#second_id_value').text("0" + prev_min);
                }
                else {
                    $('#second_id_value').text("" + prev_min);
                }
            }
        }
        else {
            $("#msg_spn").text("Pump must be stopped to change settings");
        }
    });
    
    $('#batch_start_btn').click(function(e) {
        //Batch
        $(this).css('background-color', '#4CAF50');
        $(this).css('color', '#ffffff');
        $("#batch_start_spn").css('color', '#ffffff');
        
        $("#batch_stop_btn").css('background-color', '#ffffff');
        $("#batch_stop_btn").css('color', '#4CAF50');
        $("#batch_stop_spn").css('color', '#4CAF50');
        //End Batch
        
        //Auto
        $("#auto_start_btn").css('background-color', '#4CAF50');
        $("#auto_start_btn").css('color', '#ffffff');
        $("#auto_start_spn").css('color', '#ffffff');
        
        $("#auto_stop_btn").css('background-color', '#ffffff');
        $("#auto_stop_btn").css('color', '#4CAF50');
        $("#auto_stop_spn").css('color', '#4CAF50');
        //End Auto
        
        //On_off
        $("#on_off_start_btn").css('background-color', '#4CAF50');
        $("#on_off_start_btn").css('color', '#ffffff');
        $("#on_off_start_spn").css('color', '#ffffff');
        
        $("#on_off_stop_btn").css('background-color', '#ffffff');
        $("#on_off_stop_btn").css('color', '#4CAF50');
        $("#on_off_stop_spn").css('color', '#4CAF50');
        //End On_off
        
        //Prime
        $("#prime_start_btn").css('background-color', '#4CAF50');
        $("#prime_start_btn").css('color', '#ffffff');
        $("#prime_start_spn").css('color', '#ffffff');
        
        $("#prime_stop_btn").css('background-color', '#ffffff');
        $("#prime_stop_btn").css('color', '#4CAF50');
        $("#prime_stop_spn").css('color', '#4CAF50');
        //End Prime
        
        start_stop_status = "start";
        $("#msg_spn").text('Pump Started');
    });
    
    $('#batch_stop_btn').click(function(e) {
        //Batch
        $(this).css('background-color', '#ff3232');
        $(this).css('color', '#ffffff');
        $("#batch_stop_spn").css('color', '#ffffff');
        
        $("#batch_start_btn").css('background-color', '#ffffff');
        $("#batch_start_btn").css('color', '#4CAF50');
        $("#batch_start_spn").css('color', '#4CAF50');
        //Batch End
        
        //Atuo
        $("#auto_stop_btn").css('background-color', '#ff3232');
        $("#auto_stop_btn").css('color', '#ffffff');
        $("#auto_stop_spn").css('color', '#ffffff');
        
        $("#auto_start_btn").css('background-color', '#ffffff');
        $("#auto_start_btn").css('color', '#4CAF50');
        $("#auto_start_spn").css('color', '#4CAF50');
        //Auto End
        
        //On_off
        $("#on_off_stop_btn").css('background-color', '#ff3232');
        $("#on_off_stop_btn").css('color', '#ffffff');
        $("#on_off_stop_spn").css('color', '#ffffff');
        
        $("#on_off_start_btn").css('background-color', '#ffffff');
        $("#on_off_start_btn").css('color', '#4CAF50');
        $("#on_off_start_spn").css('color', '#4CAF50');
        //On_off End
        
        //Prime
        $("#prime_stop_btn").css('background-color', '#ff3232');
        $("#prime_stop_btn").css('color', '#ffffff');
        $("#prime_stop_spn").css('color', '#ffffff');
        
        $("#prime_start_btn").css('background-color', '#ffffff');
        $("#prime_start_btn").css('color', '#4CAF50');
        $("#prime_start_spn").css('color', '#4CAF50');
        //On_off End
        
        start_stop_status = "stop";
        $("#msg_spn").text('Pump Stoped');
    });
}

function prime() {
    $("#prime_data").show();
    $("#auto_data").hide();
    $("#on_off_data").hide();
    $("#batch_data").hide();
    $("#chemical_data").hide();
    $("#battery_data").hide();
    $("#solar_data").hide();
    $("#settings_data").hide();

    $('.prime-plus').unbind("click");
    $('.prime-minus').unbind("click");

    $('.prime-plus').click(function(e) {
        if (start_stop_status == "stop") {
            e.stopPropagation();
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#prime_id_value')
                .text());
            // If is not undefined
            res = parseInt(quantity) + 1;
            if (res <= 5) {
                $('#prime_id_value').text("" + res);
            }
        }
        else {
            $("#msg_spn").text("Pump must be stopped to change settings");
        }
    });

    $('.prime-minus').click(function(e) {
        if (start_stop_status == "stop") {
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#prime_id_value')
                .text());
    
            // If is not undefined
            res = parseInt(quantity) - 1;
    
            if (quantity > 0) {
                $('#prime_id_value').text("" + res);
            }
        }
        else {
            $("#msg_spn").text("Pump must be stopped to change settings");
        }
    });
    
    $('#prime_start_btn').click(function(e) {
        //Prime
        $(this).css('background-color', '#4CAF50');
        $(this).css('color', '#ffffff');
        $("#prime_start_spn").css('color', '#ffffff');
        
        $("#prime_stop_btn").css('background-color', '#ffffff');
        $("#prime_stop_btn").css('color', '#4CAF50');
        $("#prime_stop_spn").css('color', '#4CAF50');
        //Prime End
        
        //Auto
        $("#auto_start_btn").css('background-color', '#4CAF50');
        $("#auto_start_btn").css('color', '#ffffff');
        $("#auto_start_spn").css('color', '#ffffff');
        
        $("#auto_stop_btn").css('background-color', '#ffffff');
        $("#auto_stop_btn").css('color', '#4CAF50');
        $("#auto_stop_spn").css('color', '#4CAF50');
        //End Auto
        
        //On_off
        $("#on_off_start_btn").css('background-color', '#4CAF50');
        $("#on_off_start_btn").css('color', '#ffffff');
        $("#on_off_start_spn").css('color', '#ffffff');
        
        $("#on_off_stop_btn").css('background-color', '#ffffff');
        $("#on_off_stop_btn").css('color', '#4CAF50');
        $("#on_off_stop_spn").css('color', '#4CAF50');
        //End On_off
        
        //Batch
        $("#batch_start_btn").css('background-color', '#4CAF50');
        $("#batch_start_btn").css('color', '#ffffff');
        $("#batch_start_spn").css('color', '#ffffff');
        
        $("#batch_stop_btn").css('background-color', '#ffffff');
        $("#batch_stop_btn").css('color', '#4CAF50');
        $("#batch_stop_spn").css('color', '#4CAF50');
        //End Batch
        
        start_stop_status = "start";
        $("#msg_spn").text('Pump Started');
    });
    
    $('#prime_stop_btn').click(function(e) {
        //Prime
        $(this).css('background-color', '#ff3232');
        $(this).css('color', '#ffffff');
        $("#prime_stop_spn").css('color', '#ffffff');
        
        $("#prime_start_btn").css('background-color', '#ffffff');
        $("#prime_start_btn").css('color', '#4CAF50');
        $("#prime_start_spn").css('color', '#4CAF50');
        //Prime End
        
        // Auto
        $("#auto_stop_btn").css('background-color', '#ff3232');
        $("#auto_stop_btn").css('color', '#ffffff');
        $("#auto_stop_spn").css('color', '#ffffff');
        
        $("#auto_start_btn").css('background-color', '#ffffff');
        $("#auto_start_btn").css('color', '#4CAF50');
        $("#auto_start_spn").css('color', '#4CAF50');
        //Auto End
        
        //On_off
        $("#on_off_stop_btn").css('background-color', '#ff3232');
        $("#on_off_stop_btn").css('color', '#ffffff');
        $("#on_off_stop_spn").css('color', '#ffffff');
        
        $("#on_off_start_btn").css('background-color', '#ffffff');
        $("#on_off_start_btn").css('color', '#4CAF50');
        $("#on_off_start_spn").css('color', '#4CAF50');
        //On_off End
        
        //Batch
        $("#batch_stop_btn").css('background-color', '#ff3232');
        $("#batch_stop_btn").css('color', '#ffffff');
        $("#batch_stop_spn").css('color', '#ffffff');
        
        $("#batch_start_btn").css('background-color', '#ffffff');
        $("#batch_start_btn").css('color', '#4CAF50');
        $("#batch_start_spn").css('color', '#4CAF50');
        //On_off End
        
        start_stop_status = "stop";
        $("#msg_spn").text('Pump Stoped');
    });
    
}

function chemical() {
   
    $("#chemical_data").show();
    $("#auto_data").hide();
    $("#on_off_data").hide();
    $("#batch_data").hide();
    $("#prime_data").hide();
    $("#battery_data").hide();
    $("#solar_data").hide();
    $("#settings_data").hide();

    dayName = getDayName();

    var sunChemical = self.ctx.$scope.data[13].data[0][1] +
        "%";
    $('head').append(
        '<style>#sunChemical:before{ content: ""; position: absolute; z-index: -1; top: 0; bottom: ' +
        sunChemical +
        '; right:0; left: 0; background: #D3D3D3;}</style>'
    );

    var monChemical = self.ctx.$scope.data[14].data[0][1] +
        "%";
    $('head').append(
        '<style>#monChemical:before{ content: ""; position: absolute; z-index: -1; top: 0; bottom: ' +
        monChemical +
        '; right:0; left: 0; background: #D3D3D3;}</style>'
    );

    var tuesChemical = self.ctx.$scope.data[15].data[0][1] +
        "%";
    $('head').append(
        '<style>#tuesChemical:before{ content: ""; position: absolute; z-index: -1; top: 0; bottom: ' +
        tuesChemical +
        '; right:0; left: 0; background: #D3D3D3;}</style>'
    );

    var wedChemical = self.ctx.$scope.data[16].data[0][1] +
        "%";
    $('head').append(
        '<style>#wedChemical:before{ content: ""; position: absolute; z-index: -1; top: 0; bottom: ' +
        wedChemical +
        '; right:0; left: 0; background: #D3D3D3;}</style>'
    );

    var thursChemical = self.ctx.$scope.data[17].data[0][1] +
        "%";
    $('head').append(
        '<style>#thursChemical:before{ content: ""; position: absolute; z-index: -1; top: 0; bottom: ' +
        thursChemical +
        '; right:0; left: 0; background: #D3D3D3;}</style>'
    );

    var friChemical = self.ctx.$scope.data[18].data[0][1] +
        "%";
    $('head').append(
        '<style>#friChemical:before{ content: ""; position: absolute; z-index: -1; top: 0; bottom: ' +
        friChemical +
        '; right:0; left: 0; background: #D3D3D3;}</style>'
    );

    var satChemical = self.ctx.$scope.data[19].data[0][1] +
        "%";
    $('head').append(
        '<style>#satChemical:before{ content: ""; position: absolute; z-index: -1; top: 0; bottom: ' +
        satChemical +
        '; right:0; left: 0; background: #D3D3D3;}</style>'
    );


    $('.chemical-plus').unbind("click");
    $('.chemical-minus').unbind("click");

    $('.chemical-plus').click(function(e) {
        e.stopPropagation();
        e.preventDefault();
        var quantity = parseInt($(
            '#chemical_id_value').text());
        res = parseInt(quantity) + 1;
        $('#chemical_id_value').text("" + res);
    });

    $('.chemical-minus').click(function(e) {
        e.preventDefault();
        var quantity = parseInt($(
            '#chemical_id_value').text());

        res = parseInt(quantity) - 1;

        if (quantity > 0) {
            $('#chemical_id_value').text("" + res);
        }
    });

}

function battery() {
    $("#battery_data").show();
    $("#auto_data").hide();
    $("#on_off_data").hide();
    $("#batch_data").hide();
    $("#prime_data").hide();
    $("#chemical_data").hide();
    $("#solar_data").hide();
    $("#settings_data").hide();

    var sunBattery = self.ctx.$scope.data[1].data[0][1] +
        "%";
    $('head').append(
        '<style>#sunBattery:before{ content: ""; position: absolute; z-index: -1; top: 0; bottom: ' +
        sunBattery +
        '; right:0; left: 0; background: #D3D3D3;}</style>'
    );

    var monBattery = self.ctx.$scope.data[11].data[0][1] +
        "%";
    $('head').append(
        '<style>#monBattery:before{ content: ""; position: absolute; z-index: -1; top: 0; bottom: ' +
        monBattery +
        '; right:0; left: 0; background: #D3D3D3;}</style>'
    );

    var tuesBattery = self.ctx.$scope.data[12].data[0][1] +
        "%";
    $('head').append(
        '<style>#tuesBattery:before{ content: ""; position: absolute; z-index: -1; top: 0; bottom: ' +
        tuesBattery +
        '; right:0; left: 0; background: #D3D3D3;}</style>'
    );

    var wedBattery = self.ctx.$scope.data[13].data[0][1] +
        "%";
    $('head').append(
        '<style>#wedBattery:before{ content: ""; position: absolute; z-index: -1; top: 0; bottom: ' +
        wedBattery +
        '; right:0; left: 0; background: #D3D3D3;}</style>'
    );

    var thursBattery = self.ctx.$scope.data[14].data[0][1] +
        "%";
    $('head').append(
        '<style>#thursBattery:before{ content: ""; position: absolute; z-index: -1; top: 0; bottom: ' +
        thursBattery +
        '; right:0; left: 0; background: #D3D3D3;}</style>'
    );

    var friBattery = self.ctx.$scope.data[15].data[0][1] +
        "%";
    $('head').append(
        '<style>#friBattery:before{ content: ""; position: absolute; z-index: -1; top: 0; bottom: ' +
        friBattery +
        '; right:0; left: 0; background: #D3D3D3;}</style>'
    );

    var satBattery = self.ctx.$scope.data[16].data[0][1] +
        "%";
    $('head').append(
        '<style>#satBattery:before{ content: ""; position: absolute; z-index: -1; top: 0; bottom: ' +
        satBattery +
        '; right:0; left: 0; background: #D3D3D3;}</style>'
    );

    $('.battery-plus').unbind("click");
    $('.battery-minus').unbind("click");

    $('.battery-plus').click(function(e) {
        e.stopPropagation();
        e.preventDefault();
        var quantity = parseInt($(
            '#battery_id_value').text());
        res = parseInt(quantity) + 1;
        $('#battery_id_value').text("" + res);
    });

    $('.battery-minus').click(function(e) {
        e.preventDefault();
        var quantity = parseInt($(
            '#battery_id_value').text());

        res = parseInt(quantity) - 1;

        if (quantity > 0) {
            $('#battery_id_value').text("" + res);
        }
    });
}

function solar() {
    $("#solar_data").show();
    $("#auto_data").hide();
    $("#on_off_data").hide();
    $("#batch_data").hide();
    $("#prime_data").hide();
    $("#chemical_data").hide();
    $("#battery_data").hide();
    $("#settings_data").hide();

    $('.solar-plus').unbind("click");
    $('.solar-minus').unbind("click");

    $('.solar-plus').click(function(e) {
        e.stopPropagation();
        e.preventDefault();
        var quantity = parseInt($('#solar_id_value')
            .text());
        res = parseInt(quantity) + 1;
        $('#solar_id_value').text("" + res);
    });

    $('.solar-minus').click(function(e) {
        e.preventDefault();
        var quantity = parseInt($('#solar_id_value')
            .text());

        res = parseInt(quantity) - 1;

        if (quantity > 0) {
            $('#solar_id_value').text("" + res);
        }
    });

    var sunDataSolar = self.ctx.$scope.data[17].data[0][1].toString();
    var resDataSun = sunDataSolar.substring(0, 4);
    $("#sunDataSolar").text(resDataSun);

    var monDataSolar = self.ctx.$scope.data[18].data[0][1].toString();
    var resDataMon = monDataSolar.substring(0, 4);
    $("#monDataSolar").text(resDataMon);

    var tueDataSolar = self.ctx.$scope.data[19].data[0][1].toString();
    var resDataTue = tueDataSolar.substring(0, 4);
    $("#tueDataSolar").text(resDataTue);

    var wedDataSolar = self.ctx.$scope.data[20].data[0][1].toString();
    var resDataWed = wedDataSolar.substring(0, 4);
    $("#wedDataSolar").text(resDataWed);

    var thuDataSolar = self.ctx.$scope.data[21].data[0][1].toString();
    var resDataThu = thuDataSolar.substring(0, 4);
    $("#thuDataSolar").text(resDataThu);

    var friDataSolar = self.ctx.$scope.data[22].data[0][1].toString();
    var resDataFri = friDataSolar.substring(0, 4);
    $("#friDataSolar").text(resDataFri);

    var satDataSolar = self.ctx.$scope.data[23].data[0][1].toString();
    var resDataSat = satDataSolar.substring(0, 4);
    $("#satDataSolar").text(resDataSat);
}

function settings() {
    $("#settings_data").show();
    $("#auto_data").hide();
    $("#on_off_data").hide();
    $("#batch_data").hide();
    $("#prime_data").hide();
    $("#chemical_data").hide();
    $("#battery_data").hide();
    $("#solar_data").hide();
}


function getDayName() {
    var d = new Date("2018-02-15");
    var dayName = d.toString().split(' ')[0];
    return dayName;
}
