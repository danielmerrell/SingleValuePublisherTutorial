import { Publisher } from "../publisher";
import { usePublishedValue } from "./use-published-value";
import { renderHook, act } from "@testing-library/react";

describe('usePublishedValue', () => {
  it('returns the value of the publisher', () => {
    const publisher = new Publisher('x');

    const { result } = renderHook(() => usePublishedValue(publisher));
    expect(result.current).toEqual('x')
  });

  it('updates the current value when the publisher value changes', () => {
    const publisher = new Publisher('x');

    const { result } = renderHook(() => usePublishedValue(publisher));

    act(() => publisher.updateValue('y'));

    expect(result.current).toEqual('y');
  });
});