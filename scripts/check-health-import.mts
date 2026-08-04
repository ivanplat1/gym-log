import { normalizeHealthRow, parseHealthCsv, parseHealthJson, parseHealthSearchParams } from '../src/lib/healthImport'

function assert(cond: boolean, msg: string) {
  if (!cond) throw new Error(msg)
}

const json = parseHealthJson(
  JSON.stringify({
    date: '2026-08-04',
    sleepMin: 420,
    steps: 8000,
    activeKcal: 350,
    source: 'test',
  }),
)
assert(json.length === 1 && json[0].sleepMin === 420, 'json parse')

const hours = normalizeHealthRow({ date: '2026-08-03', sleep: 7.5 }, 't')
assert(hours?.sleepMin === 450, 'sleep hours → min')

const params = new URLSearchParams(
  'date=2026-08-02&sleepMin=400&steps=5000&activeKcal=200&source=shortcut',
)
const fromUrl = parseHealthSearchParams(params)
assert(fromUrl[0]?.steps === 5000, 'url params')

const csv = parseHealthCsv(`date,sleepMin,steps,activeKcal
2026-08-01,390,7000,300`)
assert(csv[0]?.sleepMin === 390, 'csv')

console.log('health import checks ok')
