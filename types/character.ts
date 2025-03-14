export interface Character {
  meta: CharacterMeta;
  intro: CharacterIntro;
  player: PlayerInfo;
  attributes: CharacterAttributes;
  directives: CharacterDerivatives;
  healthState: HealthState;
  skills: SkillState[];
  gearAndPossessions: GearAndPossessions[];
  myStory: string;
  backstory: Backstory;
  wealth: Wealth;
  notes: string;
}

export interface CharacterMeta {
  id: string;
  gameMudule: GameModule;
}

export interface GameModule {
  name: string;
  version: string;
  type: "official" | "homebrew";
}

export interface CharacterIntro {
  name: string;
  occupation: Occupation;
  age: number;
  birthplace: string;
  pronoun: string;
  residence: string;
}

export interface Occupation {
  name: string;
  description: string;
  crRange: [number, number];
  skills: SkillCombination[] | string;
  attributes: AttributeCombinationAlternatives[];
}

export interface SkillCombination {
  skillKeys: string[];
  totalChoices?: number;
}

export interface AttributeCombinationAlternatives {
  attributeCombination: AttributeCombination[];
}

export interface AttributeCombination {
  attribute: string;
  multiplier: number;
}

export interface PlayerInfo {
  name: string;
  bio?: string;
  email?: string;
}

export interface CharacterAttributes {
  strength: Attribute;
  constitution: Attribute;
  size: Attribute;
  dexterity: Attribute;
  appearance: Attribute;
  education: Attribute;
  intelligence: Attribute;
  power: Attribute;
}

export interface Attribute {
  base: number;
  modifiers: AttrModifier[];
  current: number;
  tempModifiers?: AttrModifier[];
}

export interface AttrModifier {
  type: "age" | "experience" | "magic" | "trauma" | "harm" | "other";
  remark?: string;
  value: number;
}

export interface CharacterDerivatives {
  hp: {
    current: number;
    max: number;
    pulpHp?: boolean;
  };
  mp: {
    current: number;
    max: number;
  };
  move: {
    base: number;
    current: number;
  };
  sanity: {
    current: number;
    max: number;
    starting: number;
  };
  luck: {
    current: number;
    fixed?: boolean;
  };
  build: number;
  damageBonus: DiceModifier;
}

export interface Insanity {
  turns: number;
  hours: number;
  description: string;
}

export interface HealthState {
  majorWound?: boolean;
  onconscious?: boolean;
  dying?: boolean;
  temp_insanity: Insanity | boolean;
  indefinite_insanity: Insanity | boolean;
}

type BasicDiceExpression =
  | number
  | `${number}`
  | `${number}d${number}`
  | `+${number}d${number}`
  | `-${number}d${number}`;

type DicePart =
  | `${number}d${number}`
  | `+${number}d${number}`
  | `-${number}d${number}`;

type NumberModifier = `+${number}` | `-${number}`;

type CompoundDiceExpression =
  | `${DicePart}${NumberModifier}`
  | `${DicePart}${DicePart}`
  | `${DicePart}${DicePart}${NumberModifier}`
  | `${DicePart}${DicePart}${DicePart}${NumberModifier}`;

export type DiceModifier = BasicDiceExpression | CompoundDiceExpression;

export interface SkillState {
  skillKey: string;
  base: number;
  modifiers: SkillModifier[];
  current: number;
}

export interface SkillModifier {
  type: "bonus" | "occupation" | "interest" | "other";
  bonusSource?: string;
  remark?: string;
  value: number;
}

export interface GearAndPossessions {
  id: string;
  name: string;
  quantity: string;
  weaponInfo?: WeaponInfo;
}

export interface WeaponInfo {
  useSkillKey: string;
  damage: DiceModifier;
  numberOfAttacks: number;
  range: number | "-";
  ammo: number | "-";
  malfunction: number;
}

export interface Backstory {
  personalDescription: string;
  ideasAndBeliefs: string;
  significantPeople: string;
  meaningfulLocations: string;
  treasuredPossessions: string;
  traits: string;
  injuriesAndScars: string;
  phobiasAndManias: string;
  arcaneTomesAndSpells: string;
  encountersWithStrangeEntities: string;
}

export interface Wealth {
  spendingLevel: string;
  cash: string;
  assets: string;
}
