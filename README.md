Instructions: You've been given the HTML template for a JavaScript
calculator below. Implement functionality such that when two numbers are
entered in the input fields, pressing one of the 'operator' buttons
results in the mathematical calculation for those two numbers.

For example: If the boxes contain 4 and 2, pressing the "+" button should
display the number 6. If the "-" button is pressed, 2 should be displayed.
If the "*" button is pressed, 8 should be displayed. If the "/" button
is pressed, 2 should be displayed.

There are bounuses as well:
EASY BONUS:  If the result is odd, change it's color to salmon.
MEDIUM BONUS:  Use a single event listener to accomplish this task, rather
than 5 of them.

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="" href="./css/style.css" />
    <script defer src="./js/app.js"></script>
    <title>Simple Calculator</title>
  </head>
  <body>
    <div id="input-container">
      <input class="math-input" id="math-input1" value="0" />
      <span id="operator-display">?</span>
      <input class="math-input" id="math-input2" value="0" />
      =
      <span id="math-result">0</span>
    </div>
    <div id="btn-container">
      <button class="operator" id="plus">+</button>
      <button class="operator" id="minus">-</button>
      <button class="operator" id="times">*</button>
      <button class="operator" id="divided">/</button>
    </div>
  </body>
</html>
```
# Calculator
