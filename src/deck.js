function randomize(array) {
  const _array = array.slice(0)

  for(const [i, item] of _array.entries()) {
    let randIndex = Math.floor(Math.random() * (i+1))
    let temp = item
    _array[i] = _array[randIndex]
    _array[randIndex] = temp
  }
  return _array
}
function formatImageArray(images) {
  const imageArray = []
  for(const image of images) {
    imageArray.push(image.image)
  }
  return imageArray
}
export default function initializeDeck(images) {
  let id = 0
  const cards = formatImageArray(images).reduce((acc, type) => {
    acc.push({
      id: id++,
      type
    })
    acc.push({
      id: id++,
      type
    })
    return acc
  }, [])

  return randomize(cards)
}