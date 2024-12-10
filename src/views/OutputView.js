import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static print(input) {
    Console.print(input);
  }

  static printResult(result) {
    Console.print(`결과 : ${result}`);
  }
}

export default OutputView;
