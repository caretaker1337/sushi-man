export interface TAbout {
  locale: string;
  text: string;
  title: string;
}

export interface TProps {
  about: {
    about_cs: TAbout;
    about_ru: TAbout;
  };
}
