import { Rect } from '@/game/geometry/rect';
import { LandBlock } from '../landBlock/landBlock';
import { Prop } from '../prop';

export function flattenLandBlocks(landBlocks: LandBlock[][]) {
  const result: LandBlock[] = [];
  landBlocks.forEach((blocks) => {
    result.push(...blocks);
  });
  return  result;
}

export class Land extends Prop {
  constructor(
    renderScope: Rect,
    private landBlocks: LandBlock[][],
    name?: string,
  ) {
    super(
      renderScope,
    );
  }

  public get LandBlocks() {
    return this.landBlocks;
  }

  public get FormalChildren() {
    return [];
  }

  public get MySnapshots() {
    return [];
  }
}
