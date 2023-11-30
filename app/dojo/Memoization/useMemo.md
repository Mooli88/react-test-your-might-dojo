# useMemo

**Its recommended to only run the test when you think you got the answer as the tests will revel the solution.**

Some of the solutions to the challenges in this section are not definitive (I left comments to make it clear), so feel free to change the test condition or skip it based on your approach.

### Purpose

`useMemo` is used for memoization, a technique to optimize expensive calculations or operations by caching their results.

### Use Case

When you have a component that re-renders frequently, and you want to prevent the recalculation of a value unless its dependencies change.

### Benefit

It helps in avoiding unnecessary recalculations, reducing the overall computational load and improving the responsiveness of your application.

### Drawback

Memoization comes with a trade-off.

- Excessive usage can lead to memory-related performance issues, and in some cases,
- Overhead of managing the memoized values might outweigh the performance gain.
- Adds excessive syntax for callback definition, so may complicate the code.

### Consideration

Use `useMemo` judiciously for computationally expensive operations, and consider whether the potential memory overhead is acceptable for your specific use case.
