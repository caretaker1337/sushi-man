export type TCategoryTypes =
  | "isPoke"
  | "isRoll"
  | "isSet"
  | "isStarter"
  | "isDrink"
  | "isCaviar";

export interface TCategory {
  name: string;
  type: TCategoryTypes;
}

export interface TProps {
  inner?: boolean;
  title: string;
}
