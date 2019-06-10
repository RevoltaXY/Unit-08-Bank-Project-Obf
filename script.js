var deposit;
var depositNames = [];
var depositAmounts= [];
var name;
var totalDeposit;

$(".newDeposit").click(function() {
totalDeposit = 0;
    deposit = $(".accountDeposit").val();
    name = $(".accountName").val();
    $(".ledger").append("<p>" + name + "</p><p class='ledgerBorder'>$" + deposit + "</p>");
 depositAmounts.push(deposit);
 depositNames.push(name);
 
 depositAmounts.forEach(function(total){
     totalDeposit = totalDeposit + parseInt
     (total);
     $(".number").text("Number of Transactions:" + depositAmounts.length);
     $(".total").text("Total: $" + totalDeposit);
 });
var price;
$(".tog").text("Deposited:");
});
$(".update").click(function() {
    alert("The last deposit was by "+name+" and "+deposit+" dollars was deposted. ");});