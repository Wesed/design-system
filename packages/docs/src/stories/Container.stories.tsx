import type { Meta, StoryObj } from '@storybook/react'
import { Container } from '@design-ui/react/src/container'

export default {
  title: 'Container',
  component: Container,
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
