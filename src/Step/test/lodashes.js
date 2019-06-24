import { isNumber, isString } from 'lodash-es';

export function one(num) {
  return isNumber(num)
}

export function two(str) {
  return isString(str)
}
