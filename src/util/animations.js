import BezierEasing from 'bezier-easing'

export const cardEasing = new BezierEasing(0.33, 0, 0.67, 1)
export const textEasing = new BezierEasing(0.33, 0, 0, 1)

const animations = {
  cardEasing,
  textEasing,
}

export default animations
