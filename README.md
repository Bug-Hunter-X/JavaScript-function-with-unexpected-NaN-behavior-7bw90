# JavaScript Function with Unexpected NaN Behavior

This repository demonstrates an uncommon bug in JavaScript related to handling NaN (Not a Number) values within a function.

The `foo` function is designed to add two numbers, handling null values by returning 0. However, when NaN is passed as an argument, the function unexpectedly returns NaN instead of managing it appropriately.

The bug is explained in `bug.js`, and a solution demonstrating how to address NaN values is provided in `bugSolution.js`. 