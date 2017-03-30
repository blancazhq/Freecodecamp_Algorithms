function checkCashRegister(price, cash, cid) {
  var change = cash-price;
  var change_array = [];
  var insufficient = false;
  // Here is your change, ma'am.
  function getBill(change){
    if(change>=20&&insufficient===false){
      console.log(cid[7][1])
      if(20.00*(Math.floor(change/20))>cid[7][1]){
        console.log("1");
        change_array.push(cid[7]);
        change = change-cid[7][1];
        insufficient = true;
        getBill(change);
      }else{
        console.log("2");
        change_array.push(["TWENTY", 20.00*(Math.floor(change/20))]);
        change = change-20.00*(Math.floor(change/20));
        getBill(change);
      }
    }
    else if((change<20&&change>=10&&insufficient===false)||(insufficient===true&&change>=10)){
      insufficient = false;
      if(10.00*(Math.floor(change/10))>cid[6][1]){
        change_array.push(cid[6])
        change = change-cid[6][1];
        insufficient = true
        getBill(change)
      }else{
        change_array.push(["TEN", 10.00*(Math.floor(change/10))])
        change = change-10.00*(Math.floor(change/10));
        getBill(change)
      }
    }
    else if((change<10&&change>=5&&insufficient===false)||(insufficient===true&&change>=5)){
      insufficient = false;
      if(5.00*(Math.floor(change/5))>cid[5][1]){
        change_array.push(cid[5])
        change = change-cid[5][1];
        insufficient = true
        getBill(change)
      }else{
        change_array.push(["FIVE", 5.00*(Math.floor(change/5))])
        change = change-5.00*(Math.floor(change/5));
        getBill(change)
      }
    }
    else if((change<5&&change>=1&&insufficient===false)||(insufficient===true&&change>=1)){
      insufficient = false;
      if(1.00*(Math.floor(change/1))>cid[4][1]){
        change_array.push(cid[4])
        change = change-cid[4][1];
        insufficient = true
        getBill(change)
      }else{
        change_array.push(["ONE", 1.00*(Math.floor(change/1))])
        change = change-1.00*(Math.floor(change/1));
        getBill(change)
      }
    }
    else if((change<1&&change>=0.25&&insufficient===false)||(insufficient===true&&change>=0.25)){
      insufficient = false;
      if(0.25*(Math.floor(change/0.25))>cid[3][1]){
        change_array.push(cid[3])
        change = change-cid[3][1];
        insufficient = true
        getBill(change)
      }else{
        change_array.push(["QUARTER", 0.25*(Math.floor(change/0.25))])
        change = change-0.25*(Math.floor(change/0.25));
        getBill(change)
      }
    }
    else if((change<0.25&&change>=0.1&&insufficient===false)||(insufficient===true&&change>=0.1)){
      insufficient = false;
      if(0.1*(Math.floor(change/0.1))>cid[2][1]){
        change_array.push(cid[2])
        change = change-cid[2][1];
        insufficient = true
        getBill(change)
      }else(
        change_array.push(["DIME", 0.10*(Math.floor(change/0.1))])
        change = change-0.10*(Math.floor(change/0.1));
        getBill(change)
      )
    }
    else if((change<0.1&&change>=0.05&&insufficient===false)||(insufficient===true&&change>=0.05)){
      insufficient = false;
      if(){

      }else{
        
      }
      change_array.push(["NICKEL", 0.05*(Math.floor(change/0.05))])
      change = change-0.05*(Math.floor(change/0.05));
      getBill(change)
    }
    else if(change<0.05&&change>0){
      change_array.push(["PENNY", 0.01*(Math.floor(change/0.01))])
      change = Math.floor(change-0.01*(Math.floor(change/0.01)));
      console.log(change);
      getBill(change)
    }
    else if(change<=0){
      return;
    }
  }
  getBill(change);

  return change_array;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

// console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));

console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));
