const reverseString = (string) => {
    let newReversedString = "";
    for (let i = string.length - 1; i >= 0; i--) {
      newReversedString += string[i];
    }
    return newReversedString;
  };
  
  // console.log(reverseString("Taherul"));
  
  //* Task 2
  const sumOfPositiveNumbers = (inputArray) => {
    let sum = 0;
    for (let number of inputArray) {
      if (number > 0) {
        sum += number;
      }
    }
    return sum;
  };
  
  // console.log(sumOfPositiveNumbers([1, -2, -6, 2, 4, 6, 1, 6, 3, 5]));
  
  //* Task 3
  const findMostFrequentElement = (arr) => {
    const elementFrequency = {};
    let mostFrequentElement = 0;
    let maxFrequency = 0;
    arr.forEach((element) => {
      elementFrequency[element] = (elementFrequency[element] || 0) + 1;
      if (elementFrequency[element] > maxFrequency) {
        mostFrequentElement = element;
        maxFrequency = elementFrequency[element];
      }
    });
  
    return mostFrequentElement;
  };
  
  // console.log(
  //   findMostFrequentElement([1, 2, 3, 3, 3, 3, 3, 3, 2, 1, 4, 2, 3, 4, 2, 2])
  // );
  
  // * Task 4
  
  const findTwoSumIndices = (sortedArray, target) => {
    let left = 0;
    let right = sortedArray.length - 1;
  
    while (left < right) {
      const sum = sortedArray[left] + sortedArray[right];
  
      if (sum === target) {
        return [left, right];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
    return [];
  };
  
  // console.log(findTwoSumIndices([2, 4, 6, 8, 10, 12], 16));
  
  // *Task 5
  const javascriptCalculator = (num1, operator, num2) => {
    if (operator === "+") {
      return num1 + num2;
    } else if (operator === "-") {
      return num1 - num2;
    } else if (operator === "*") {
      return num1 * num2;
    } else if (operator === "/") {
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return "Cannot divide because it is zero";
      }
    } else {
      return "Invalid";
    }
  };
  
  // console.log(javascriptCalculator(5, "+", 5));
  
  // *Task 6
  const generateRandomPassword = (length) => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialCharacters = "!@#$%^&*()-_=+[]{}|;:,.<>?";
    const allCharacters = uppercase + lowercase + numbers + specialCharacters;
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters[randomIndex];
    }
    return password;
  };
  // console.log(generateRandomPassword(10));
  
  // *Task 8
  const findSecondSmallest = (array) => {
    if (array.length < 2) {
      return "Array should contain two numbers";
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let num of array) {
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
      }
    }
  
    return secondSmallest;
  };
  
  // console.log(findSecondSmallest([5, 2, 9, 5, 6]));