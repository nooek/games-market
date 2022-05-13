const c = (x) => {
  if (x === true) {
    throw Error("e true essa merda")
  }
}
const a = () => {
  const b = true
  c(b)
  console.log("oi")
  console.log("oi")
  console.log("oi")
  console.log("oi")
}
a()
