import { strict as assert } from "node:assert";
import { test } from "node:test";
import {
  getDownloadFilename,
  isResultSaved,
  selectResult,
  toggleSavedResult,
} from "../lib/generatorState.js";

test("selectResult switches to a valid result and keeps current for invalid indexes", () => {
  assert.equal(selectResult(0, 2, 4), 2);
  assert.equal(selectResult(2, -1, 4), 2);
  assert.equal(selectResult(2, 4, 4), 2);
});

test("toggleSavedResult adds and removes image sources", () => {
  const first = toggleSavedResult([], "/assets/a.png");
  assert.deepEqual(first, ["/assets/a.png"]);
  assert.equal(isResultSaved(first, "/assets/a.png"), true);

  const second = toggleSavedResult(first, "/assets/a.png");
  assert.deepEqual(second, []);
  assert.equal(isResultSaved(second, "/assets/a.png"), false);
});

test("getDownloadFilename creates stable png filenames", () => {
  assert.equal(getDownloadFilename("卫星与地球", 0), "image-2-1-wei-xing-yu-di-qiu.png");
  assert.equal(getDownloadFilename("Lab Result", 3), "image-2-4-lab-result.png");
});
