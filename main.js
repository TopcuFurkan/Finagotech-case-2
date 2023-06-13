const readline = require('readline');

function uniqueWolfs(arr) {
  let frequencyCount = {};

  
  for (let i = 0; i < arr.length; i++) {
    let id = arr[i];
    if (frequencyCount[id]) {
      frequencyCount[id]++;
    } else {                          //sayıların tekrar sayısını belirler
      frequencyCount[id] = 1;
    }
  }

  let maxFrequency = 0;
  let minID = Infinity;

  
  for (let key in frequencyCount) {
    if (frequencyCount[key] > maxFrequency) {
      maxFrequency = frequencyCount[key];
      minID = parseInt(key);
    } else if (frequencyCount[key] === maxFrequency && parseInt(key) < minID) {  //en çok tekrar eden sayıları karşılaştırır
      minID = parseInt(key);
    }
  }

  return minID;
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let arrCount;
  let arr;

  rl.question('Dizi Boyutunu Giriniz: ', arrCountInput => {
    arrCount = parseInt(arrCountInput.trim());

    rl.question('Dizi Elemanlarını Giriniz: ', arrInput => {
      arr = arrInput.split('').map(Number);
      
      if (arr.every(num => num >= 1 && num <= 5)) {   //girilen sayıların [1,5] arakığında olduğunu kontroll eder
        const result = uniqueWolfs(arr);
        console.log(result);
      } else {
        console.log(' Sadece 1, 2, 3, 4 veya 5 rakamlarını kullanın.');
      }

      rl.close();
    });
  });
}

main();

