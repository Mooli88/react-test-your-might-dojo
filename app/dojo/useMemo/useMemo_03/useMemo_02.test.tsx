import { fireEvent, render, screen, within } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import { UseMemoNo2 } from "./useMemo_02";
import * as React from "react";

// test("useMemo_02 should NOT use useMemo hook", () => {
//   const useMemoSpy = vi.spyOn(React, "useMemo");

//   render(<UseMemoNo2 />);
//   const incrementBtn = screen.getByRole("button", { name: "Increment" });
//   fireEvent.click(incrementBtn);
//   fireEvent.click(incrementBtn);

//   expect(useMemoSpy).toHaveBeenNthCalledWith(1, expect.any(Function), [
//     0,
//     "useMemo_#2_counter",
//   ]);

//   expect(useMemoSpy).toHaveBeenNthCalledWith(2, expect.any(Function), [
//     1,
//     "useMemo_#2_counter",
//   ]);
//   expect(useMemoSpy).toHaveBeenCalledTimes(3);
//   within(screen.getByTestId("useMemo_#2_counter")).getByText(
//     "render count - 3"
//   );
// });

test("useMemo_02 should produce a list of queue numbers on Add To Queue button click", () => {
  render(<UseMemoNo2 />);

  const addToQueueBtn = screen.getByRole("button", { name: "Add To Queue" });
  // get a list of queue numbers
  const items = [1, 2, 3, 4, 5];
  items.forEach((q) => {
    fireEvent.click(addToQueueBtn);
  });
  items.forEach((q) => {
    screen.getByText(`Queue No#${q}-useMemo_#2_queue-list`);
  });

  // Queue No#
});
