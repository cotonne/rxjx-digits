import {describe} from 'selenium-webdriver/testing';
import {counting, PINS} from './counter.service';

describe('CountingFunction', () => {
  it('should increase by 1', () => {
    const previous = [0, 0, 0, 0] as PINS;
    const count = counting(previous);
    expect(count).toEqual([1, 0, 0, 0]);
  });
});
