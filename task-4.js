let credits = 23580;
let pricePerDroid = 3000;
let numberOfDroids = Number(prompt('Какое количество дронов вы хотели бы приобрести?'));
let totalPrice = pricePerDroid * numberOfDroids;

if (!numberOfDroids) {
  console.log('Отменено пользователем!')
} else if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!')
} else {
  console.log(`Вы купили ${numberOfDroids} дроидов, на счету осталось ${credits - totalPrice} кредитов.`)
}