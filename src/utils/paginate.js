import _ from 'lodash';

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  //what is a lodash wrapper ??
  //a lodash object, that we can chain all lodash methods to.
  //value returns an array that we can use.
  return _(items)
  .slice(startIndex)
  .take(pageSize)
  .value();
  //fancy stuff
}