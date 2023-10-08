import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',
  transition: '.2s ease-in-out',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
    marginLeft: '$1',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    color: '$gray500',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$green500',

        '&:not(:disabled):hover': {
          background: '$green300',
        },

        '&:disabled': {
          background: '$gray200',
        },
      },

      secondary: {
        color: '$green300',
        border: '2px solid $green500',

        '&:not(:disabled):hover': {
          background: '$green500',
          color: '$white',
        },

        '&:disabled': {
          background: '$gray200',
          borderColor: '$gray200',
        },
      },

      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$gray200',
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
