import { Rect } from '@/game/geometry/rect';
import { LandBlock } from '../landBlock/landBlock';
import { Prop } from '../prop';

export function flattenLandBlocks(landBlocks: LandBlock[][]) {
  const result: LandBlock[] = [];
  landBlocks.forEach((blocks) => {
    result.push(...blocks);
  });
  return result;
}

export class Land extends Prop {
  constructor(
    renderScope: Rect,
    private landBlocks: LandBlock[][],
  ) {
    super(renderScope);
    this.formalChildren = flattenLandBlocks(this.landBlocks);
  }

  public get LandBlocks() {
    return this.landBlocks;
  }

  private formalChildren: Prop[] = [];

  public get FormalChildren() {
    return this.formalChildren;
  }

  public get MySnapshots() {
    return [];
  }
}
