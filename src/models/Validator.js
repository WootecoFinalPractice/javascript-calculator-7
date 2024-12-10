class Validator {
  static validate(input) {
    const number = input.map(Number);
    number.map(num => {
      if (num < 0) {
        throw new Error('[ERROR] 오류입니다.');
      }
      return true;
    });
  }
}

export default Validator;
