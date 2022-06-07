/*
 * Instructions: You've been given the HTML template for a JavaScript
 * calculator. Implement functionality such that when two numbers are
 * entered in the input fields, pressing one of the 'operator' buttons
 * results in the mathematical calculation for those two numbers.
 *
 * For example: If the boxes contain 4 and 2, pressing the "+" button should
 * display the number 6. If the "-" button is pressed, 2 should be displayed.
 * If the "*" button is pressed, 8 should be displayed. If the "/" button
 * is pressed, 2 should be displayed.
 *
 * There are bounuses as well:
 * EASY BONUS:  If the result is odd, change it's color to salmon.
 * MEDIUM BONUS:  Use a single event listener to accomplish this task, rather
 * than 5 of them.
 */

// Pseudocode
  // Define cached elements
  // Write functions
    // add
    // subtract
    // multiply
    // divide
  // Render result


  const input1 = document.getElementById("math-input1")
  const input2 = document.getElementById("math-input2")
  const mathResult = document.getElementById("math-result")
  const plusBtn = document.getElementById("plus")
  const minusBtn = document.getElementById("minus")
  const timesBtn = document.getElementById("times")
  const dividedBtn = document.getElementById("divided")
  
  plusBtn.addEventListener('click', function () {
    // Store result of adding input 1 and input 2
    let result = parseInt(input1.value) + parseInt(input2.value)
    // Display the result in HTML (mathResult)
    mathResult.innerText = result
    isOdd(result)
  })
  
  minusBtn.addEventListener('click', function () {
    let result = parseInt(input1.value) - parseInt(input2.value)
    mathResult.innerText = result
    isOdd(result)
  })
  
  timesBtn.addEventListener('click', function () {
    let result = parseInt(input1.value) * parseInt(input2.value)
    mathResult.innerText = result
    isOdd(result)
  })
  
  dividedBtn.addEventListener('click', function () {
    let result = parseInt(input1.value) / parseInt(input2.value)
    mathResult.innerText = result
    isOdd(result)
  })
  
  function isOdd(number) {
    if (number % 2) {
      mathResult.style.color = 'salmon'
    } else {
      mathResult.style.color = 'black'
    }
  }