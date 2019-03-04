export const BORDER_RADIUS = '2px';
export const SPACING = {
	tiny: 4,
	small: 8,
	default: 16,
	large: 24,
};
export const MAX_WIDTH = '1200px';

export function getSpacing(size = SPACING.default) {
	return `${size}px`;
}
