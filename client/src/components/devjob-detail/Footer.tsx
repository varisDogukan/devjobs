import styled from "styled-components";
import ButtonLink from "../button/ButtonLink";
import mediaQuery from "@/styles/mediaQuery";
import Text from "../text/Text";

type FooterProps = {
  position?: string;
  company?: string;
  apply?: string;
};

export default function Footer({ position, company, apply }: FooterProps) {
  return (
    <Wrapper>
      <div className='container'>
        <div className='footer-content'>
          <Text variant='medium'>{position}</Text>
          <Text variant='withoutThemeNormal'>{company} Digital Inc.</Text>
        </div>

        <ButtonLink size='custom' type='link' width='141px' url={apply}>
          Apply Now
        </ButtonLink>
      </div>
    </Wrapper>
  );
}

/*
=========== STYLES =================
*/
const Wrapper = styled.footer`
  background-color: var(--secondary-bg);
  padding: 25px 0 23px;
  border-radius: 6px;

  .footer-content {
    display: none;
  }

  @media ${mediaQuery.tablet} {
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .footer-content {
        display: block;
      }
    }
  }

  @media ${mediaQuery.desktop} {
    padding: 23px 0 22px;
  }
`;
