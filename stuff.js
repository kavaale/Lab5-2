$(document).ready(function () {

    $("input[name=cash]").keyup(changeTotal);

    function changeTotal() {
        var learnTotal = 39.99 * $("#numbLearn").val();
        var donateTotal = 14.99 * $("#numbDonate").val();
        var grandTotal = donateTotal + learnTotal;
        $("#learnTotal").text("$" + learnTotal);
        $("#donateTotal").text("$" + donateTotal);
        $("#grandTotal").text("$" + grandTotal);
    }

});