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
    console.log(account);
    // account.newAccount();

  //   $("p#result").text("name: " + account.name + ". Amount:" + account.currentAmount);
  // });
  $("p#result").text(account.inputName + account.initialDeposit);
});
//   $("form#modify-current-account").submit(function(event) {
//     event.preventDefault();
//     account.deposit(depositAmount);
//   })
});


// var inputname = new BankAccount(jordan, 100)
