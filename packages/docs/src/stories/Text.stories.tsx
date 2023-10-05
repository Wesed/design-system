import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@design-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga deserunt, quam accusamus dolorum est animi, quos ipsam alias ad culpa consequuntur? Omnis maiores alias officiis, odio eius sit pariatur dolorum.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
