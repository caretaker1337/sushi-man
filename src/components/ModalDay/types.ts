export interface TContactsLink {
  type: string;
  url: string;
}

export interface TProps {
  close: () => void;
  contactsLinks: TContactsLink[];
  isOpened: boolean;
  text: string;
  title: string;
}
