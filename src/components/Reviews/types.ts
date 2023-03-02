export interface TReview {
  id: number;
  image: [
    {
      url: string;
    }
  ];
}

export interface TProps {
  reviews: TReview[];
}
