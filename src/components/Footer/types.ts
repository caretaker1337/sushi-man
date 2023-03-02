export interface TMenuItem {
  anchor: string;
  text: string;
}

export interface TProps {
  inner?: boolean;
  menuItems: TMenuItem[];
}
