import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@design-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/wesed.png',
    alt: 'Weslley Eduardo',
  }, // spell-checker: disable  },:
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WidthFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
