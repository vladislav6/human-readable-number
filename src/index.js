module.exports = function toReadable(number) {
  const digits = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    null,
    null,
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  const strNumber = `${number}`;
  let result = '';

  if (strNumber.length === 3) {
    if (+strNumber[1] < 1 && +strNumber[2] < 1) {
      result = `${digits[strNumber[0]]} hundred`;
    } else if (+strNumber[1] <= 1 && +strNumber[2] < 10) {
      result = `${digits[strNumber[0]]} hundred ${digits[number - strNumber[0] * 100]}`;
    } else {
      result =
        `${digits[strNumber[0]]} hundred ${tens[strNumber[1]]} ${+strNumber[2] >= 1 ? digits[strNumber[2]] : ''}`.trim();
    }
  } else if (strNumber.length === 2) {
    if (number < 20) {
      result = digits[number];
    } else if (+strNumber[1] < 1) {
      result = tens[strNumber[0]];
    } else {
      result = `${tens[strNumber[0]]} ${digits[strNumber[1]]}`;
    }
  } else {
    result = digits[number];
  }
  return result;
};
