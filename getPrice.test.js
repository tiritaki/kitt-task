const getPrice = require("./getPrice")


test("Example with 10 min", () => {
    expect(
        getPrice(10)
    ).toEqual(20);
  });
  
test("Example with 11 min", () => {
    expect(
        getPrice(11)
    ).toEqual(22);
  });

test("Example with 20 min", () => {
    expect(
        getPrice(20)
    ).toEqual(22);
  });

test("Example with 150 min", () => {
    expect(
        getPrice(150)
    ).toEqual(60);
  });

test("Example with 1440 min", () => {
    expect(
        getPrice(1440)
    ).toEqual(60);
  });

test("Example with 2880 min", () => {
    expect(
        getPrice(2880)
    ).toEqual(105);
  });

test("Example with 1560 min", () => {
    expect(
        getPrice(1560)
    ).toEqual(104);
  });

test("Example with 1561 min", () => {
    expect(
        getPrice(1561)
    ).toEqual(105);
  });
 
test("Example with 20160 min", () => {
    expect(
        getPrice(20160)
    ).toEqual(210);
  });