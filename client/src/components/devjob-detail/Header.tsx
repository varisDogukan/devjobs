import styled from "styled-components";
import Text from "../text/Text";
import ButtonLink from "../button/ButtonLink";
import mediaQuery from "@/styles/mediaQuery";

type HeaderProps = {
  margin: string;
  company?: string;
  website?: string;
  logoBg?: string;
  logo?: string;
};

export default function Header({
  margin,
  logoBg = "white",
  logo,
  company,
  website,
}: HeaderProps) {
  return (
    <Wrapper $logoBg={logoBg} $margin={margin} className='container'>
      <div className='header'>
        <div className='logo-container'>
          <img src={logo} alt={`${company} logo`} />
        </div>

        <div className='header-content'>
          <div>
            <Text variant='large'>{company}</Text>
            <Text variant='withoutThemeNormal'>{company}.com</Text>
          </div>

          <ButtonLink
            size='custom'
            type='link'
            width='147px'
            theme={true}
            url={website}
            target='_blank'
          >
            Company Site
          </ButtonLink>
        </div>
      </div>
    </Wrapper>
  );
}

/*
=========== STYLES =================
*/
type StyleType = {
  $logoBg: string;
  $margin: string;
};

const Wrapper = styled.header<StyleType>`
  .header {
    position: relative;
    background-color: var(--secondary-bg);
    margin-top: ${({ $margin }) => $margin};
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 49px 0 32px;

    .logo-container {
      width: 50px;
      height: 50px;
      border-radius: 15px;
      overflow: hidden;
      position: absolute;
      display: grid;
      place-content: center;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: ${({ $logoBg }) => $logoBg};
    }

    .header-content {
      text-align: left;
      p:first-of-type {
        margin-bottom: 10px;
      }

      a {
        margin-top: 24px;
      }
    }

    @media ${mediaQuery.tablet} {
      flex-direction: row;
      padding: 0;
      border-top-left-radius: 0;
      overflow: hidden;

      .logo-container {
        position: static;
        width: 140px;
        height: 162px;
        border-radius: 0;
        transform: translate(0, 0);

        img {
          width: 81px;
        }
      }

      .header-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex: 1;
        padding: 46px 43px 46px 40px;

        a {
          margin-top: 0;
        }
      }
    }
  }
`;
