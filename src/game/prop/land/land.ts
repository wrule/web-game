import { Point } from '@/game/geometry/point';
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
    blockSize: number,
    private landBlocks: LandBlock[][],
  ) {
    super(renderScope);
    for (let y = 0; y < this.landBlocks.length; ++y) {
      for (let x = 0; x < this.landBlocks[y].length; ++x) {
        this.landBlocks[y][x].RenderScope.MoveTo(new Point(x * blockSize, y * blockSize));
      }
    }
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
