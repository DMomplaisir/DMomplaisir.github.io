/**
 * View Transitions - Elevation-style animations
 * Matches "Elevation Grid + Blueprint Light" design system:
 * subtle rise (like elevation markers) with fade.
 */
import type { TransitionDirectionalAnimations } from 'astro:transitions';

const DURATION = '0.28s';
const EASING = 'cubic-bezier(0.22, 1, 0.36, 1)';

export const elevationTransition: TransitionDirectionalAnimations = {
  forwards: {
    old: { name: 'elevation-out', duration: DURATION, easing: EASING, fillMode: 'both' },
    new: { name: 'elevation-in', duration: DURATION, easing: EASING, fillMode: 'both' },
  },
  backwards: {
    old: { name: 'elevation-in', duration: DURATION, easing: EASING, fillMode: 'both', direction: 'reverse' },
    new: { name: 'elevation-out', duration: DURATION, easing: EASING, fillMode: 'both', direction: 'reverse' },
  },
};
