import _ from 'lodash'

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const getLastString = (string: string, character: string = '.') => {
  const parts = string.split(character)

  return _.last(parts) || ''
}

export const convertStringToArray = (
  string: string,
  character: string = '.'
) => {
  return string.split(character)
}

export const getPercentage = (value: number, total: number) => {
  const percentage = (value / total) * 100
  const roundedPercentage = parseFloat(percentage.toFixed(2))
  return isNaN(roundedPercentage) ? 0 : roundedPercentage
}

