import {
  formatAmountLabel,
  parsePortionCount,
  parsePortionGrams,
  resolveScaleMode,
  scaleMacros,
} from '../src/lib/foodPortion'

function assert(cond: boolean, msg: string) {
  if (!cond) throw new Error(msg)
}

assert(parsePortionGrams('100 г') === 100, '100 г')
assert(parsePortionGrams('150г') === 150, '150г')
assert(parsePortionGrams('1 шт ~80 г') === 80, '~80 г')
assert(parsePortionGrams('200 мл') === 200, 'мл')
assert(parsePortionCount('2 шт') === 2, '2 шт')
assert(resolveScaleMode('100 г').mode === 'grams', 'mode grams')
assert(resolveScaleMode('1 шт').mode === 'servings', 'mode servings')

const scaled = scaleMacros({ kcal: 165, protein: 31, carbs: 0, fat: 3.6 }, 100, 150)
assert(scaled.kcal === 248, `kcal got ${scaled.kcal}`)
assert(scaled.protein === 46.5, `protein got ${scaled.protein}`)
assert(formatAmountLabel('grams', 150) === '150 г', 'label')

console.log('food portion checks ok')
