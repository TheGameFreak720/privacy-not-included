export default function(money) {
  return (money).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}
