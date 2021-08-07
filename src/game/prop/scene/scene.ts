import { Rect } from '@/game/geometry/rect';
import { Building } from '../building/building';
import { Facility } from '../facility/facility';
import { Land } from '../land/land';
import { Npc } from '../npc/npc';
import { Prop } from '../prop';

 
export class Scene extends Prop  {
  constructor(
    renderScope: Rect,
    private land: Land,
    private buildings: Building[],
    private facilities: Facility[],
    private npcs: Npc[],
  ) {
    super(
      renderScope,
    );
  }

  public get FormalChildren() {
    const result: Prop[] = [];
    result.push(this.land);
    result.push(...this.buildings);
    result.push(...this.facilities);
    result.push(...this.npcs);
    return result;
  }

  public get Land() {
    return this.land;
  }

  public get Buildings() {
    return this.buildings;
  }

  public get Facilities() {
    return this.facilities;
  }

  public get Npcs() {
    return this.npcs;
  }

  public get MySnapshots() {
    return [];
  }
}
