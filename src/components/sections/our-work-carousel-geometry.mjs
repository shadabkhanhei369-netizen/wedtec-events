export function getCenteredScrollLeft(cardOffsetLeft, cardWidth, viewportWidth) {
  return Math.max(0, cardOffsetLeft + cardWidth / 2 - viewportWidth / 2);
}

export function getLoopRecenter(index, itemCount, copyCount) {
  let centeredIndex = index;
  let cycles = 0;

  while (centeredIndex < itemCount) {
    centeredIndex += itemCount;
    cycles += 1;
  }

  while (centeredIndex >= itemCount * (copyCount - 1)) {
    centeredIndex -= itemCount;
    cycles -= 1;
  }

  return { centeredIndex, cycles };
}

export function getScaleOverflowPadding(cardHeight, scale, safety = 8) {
  return Math.ceil((cardHeight * (scale - 1)) / 2) + safety;
}
