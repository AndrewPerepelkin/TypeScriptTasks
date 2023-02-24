interface IPrice {
  price: number
  discount: number
  isInstallment: boolean
  months: number
}

const totalPrice = ({ price, discount, isInstallment, months }: IPrice): number=> isInstallment ? price * ((100 - discount) / 100) / months : price * (discount / 100)

const result = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(result); //6250
