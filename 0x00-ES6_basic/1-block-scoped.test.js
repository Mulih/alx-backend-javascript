// Import the taskBlock function
import taskBlock from './1-block-scoped.js';

describe('taskBlock function', () => {
  it('should always return [false, true]', () => {
    expect(taskBlock(true)).toStrictEqual([false, true]);
    expect(taskBlock(false)).toStrictEqual([false, true]);
  });
});
