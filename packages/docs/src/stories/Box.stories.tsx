import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@design-ui/react'

export default {
  title: 'Surface/Box',
  component: Box,
  args: {
    children: (
      <>
        <span> Testando o Elemento </span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
