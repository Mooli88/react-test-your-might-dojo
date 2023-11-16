/* eslint-disable @typescript-eslint/ban-ts-comment */
import { vi } from "vitest";

vi.mock("react", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react")>();

  return {
    ...actual,
    // useMemo: vi.fn().mockImplementation((fn) => fn()),
  };
});
