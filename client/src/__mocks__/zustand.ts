import * as zustand from "zustand";
import { act } from "@testing-library/react";

const { create: actualCreate } = jest.requireActual<typeof zustand>("zustand");

export const storeResetFns = new Set<() => void>();

const createMock = <T>(stateCreator: zustand.StateCreator<T>) => {
  const store = actualCreate(stateCreator);
  const initialState = store.getState();
  storeResetFns.add(() => store.setState(initialState, true));
  return store;
};

export const create = <T>(stateCreator: zustand.StateCreator<T>) => {
  console.log("zustand create mock");
  return createMock(stateCreator);
};

afterEach(() => {
  act(() => {
    storeResetFns.forEach((resetFn) => resetFn());
  });
});
