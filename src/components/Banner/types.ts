export interface TBanner {
  image: {
    url: string;
  };
  locale: string;
  text: string;
  title: string;
}

export interface TProps {
  hero: {
    hero_cs: TBanner;
    hero_ru: TBanner;
  };
  inner?: boolean;
}
