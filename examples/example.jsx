import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { withMedia, MediaQuery } from '../src/index.js';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

const query = new MediaQuery();
const media = query.getMedia();

const BtnWithoutProps = styled.button`

  ${media.largeDesktop`font-size:60px;`}
  ${media.desktop`font-size:40px;`}
  ${media.tablet`font-size:20px;`}
  ${media.mobile`font-size:10px;`}

  ${media.lessThan(500)`background-color: blue;`}
  ${media.greaterThan(700)`background-color: red;`}
  ${media.between(500, 700)`background-color: green;`}
`;

const BtnUsingProps = styled.button`
  ${props => props.viewport.isLargeDesktop() && css`font-size:60px;`}
  ${props => props.viewport.isDesktop() && css`font-size:40px;`}
  ${props => props.viewport.isTablet() && css`font-size:20px;`}
  ${props => props.viewport.isMobile() && css`font-size:10px;`}
`;


storiesOf('Button', module)
  .addDecorator(withInfo({
    inline: true
  }))
  .add('Using props', () => {
    const Btn = withMedia(BtnUsingProps);
    return <Btn>With props</Btn>;
  })
  .add('Using styled helper', () => (
    <BtnWithoutProps>Hello with styled helper</BtnWithoutProps>
  ));
