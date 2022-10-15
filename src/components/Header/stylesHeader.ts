import { CSS } from '@nextui-org/react'

export const styleContainer: CSS = {
  height: 300,
  p: 0,
  py: 20,
  m: 0,
  bg: '$backgroundAlpha',
  bottom: 0,
  zIndex: 1,
  display: 'grid',
  alignContent: 'center',
  justifyContent: 'center',
  position: 'relative',
  borderBottom: '2px $success solid',
}

export const styleText: CSS = {
  lineHeight: '$xs',
  fontSize: 100,
  p: 0,
  m: 0,
  zIndex: 1,
  '@xsMax': {
    fontSize: 80,
    textAlign: 'center',
  },
}

export const styledHead: CSS = {
  bg: '$backgroundAlpha',
  display: 'flex',
  justifyContent: 'end',
  alignContent: 'center',
  borderBottom: '2px $success solid',
  py: 10,
}
