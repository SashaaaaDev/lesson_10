const weekFn = require('./weekFn')
// console.log(weekFn(1)); // 'Понедельник'
test('1 : Понедельник', () => {
  expect(weekFn(1)).toBe('Понедельник')
})
// console.log(weekFn(3)); // 'Среда'
test('3 : Среда', () => {
  expect(weekFn(3)).toBe('Среда')
})
// console.log(weekFn(7)); // 'Воскресенье'
test('7 : Воскресенье', () => {
  expect(weekFn(7)).toBe('Воскресенье')
})
// console.log(weekFn(9)); // null
test('9 : null', () => {
  expect(weekFn(9)).toBe(null)
})
// console.log(weekFn(1.5)); // null
test('1.5 : null', () => {
  expect(weekFn(1.5)).toBe(null)
})
// console.log(weekFn('2')); // null
test('2 : null', () => {
  expect(weekFn('2')).toBe(null)
})
