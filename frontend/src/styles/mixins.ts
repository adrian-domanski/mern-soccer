import tw, { css } from 'twin.macro';

export enum FontTypes {
  Heading1 = 'Heading1',
  Heading2 = 'Heading2',
  Heading3 = 'Heading3',
  Paragraph = 'Paragraph',
  Heading5 = 'Heading5',
}

/**
 * Use this mixin to set typography
 */

export const setTypography = (category: FontTypes) => {
  switch (category) {
    case FontTypes.Heading1:
      return css`
        letter-spacing: -0.03em;
        line-height: 110%;
        font-size: 42px;
        font-weight: 600;

        ${tw`text-gray-800 lg:text-[52px] font-primary`}
      `;
    case FontTypes.Heading2:
      return css`
        letter-spacing: -0.03em;
        line-height: 120%;
        font-size: 28px;
        font-weight: 600;

        ${tw`text-gray-800 font-primary`}
      `;
    case FontTypes.Heading3:
      return css`
        letter-spacing: -0.03em;
        line-height: 120%;
        font-weight: 600;

        ${tw`text-gray-800 text-[20px] lg:text-[25px] font-primary`}
      `;
    case FontTypes.Paragraph:
      return css`
        font-size: 16px;
        line-height: 140%;
        letter-spacing: -0.03em;

        ${tw`text-gray-800 lg:text-[18px] font-normal font-secondary`}
      `;
    case FontTypes.Heading5:
      return css`
        letter-spacing: 0.05em;
        line-height: 140%;
        margin-bottom: 1rem;
        font-size: 14px;
        font-weight: 600;
        white-space: pre-line;

        ${tw`text-gray-800 font-primary uppercase`}
      `;
    default:
      break;
  }
};
