const Calc = require('./opertion3');

const data = new Calc(24, 22);

describe('addition', () => {
  test('test 1', () => {
    expect(data.add()).toBe(46);
  });

  test('test 2', () => {
    expect(data.add()).toBeLessThan(50);
  });

  test('test 3', () => {
    expect(data.add()).toBeGreaterThan(10);
  });
});

describe('subtraction', () => {
  test('test 1', () => {
    expect(data.subtract()).toBe(2);
  });

  test('test 2', () => {
    expect(data.subtract()).toBeGreaterThanOrEqual(1);
  });

  test('test 3', () => {
    expect(data.subtract()).toBeLessThan(6);
  });
});

describe('multiplication', () => {
  test('test 1', () => {
    expect(data.multiply()).toBe(528);
  });

  test('test 2', () => {
    expect(data.multiply()).toBeGreaterThan(400);
  });

  test('test 3', () => {
    expect(data.multiply()).toBeLessThan(1000);
  });
});

describe('division', () => {
  test('test 1', () => {
    expect(data.divide()).toBeGreaterThan(0);
  });

  test('test 2', () => {
    expect(data.divide()).toBeGreaterThanOrEqual(1.09);
  });

  test('test 3', () => {
    expect(data.divide()).toBeLessThan(3);
  });
});