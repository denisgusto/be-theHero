import styled from 'styled-components';
import { darken } from 'polished';

import logo from '~/assets/logo.svg';

export const Logo = styled.img.attrs({
  src: logo,
  alt: 'Be The Hero',
})``;

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  img {
    height: 64px;
  }

  span {
    font-size: 20px;
    margin-left: 24px;
  }

  a {
    height: 60px;
    background: #e02041;
    border: 0;
    border-radius: 8px;
    color: #fff;
    font-weight: 700;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.06, '#e02041')};
    }

    width: 260px;
    margin-left: auto;
    margin-top: 0;
  }

  button {
    height: 60px;
    width: 60px;
    border-radius: 4px;
    border: 1px solid #dcdce6;
    background: transparent;
    margin-left: 16px;
    transition: border-color 0.2s;

    &:hover {
      border-color: #999;
    }
  }
`;

export const Incidents = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;

  li {
    background: #fff;
    padding: 24px;
    border-radius: 8px;
    position: relative;

    strong {
      display: block;
      margin-bottom: 16px;
      color: #41414d;
    }

    p {
      color: #737380;
      line-height: 21px;
      font-size: 16px;

      & + strong {
        margin-top: 32px;
      }
    }

    button {
      background: transparent;
      position: absolute;
      right: 24px;
      top: 24px;
      border: 0;
      transition: background 0.2s;

      svg {
        background: transparent;
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
