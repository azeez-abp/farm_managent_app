import counterSlice from '../../src/feature/counter/counter-slice';

test('reducers', () => {
  let state;
  state = counterSlice(undefined, {});

  expect(state).toEqual({value:0});
});
