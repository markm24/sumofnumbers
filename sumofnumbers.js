function sumFor(list) {_
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    total += list[i];
  }
  return total;
}

function sumWhile(list) {
  let total = 0;
  let i = 0;
  while (i < list.length) {
    total += list[i];
    i++;
  }
  return total;
}

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list,1);
}

function sumRecursion(list, i) {
  if (i === list.length) {
    return 0;
  }
  return list[i] + sumRecursion(list, i+1);
}

function sumUnderscore(list) {
  return _.reduce(list, function(memo, num) { return memo + num; }, 0);
}

const testList = [2, 3, 4, 5, 6];
//console.log(sumFor(testList));
//console.log(sumWhile(testList));
//console.log(sumRecursion(testList));
console.log(sumUnderscore(testList));
