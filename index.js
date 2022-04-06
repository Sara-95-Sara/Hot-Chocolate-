// milk, chocolate, sugar, performer

const db = {
  milk: 50,
  chocolate: 17,
  sugar: 40
}

function addMilk (count) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (db.milk - count >= 0) {
        db.milk -= count;
        return resolve(`added ${count} liters milk`);
      } else {
        reject("Sorry, but the amount of milk isn't enough...")
      }
    }, 180);
  })
}

function addChocolate(count) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (db.chocolate - count >= 0) {
        db.chocolate -= count;
        return resolve(`Added ${count} chocolate section`);
      } else {
        reject("Sorry, but the amount of chocolate isn't enough...")
      }
    }, 800);
  })
} 

function addSugar(count) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(`Added ${count} tablespoons sugar`);
    }, 200);
  })
}

function barman () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve("Your order is ready, you can take it.");
    }, 150);
  })
}

/* Promise
function cafe (count) {
  console.log("Your order is pending");
  addMilk(count)
    .then(milk => {
      console.log(milk);
      return addChocolate(count);
    })
    .then(chocolate => {
      console.log(chocolate);
      return addSugar(count);
    })
    .then(sugar => {
      console.log(sugar);
      return barman();
    })
    .then(barman => console.log(barman))
    .catch(err => console.log(err))
    .finally(() => console.log("Thank you for using our services..."))
}

cafe(10);
*/


// Async/Await
async function cafe (count) {
  console.log("Your order is pending");
  const a1 = await addMilk(count)
  const a2 = await addChocolate(count)
  const a3 = await addSugar(count)
  const a4 = await barman()

  console.log(a1);
  console.log(a2);
  console.log(a3);
  console.log(a4);
}

cafe(10)
  .catch(e => console.log(e))
  .finally(() => console.log("OK!"))