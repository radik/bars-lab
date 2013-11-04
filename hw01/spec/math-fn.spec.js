describe("Математические функции:", function() {

  // multiply
  it("Функция multiply должна быть определена", function() {
    expect(multiply).toBeDefined();
  });

  it("Вызов multiply на правильных параметрах", function() {
    expect(multiply(5)).toBe(25);
    expect(multiply(5, 6)).toBe(30);
  });

  it("Неправильный вызов multiply", function() {
    expect(multiply()).toThrow(new Error("Invalid arguments"));
    expect(multiply("1","2")).toThrow(new Error("Invalid arguments"));
    expect(multiply(1, NaN)).toThrow(new Error("Invalid arguments"));
    expect(multiply(null, 3)).toThrow(new Error("Invalid arguments"));
  });

  // factorial
  it("Функция factorial должна быть определена", function() {
    expect(factorial).toBeDefined();
  });

  it("Вызов factorial на правильных параметрах", function() {
    expect(factorial(5)).toBe(60);
  });

  // nfib
  it("Функция nfib должна быть определена", function() {
    expect(nfib).toBeDefined();
  });

  it("Вызов nfib на правильных параметрах", function() {
    expect(nfib(5)).toBe(3);
  });
});