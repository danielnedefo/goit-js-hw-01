let country = prompt('Введите страну для осуществления доставки').toLowerCase();
let price;



switch (country) {
  case 'Китай':
    price = 100;
    country =  country.slice(0,1).toUpperCase() + country.slice(1);
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;
  case 'Чили':
    price = 250;
    country =  country.slice(0,1).toUpperCase() + country.slice(1);
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;
  case 'Австралия':
    price = 170;
    country =  country.slice(0,1).toUpperCase() + country.slice(1);
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;
  case 'Индия':
    price = 80;
    country =  country.slice(0,1).toUpperCase() + country.slice(1);
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;
  case 'Ямайка':
    price = 120;
    country =  country.slice(0,1).toUpperCase() + country.slice(1);
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;
  default:
    alert('В вашей стране доставка не доступна')
    break;
}

