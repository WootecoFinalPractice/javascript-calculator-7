import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import Parser from '../models/Parser.js';

class Controller {
  static async run() {
    try {
      const userInput = await InputView.readInput();
      const { mainString, seperators } = Parser.parseSeperate(userInput);
      const numbers = Parser.parseInput(mainString, seperators);
      const result = Parser.calculate(numbers);
      OutputView.printResult(result);
    } catch (error) {
      OutputView.print(error);
      throw error;
    }
  }
}

export default Controller;
