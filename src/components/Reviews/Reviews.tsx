import React from "react";
import Slider, { Settings } from "react-slick";

import { TProps, TReview } from "./types";
import useTranslation from "~/intl/useTranslation";
import {
  StyledWrapper,
  StyledLayout,
  StyledTitle,
  StyledItem,
  StyledItemLink,
  StyledItemImage,
  StyledButton,
} from "./styled";
import { StyledContainer } from "~/components/Layout/styled";

const Reviews: React.FC<TProps> = ({ reviews }) => {
  const { t } = useTranslation();
  const reviewsTitle = t("reviewsTitle");
  const reviewsButton = t("reviewsButton");

  const settings: Settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1235,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleClick = (): void => {
    const productsSection = document.getElementById("products-section");

    productsSection && productsSection.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <StyledWrapper id="reviews-section">
      <StyledContainer>
        <StyledLayout>
          <StyledTitle>{reviewsTitle}</StyledTitle>
          {reviews && (
            <Slider {...settings}>
              {!!reviews.length &&
                reviews.map(
                  (
                    { id, image }: TReview,
                    index: number
                  ): React.ReactElement => (
                    <StyledItem key={`${id}-${index}-review`}>
                      <StyledItemLink
                        href="https://www.instagram.com/sushiman_prague"
                        target="_blank"
                      >
                        <StyledItemImage src={image[0].url} alt="Review" />
                      </StyledItemLink>
                    </StyledItem>
                  )
                )}
            </Slider>
          )}

          <StyledButton onClick={handleClick}>{reviewsButton}</StyledButton>
        </StyledLayout>
      </StyledContainer>
    </StyledWrapper>
  );
};

export { Reviews };
