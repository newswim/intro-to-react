import React from 'react'
// import theme from 'mdx-deck/themes'
import styled from 'styled-components'
import { comic as theme } from 'mdx-deck/themes'
import tomorrow from 'react-syntax-highlighter/styles/prism/tomorrow'

const Li = styled.li`
  list-styled: none;
`

const black = '#000'
const grey1 = '#222'
const white = '#fff'
const ltblu = '#dae8ff'
const tanbg = '#fff6e4'

export default {
  ...theme,
  prism: {
    style: tomorrow
  },
  colors: {
    background: tanbg,
    codeBackground: white,
    code: black,
    text: grey1,
    link: '#ff7115',
    visitedLink: '#ff7115'
  },
  componenets: {
    li: Li
  }
}
