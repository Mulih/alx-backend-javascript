export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  const iterator = reportWithIterator;

  let iterationResult = iterator.next();
  while (!iterationResult.done) {
    result += `${iterationResult.value} | `;
    iterationResult = iterator.next();
  }

  result = result.slice(0, -3);

  return result;
}
