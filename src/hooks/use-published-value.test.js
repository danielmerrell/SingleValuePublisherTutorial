import { Publisher } from "../publisher";
import { usePublishedValue } from "./use-published-value";
import { renderHook } from "@testing-library/react";

describe('usePublishedValue', () => {
  it('returns the value of the publisher', () => {
    const publisher = new Publisher('x');

    const { result } = renderHook(() => usePublishedValue(publisher));
    expect(result.current).toEqual('x')
  });
});