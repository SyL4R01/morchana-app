import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FONT_FAMILY, COLORS, FONT_BY_WEIGHT } from '../styles'
import styled from '@emotion/native'

export const Header = styled(View)({
  // flexDirection: 'row',
  alignItems: 'center',
})

export const Title = styled(Text)({
  fontFamily: FONT_FAMILY,
  fontStyle: 'normal',
  fontSize: 28,
  lineHeight: 36,
  alignItems: 'center',
  color: COLORS.PRIMARY_DARK,
  textAlign: 'center',
  width: '100%',
})

export const Subtitle = styled(Text)({
  fontFamily: FONT_BY_WEIGHT.BOLD,
  fontWeight: 'bold',
  fontSize: 16,
  lineHeight: 24,
  alignItems: 'center',
  color: COLORS.GRAY_2,
  textAlign: 'center',
})

export const Link = styled(Text)({
  fontFamily: FONT_FAMILY,
  fontSize: 16,
  lineHeight: 30,
  alignItems: 'center',
  color: COLORS.BLUE,
  textAlign: 'center',
})

export const WhiteText = styled(Text)({
  fontFamily: FONT_FAMILY,
  fontStyle: 'normal',
  fontSize: 16,
  lineHeight: 30,
  color: COLORS.WHITE,
})

export const ColorText = styled(Text)`
  font-family: ${FONT_FAMILY};
  font-style: normal;
  font-size: 16px;
  line-height: 30px;
  color: ${props => props.color};
`
