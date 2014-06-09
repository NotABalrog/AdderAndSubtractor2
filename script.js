$(document).ready(function () {
    $("#add").click(function () {
        var operator = "+";
        Calculate(operator);
    });
    $("#subtract").click(function () {
        var operator = "-";
        Calculate(operator);
    });

    function Calculate(operator) {

        var total = 0;

        //grab needed values from dom
        var x = parseInt($('#inputX').val());
        var y =  parseInt($('#inputY').val());
        
        //validate
        var valid = Validate(x, y);

        if (valid) {
            // run calculations
            switch (operator) {
                case '-':
                    total = x - y;
                    break;
                case '+':
                    total = x + y;
                    break;
                default:
                    $('h4').text("Something has gone horribly wrong");
            }

            //update user
            $('h4').text("");
            $('h4').text(x + " " + operator + " " + y + " = " + total);
        }

        else {
            $('h4').text("Please enter a number without spaces");
        }
    };

    function Validate(x, y) {
        if (isNaN(x) || isNaN(y)) {     
            return false;
        }
        else {
            return true;
        }
    };
});