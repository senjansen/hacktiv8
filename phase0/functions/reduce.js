let arr = [[1, 2], [2, 3], [3, 4]]

console.log(
  arr.reduce(function (sum, b) {
    return (
      sum +
      b.reduce(function (c, d) {
        return c + d
      }, 0)
    )
  }, 0)
)
