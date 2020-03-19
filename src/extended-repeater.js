module.exports = function repeater(str, options ) {
    let {
        repeatTimes = 1,
        separator = "+",
        addition = "",
        additionSeparator = "|",
        additionRepeatTimes = 1,
      } = options; //destructuring with default values
      // last adding should be without separator
      //"some string".repeat(0) == ""
      const added = (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition;
      const strAdded = (str + added + separator).repeat(repeatTimes - 1) + (str + added);
      return strAdded;
};
  