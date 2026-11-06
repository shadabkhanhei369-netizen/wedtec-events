export function getCenteredScrollLeft(
  cardOffsetLeft: number,
  cardWidth: number,
  viewportWidth: number,
): number;

export function getLoopRecenter(
  index: number,
  itemCount: number,
  copyCount: number,
): { centeredIndex: number; cycles: number };

export function getScaleOverflowPadding(
  cardHeight: number,
  scale: number,
  safety?: number,
): number;
