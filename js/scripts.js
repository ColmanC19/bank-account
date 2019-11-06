// User logic for new account
function BankAccount(name, currentAmount) {
  this.name = name;
  this.currentAmount = currentAmount;
}

// BankAccount.prototype.newAccount = function() {
//   this.name = inputName;
//   this.currentAmount += initialDeposit;
// }

BankAccount.prototype.deposit = function() {
  this.currentAmount += depositAmount;
}

BankAccount.prototype.withdraw = function() {
  this.currentAmount -= withdrawAmount;
}







// Business logic

$(document).ready(function() {
  var withdrawAmount = parseInt($('input#withdraw').val());
  var depositAmount = parseInt($('input#deposit').val());
  $("form#new-account").submit(function(event) {
    event.preventDefault();
    var inputName = $("input#name").val();
    var initialDeposit = parseInt($("input#startingAmount").val());
    var account = new BankAccount(inputName, initialDeposit);
  
  $("p.result").text("Thanks for setting up your account, " + account.name + ". " + "Your initial deposit of: $" + account.currentAmount + " has been received.");
});
  // $("form#modify-current-account").submit(function(event) {
  //   event.preventDefault();
  //     var inputName = $("input#name").val();
  //     var initialDeposit = parseInt($("input#startingAmount").val());
  //     var withdrawAmount = parseInt($('input#withdraw').val());
  //     var depositAmount = parseInt($('input#deposit').val());
  //     var account = new BankAccount(inputName, initialDeposit);
  //   account.deposit(depositAmount);
  //   $("p.result").text(account.name + " " + account.depositAmount);
  // })
});


// var inputname = new BankAccount(jordan, 100)
