function checkCashRegister(price, cash, cid) {
  var change = cash-price;
  var change_array = [];
  var insufficient = [false, false, false, false, false, false, false, false];
  var result = "default";
  // Here is your change, ma'am.
  function getBill(change){
    if(change>=20&&insufficient[7]===false){
      if(20.00*(Math.floor(change/20))>cid[7][1]){
        change_array.push(cid[7]);
        change = change-cid[7][1];
        insufficient[7] = true;
        getBill(change);
      }else{
        change_array.push(["TWENTY", 20.00*(Math.floor(change/20))]);
        change = change-20.00*(Math.floor(change/20));
        getBill(change);
      }
    }
    else if((change<20&&change>=10&&insufficient[6]===false)||(insufficient[7]===true&&insufficient[6]===false&&change>=20)){
      if(10.00*(Math.floor(change/10))>cid[6][1]){
        change_array.push(cid[6])
        change = change-cid[6][1];

        insufficient[6] = true
        getBill(change)
      }else{
        change_array.push(["TEN", 10.00*(Math.floor(change/10))])
        change = change-10.00*(Math.floor(change/10));
        getBill(change)
      }
    }
    else if((change<10&&change>=5&&insufficient[5]===false)||(insufficient[6]===true&&insufficient[5]===false&&change>=10)){
      if(5.00*(Math.floor(change/5))>cid[5][1]){
        change_array.push(cid[5])
        change = change-cid[5][1];
        insufficient[5] = true
        getBill(change)
      }else{
        change_array.push(["FIVE", 5.00*(Math.floor(change/5))])
        change = change-5.00*(Math.floor(change/5));
        getBill(change)
      }
    }
    else if((change<5&&change>=1&&insufficient[4]===false)||(insufficient[5]===true&&insufficient[4]===false&&change>=5)){
      if(1.00*(Math.floor(change/1))>cid[4][1]){
        change_array.push(cid[4])
        change = change-cid[4][1];
        insufficient[4] = true
        getBill(change)
      }else{
        change_array.push(["ONE", 1.00*(Math.floor(change/1))])
        change = change-1.00*(Math.floor(change/1));
        getBill(change)
      }
    }
    else if((change<1&&change>=0.25&&insufficient[3]===false)||(insufficient[4]===true&&insufficient[3]===false&&change>=1)){
      if(0.25*(Math.floor(change/0.25))>cid[3][1]){
        change_array.push(cid[3])
        change = change-cid[3][1];
        insufficient[3] = true
        getBill(change)
      }else{
        change_array.push(["QUARTER", 0.25*(Math.floor(change/0.25))])
        change = change-0.25*(Math.floor(change/0.25));
        getBill(change)
      }
    }
    else if((change<0.25&&change>=0.1&&insufficient[2]===false)||(insufficient[3]===true&&insufficient[2]===false&&change>=0.25)){
      if(0.1*(Math.floor(change/0.1))>cid[2][1]){
        change_array.push(cid[2])
        change = change-cid[2][1];
        insufficient[2] = true
        getBill(change)
      }else{
        change_array.push(["DIME", 0.10*(Math.floor(change/0.1))]);
        change = change-0.10*(Math.floor(change/0.1));
        getBill(change)
      }
    }
    else if((change<0.1&&change>=0.05&&insufficient[1]===false)||(insufficient[2]===true&&insufficient[1]===false&&change>=0.05)){
      if(0.05*(Math.floor(change/0.05))>cid[1][1]){
        change_array.push(cid[1])
        change = change-cid[1][1];
        insufficient[1] = true
        getBill(change)
      }else{
        change_array.push(["NICKEL", 0.05*(Math.floor(change/0.05))])
        change = change-0.05*(Math.floor(change/0.05));
        getBill(change)
      }
    }
    else if((change<0.05&&change>=0.01&&insufficient[0]===false)||(insufficient[1]===true)){
      if(0.01*(Math.floor(change/0.01))>cid[0][1]){
        result = "Insufficient Funds";
      }else if(0.01*(Math.floor(change/0.01))===cid[0][1]){
        result = "Closed";
      }else{
        console.log(change)
        change_array.push(["PENNY", 0.01*(Math.round(change/0.01))])
        change = Math.floor(change-0.01*(Math.floor(change/0.01)));
        getBill(change)
      }
    }
    else if(change<=0){
      return;
    }
  }
  getBill(change);
  if(result === "Insufficient Funds" || result === "Closed"){
    return result;
  }else{
    return change_array;
  }
}


console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));

console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
