import { fireEvent, render, screen, within } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import { UseMemoNo1 } from "./useMemo_01";
import * as React from "react";

test("useMemo_01 should NOT use useMemo hook", () => {
  const useMemoSpy = vi.spyOn(React, "useMemo");

  render(<UseMemoNo1 />);
  const incrementBtn = screen.getByRole("button", { name: "Increment" });
  fireEvent.click(incrementBtn);
  fireEvent.click(incrementBtn);

  expect(useMemoSpy).not.toHaveBeenCalled();
  within(screen.getByTestId("useMemo_#1_counter")).getByText(
    "render count - 3"
  );
});
