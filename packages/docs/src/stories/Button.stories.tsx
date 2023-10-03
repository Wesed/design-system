import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@design-ui/react/src/button'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'teste',
  },
} as Meta
export const Primary: StoryObj = {
  args: {
    children: 'Ola',
  },
}

export const Secondary: StoryObj = {
  args: {
    children: 'teste',
  },
}
