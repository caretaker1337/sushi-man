import { css } from "~/theme";

const slick = css`
  .slick-slider {
    box-sizing: border-box;
    display: block;
    position: relative;
    touch-action: pan-y;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    display: block;
    margin-left: ${({ theme }) => theme.rem(-5)};
    margin-right: ${({ theme }) => theme.rem(-5)};
    overflow: hidden;
    padding: 0;
    position: relative;
  }

  .slick-list:focus {
    outline: none;
  }

  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    display: block;
    left: 0;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: 0;
  }

  .slick-track:before,
  .slick-track:after {
    display: table;
    content: "";
  }

  .slick-track:after {
    clear: both;
  }

  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: ${({ theme }) => theme.rem(1)};

    & > div {
      padding: 0 ${({ theme }) => theme.rem(5)};
    }

    &:focus {
      outline: none;
    }
  }

  [dir="rtl"] .slick-slide {
    float: right;
  }

  .slick-slide img {
    display: block;
    width: 100%;
  }

  .slick-slide.slick-loading img {
    display: none;
  }

  .slick-slide.dragging img {
    pointer-events: none;
  }

  .slick-initialized .slick-slide {
    display: block;
  }

  .slick-loading .slick-slide {
    visibility: hidden;
  }

  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: ${({ theme }) => theme.rem(1)} solid transparent;
  }

  .slick-arrow.slick-hidden {
    display: none;
  }

  .slick-arrow {
    background: url("/images/reviews_arrow_bg.png") center center/100% 100%
      no-repeat;
    border: none;
    cursor: pointer;
    height: ${({ theme }) => theme.rem(60)};
    position: absolute;
    text-indent: ${({ theme }) => theme.rem(-9999)};
    top: 50%;
    width: ${({ theme }) => theme.rem(40)};

    @media (max-width: 600px) {
      display: none !important;
    }

    &:focus {
      outline: none;
    }
  }

  .slick-prev {
    left: ${({ theme }) => theme.rem(-80)};
    transform: translateY(-50%);

    @media (max-width: 600px) {
      left: ${({ theme }) => theme.rem(-38)};
    }
  }

  .slick-next {
    right: ${({ theme }) => theme.rem(-80)};
    transform-origin: center top;
    transform: rotate(180deg) translateY(-50%);

    @media (max-width: 600px) {
      right: ${({ theme }) => theme.rem(-38)};
    }
  }

  .slick-center {
    transform: scale(1.2);
    transform-origin: center ${({ theme }) => theme.rem(415)};

    @media (max-width: 600px) {
      transform-origin: center center;
      transform: none;
    }
  }
`;

export { slick };
