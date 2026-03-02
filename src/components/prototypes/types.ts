/**
 * Type definitions for Prototype components
 * Provides better IDE support and type safety
 */

/**
 * Common props shared across multiple components
 */
export interface BasePrototypeProps {
  /** Optional CSS class name */
  class?: string;
}

/**
 * Props for TextLeveling component
 * Animated text reveal with staggered character timing
 */
export interface TextLevelingProps extends BasePrototypeProps {
  /** Text content to animate */
  text: string;
}

/**
 * Props for VariableFont component
 * Variable font that responds to scroll and hover
 */
export interface VariableFontProps extends BasePrototypeProps {
  /** Display text */
  text: string;
  /** Show interaction hint below text */
  showHint?: boolean;
}

/**
 * Props for HiddenLayers component
 * Technical annotations revealed on hover
 */
export interface HiddenLayersProps extends BasePrototypeProps {
  // Uses slots for content customization
}

/**
 * Annotation position for HiddenLayers
 */
export type AnnotationPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

/**
 * Annotation definition for HiddenLayers
 */
export interface Annotation {
  text: string;
  position: AnnotationPosition;
  offset?: {
    x?: string;
    y?: string;
  };
}

/**
 * Props for SkillsGraph component
 * Interactive skill network with connections
 */
export interface SkillsGraphProps extends BasePrototypeProps {
  // Skills are hardcoded but could be made configurable
}

/**
 * Skill definition for SkillsGraph
 */
export interface Skill {
  name: string;
  related: string[];
}

/**
 * Props for BlueprintLines component
 * SVG border animation with technical aesthetic
 */
export interface BlueprintLinesProps extends BasePrototypeProps {
  /** Blueprint label text */
  label?: string;
}

/**
 * Props for SolariBoard component
 * Split-flap display animation
 */
export interface SolariBoardProps extends BasePrototypeProps {
  /** Initial display value (4 digits) */
  initialValue?: string;
  /** Show update button */
  showButton?: boolean;
}

/**
 * SolariBoard JavaScript API
 * For programmatic control of the board
 */
export interface SolariBoardAPI {
  /** Update board to new value with animation */
  updateValue(value: string): void;
  /** Update board with random value */
  randomUpdate(): void;
}

/**
 * Global type augmentation for window object
 */
declare global {
  interface Window {
    SolariBoard?: typeof SolariBoardAPI;
  }
}
