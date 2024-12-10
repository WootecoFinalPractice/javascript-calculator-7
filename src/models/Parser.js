import Validator from './Validator.js';

class Parser {
  static parseSeperate(input) {
    const seperators = [',', ':'];
    let mainString = 0;
    let customSeparator = 0;
    if (input.startsWith('//')) {
      const customIndex = input.indexOf('\\n');
      mainString = input.substring(customIndex + 2);
      for (let i = 2; i < customIndex; i += 1) {
        customSeparator = input[i];
      }
      seperators.push(customSeparator);
    } else {
      mainString = input;
    }
    return { mainString, seperators };
  }

  static parseInput(mainString, seperators) {
    const regex = new RegExp(`[${seperators.join('')}]`);
    const numbers = mainString.split(regex);
    Validator.validate(numbers);
    return numbers;
  }

  static calculate(numbers) {
    const intNumbers = numbers.map(Number);
    return intNumbers.reduce((acc, curr) => acc + curr, 0);
  }
}
export default Parser;
