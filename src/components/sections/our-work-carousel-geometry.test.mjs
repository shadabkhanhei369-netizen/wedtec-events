import assert from "node:assert/strict";
import test from "node:test";
import {
  getCenteredScrollLeft,
  getLoopRecenter,
  getScaleOverflowPadding,
} from "./our-work-carousel-geometry.mjs";

test("centers a card using its untransformed layout dimensions", () => {
  assert.equal(getCenteredScrollLeft(800, 200, 1000), 400);
  assert.equal(getCenteredScrollLeft(100, 200, 1000), 0);
});

test("recenters cards at the start of the loop into a safe middle copy", () => {
  assert.deepEqual(getLoopRecenter(0, 8, 5), {
    centeredIndex: 8,
    cycles: 1,
  });
  assert.deepEqual(getLoopRecenter(7, 8, 5), {
    centeredIndex: 15,
    cycles: 1,
  });
});

test("recenters cards at the end of the loop without changing their item", () => {
  assert.deepEqual(getLoopRecenter(39, 8, 5), {
    centeredIndex: 31,
    cycles: -1,
  });
  assert.deepEqual(getLoopRecenter(32, 8, 5), {
    centeredIndex: 24,
    cycles: -1,
  });
});

test("keeps enough vertical room for the enlarged center card", () => {
  assert.equal(getScaleOverflowPadding(334, 1.2), 42);
});
