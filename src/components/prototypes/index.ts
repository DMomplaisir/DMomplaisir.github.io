/**
 * Prototypes - Component Index
 * Easy imports for all prototype components
 */

// Export all components for convenience
export { default as TextLeveling } from './TextLeveling.astro';
export { default as VariableFont } from './VariableFont.astro';
export { default as HiddenLayers } from './HiddenLayers.astro';
export { default as SkillsGraph } from './SkillsGraph.astro';
export { default as BlueprintLines } from './BlueprintLines.astro';
export { default as SolariBoard } from './SolariBoard.astro';

// Export types
export type {
  BasePrototypeProps,
  TextLevelingProps,
  VariableFontProps,
  HiddenLayersProps,
  SkillsGraphProps,
  BlueprintLinesProps,
  SolariBoardProps,
  SolariBoardAPI,
  Annotation,
  AnnotationPosition,
  Skill,
} from './types';

/**
 * Usage example:
 * 
 * ```astro
 * ---
 * import { TextLeveling, VariableFont } from '@components/prototypes';
 * ---
 * 
 * <TextLeveling text="Hello World" />
 * <VariableFont text="Interactive" />
 * ```
 */
