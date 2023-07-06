Number.isInteger =
  Number.isInteger ||
  function(value) {
    return (
      typeof value === "number" &&
      isFinite(value) &&
      Math.floor(value) === value
    );
  };

function isNumber(n) {
  return typeof n === "number";
}

function repeatString(text, n) {
  var result = "";
  for (var i = 0; i < n; i++) {
    result += text;
  }
  return result;
}

function showError(element) {
  var oldClass = element.className;
  element.className += " btn-danger";
  element.innerHTML = "Hmm, not quite";
  setTimeout(function() {
    element.className = oldClass;
    element.innerHTML = "Run";
  }, 3000);
}

function showSuccess(element) {
  var oldClass = element.className;
  element.className += " btn-success";
  element.innerHTML = "It works!";
  setTimeout(function() {
    element.className = oldClass;
    element.innerHTML = "Run";
  }, 3000);
}

function testDeclare(element) {
  try {
    var result = lvl1exercise1();
    if (result !== null) {
      throw false;
    }
    showSuccess(element);
  } catch (err) {
    showError(element);
  }
}

function testDeclareNumber(element) {
  try {
    var result = lvl1exercise2();
    if (typeof result !== 'number') {
      throw false;
    }
    showSuccess(element);
  } catch (err) {
    showError(element);
  }
}

function testDeclareFloat(element) {
  try {
    var result = lvl1exercise3();
    if (typeof result !== 'number' || Number.isInteger(result)) {
      throw false;
    }
    showSuccess(element);
  } catch (err) {
    showError(element);
  }
}

function testDeclareString(element) {
  try {
    var result = lvl1exercise4();
    if (result !== "Hello World!") {
      throw false;
    }
    showSuccess(element);
  } catch (err) {
    showError(element);
  }
}

function testDeclareArray(element) {
  try {
    var result = lvl1exercise5();
    if (
      !(result.length === 2 && result[0] === "Hello World!" && result[1] === 4)
    ) {
      throw false;
    }
    showSuccess(element);
  } catch (err) {
    showError(element);
  }
}

function testDeclareObject(element) {
  try {
    var result = lvl1exercise6();
    const valuesAreCorrect = result.key1 === "Hello World!" && result.key2 === 4;
    const objectHasTwoKeys = Object.keys(result).length === 2;
    if (!valuesAreCorrect || !objectHasTwoKeys) {
      throw false;
    }
    showSuccess(element);
  } catch (err) {
    showError(element);
  }
}

function testDeclareBoolean(element) {
  try {
    var result = lvl1exercise7();
    if (result !== false) {
      throw false;
    }
    showSuccess(element);
  } catch (err) {
    showError(element);
  }
}

function testAdd(element) {
  try {
    const result1correct = lvl2exercise1(2, 3) !== 5;
    const result2correct = lvl2exercise1(99, 1) !== 100;
    const result3correct = lvl2exercise1(-10, 10) !== 0;
    if (result1correct || result2correct || result3correct) {
      throw false;
    }
    showSuccess(element);
  } catch (err) {
    showError(element);
  }
}

function testSubtract(element) {
  try {
    const result1correct = lvl2exercise2(2, 3) !== -1;
    const result2correct = lvl2exercise2(99, 1) !== 98;
    const result3correct = lvl2exercise2(-10, 10) !== -20;
    if (result1correct || result2correct || result3correct) {
      throw false;
    }
    showSuccess(element);
  } catch (err) {
    showError(element);
  }
}

function testMultiply(element) {
  try {
    const result1correct = lvl2exercise3(2, 3) !== 6;
    const result2correct = lvl2exercise3(99, 1) !== 99;
    const result3correct = lvl2exercise3(-10, 10) !== -100;
    if (result1correct || result2correct || result3correct) {
      throw false;
    }
    showSuccess(element);
  } catch (err) {
    showError(element);
  }
}

function testDivide(element) {
  try {
    const result1correct = lvl2exercise4(30, 3) !== 10;
    const result2correct = lvl2exercise4(99, 1) !== 99;
    const result3correct = lvl2exercise4(-10, 10) !== -1;
    if (result1correct || result2correct || result3correct) {
      throw false;
    }
    showSuccess(element);
  } catch (err) {
    showError(element);
  }
}

function testAssign(element) {
  try {
    const result1correct = lvl2exercise5(30) !== 32;
    const result2correct = lvl2exercise5(99) !== 101;
    const result3correct = lvl2exercise5(-10) !== -8;
    if (result1correct || result2correct || result3correct) {
      throw false;
    }
    showSuccess(element);
  } catch (err) {
    showError(element);
  }
}

function testConcatenation1(element) {
  try {
    var result = lvl3exercise1();
    if (result !== "helloworld") {
      throw false;
    }
    showSuccess(element);
  } catch (err) {
    showError(element);
  }
}

function testConcatenation2(element) {
  try {
    var result = lvl3exercise2();
    if (result !== "hello12") {
      throw false;
    }
    showSuccess(element);
  } catch (err) {
    showError(element);
  }
}

function testConvert(element) {
  try {
    var result = lvl3exercise3();
    if (result !== "12") {
      throw false;
    }
    showSuccess(element);
  } catch (err) {
    showError(element);
  }
}

function testStringLength(element) {
  try {
    var result = lvl3exercise4(12);
    if (result !== 12) {
      throw false;
    }
    showSuccess(element);
  } catch (err) {
    showError(element);
  }
}

function testStringIndex(element) {
  try {
    var result = lvl3exercise5(12);
    if (result !== 6) {
      throw false;
    }
    showSuccess(element);
  } catch (err) {
    showError(element);
  }
}

function testTrue(element) {
  try {
    var result = lvl4exercise1(12);
    if (result !== true) {
      throw false;
    }
    showSuccess(element);
  } catch (err) {
    showError(element);
  }
}

function testFalse(element) {
  try {
    var result = lvl4exercise2(12);
    if (result !== false) {
      throw false;
    }
    showSuccess(element);
  } catch (err) {
    showError(element);
  }
}

function testNot(element) {
  try {
    var result1 = lvl4exercise3(true);
    var result2 = lvl4exercise3(false);
    if (result1 !== false || result2 !== true) {
      throw false;
    }
    showSuccess(element);
  } catch (err) {
    showError(element);
  }
}

function testAnd(element) {
  try {
    var result1 = lvl4exercise4(true, true);
    var result2 = lvl4exercise4(true, false);
    var result3 = lvl4exercise4(false, true);
    var result4 = lvl4exercise4(false, false);
    if (
      result1 !== true ||
      result2 !== false ||
      result3 !== false ||
      result4 !== false
    ) {
      throw false;
    }
    showSuccess(element);
  } catch (err) {
    showError(element);
  }
}

function testOr(element) {
  try {
    var result1 = lvl4exercise5(true, true);
    var result2 = lvl4exercise5(true, false);
    var result3 = lvl4exercise5(false, true);
    var result4 = lvl4exercise5(false, false);
    if (
      result1 !== true ||
      result2 !== true ||
      result3 !== true ||
      result4 !== false
    ) {
      throw false;
    }
    showSuccess(element);
  } catch (err) {
    showError(element);
  }
}

function testEquivalence(element) {
  try {
    var result1 = lvl4exercise6(true, true);
    var result2 = lvl4exercise6(true, false);
    var result3 = lvl4exercise6(false, true);
    var result4 = lvl4exercise6(false, false);
    if (
      result1 !== true ||
      result2 !== false ||
      result3 !== false ||
      result4 !== true
    ) {
      throw false;
    }
    showSuccess(element);
  } catch (err) {
    showError(element);
  }
}

function testArrayPush(element) {
  try {
    var result = lvl5exercise1();
    if (result.length !== 3 || result[2] !== "hello") {
      throw false;
    }
    showSuccess(element);
  } catch (err) {
    showError(element);
  }
}

function testArrayPop(element) {
  try {
    var result = lvl5exercise2();
    if (result.length !== 1) {
      throw false;
    }
    showSuccess(element);
  } catch (err) {
    showError(element);
  }
}

function testArrayLength(element) {
  try {
    var result = lvl5exercise3();
    if (result !== 2) {
      throw false;
    }
    showSuccess(element);
  } catch (err) {
    showError(element);
  }
}

function testArrayIndex(element) {
  try {
    var result = lvl5exercise4();
    if (result !== 1) {
      throw false;
    }
    showSuccess(element);
  } catch (err) {
    showError(element);
  }
}

function testConditional(element) {
  try {
    var result1 = lvl6exercise1(1);
    var result2 = lvl6exercise1(2);
    var result3 = lvl6exercise1(3);
    if (result1 !== "hello" || result2 !== "world" || result3 !== "bye") {
      throw false;
    }
    showSuccess(element);
  } catch (err) {
    showError(element);
  }
}

const tenHello = repeatString("hello", 10);

function testFor(element) {
  try {
    var result = lvl6exercise2();
    if (
      result.length !== 10 ||
      result.join(" ") !==
        "hello hello hello hello hello hello hello hello hello hello"
    ) {
      throw false;
    }
    showSuccess(element);
  } catch (err) {
    showError(element);
  }
}

function testWhile(element) {
  try {
    var result = lvl6exercise3();
    if (!Array.isArray(result) || result.length !== 0) {
      throw false;
    }
    showSuccess(element);
  } catch (err) {
    showError(element);
  }
}

function testFunction(element) {
  try {
    var result = finalFunction(8);
    var result2 = finalFunction(99);
    var result3 = finalFunction(-1);
    var result4 = finalFunction('potato');
    if (
      (!Array.isArray(result) || result.length !== 8) ||
      (!Array.isArray(result2) || result2.length !== 99) ||
      (!Array.isArray(result3) || result3.length !== 0) ||
      (!Array.isArray(result4) || result4.length !== 0)
    ) {
      throw false;
    }
    showSuccess(element);
  } catch (err) {
    showError(element);
  }
}

function evalExercise(element) {
  var functionToEvaluate = element.getAttribute("id");
  window[functionToEvaluate](element);
}
