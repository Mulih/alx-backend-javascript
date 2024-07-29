const updateUniqueItems = (items) => {
  if (!(items instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [t, j] of items.entries()) {
    if (j === 1) {
      items.set(t, 100);
    }
  }
  return items;
};

export default updateUniqueItems;
