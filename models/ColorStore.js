import { types as t } from "mobx-state-tree";
import rgb2hsl from "../utils/colorUtil";

const setuphsl = (left, top) => {
  let colorPositionLeft = (left * 255) / 100;
  let colorPositionTop = (top * 255) / 100;

  let r = Math.round(255 - colorPositionTop);
  let g = Math.round(r * (1 - colorPositionLeft / 255));
  let b = Math.round(
    255 * (1 - colorPositionTop / 255) * (1 - colorPositionLeft / 255) -
      colorPositionTop / 255
  );

  const hsl = rgb2hsl(r, g, b);
  return hsl;
};

const ColorBaseStore = t
  .model({
    hsl: t.string
  })
  .actions(self => ({
    getHsl(a, b) {
      self.hsl = setuphsl(a, b);
    }
  }));

export const ColorStore = ColorBaseStore.create({
  hsl: "hsl(340, 33%, 98%)"
});
