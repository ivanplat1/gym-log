import { progressionHints } from '../src/lib/progression'
import type { Session } from '../src/lib/storage'

function assert(cond: boolean, msg: string) {
  if (!cond) throw new Error(msg)
}

const gymReady: Session = {
  id: '1',
  dayId: 'A',
  startedAt: '2026-08-01T10:00:00.000Z',
  finishedAt: '2026-08-01T11:00:00.000Z',
  exercises: [
    {
      exerciseId: 'a1',
      name: 'Жим',
      sets: [
        { weight: 40, reps: 9, durationSec: null, done: true, rir: 1 },
        { weight: 40, reps: 9, durationSec: null, done: true, rir: 1 },
        { weight: 40, reps: 8, durationSec: null, done: true, rir: 2 },
      ],
    },
  ],
}

const hints = progressionHints(gymReady)
assert(hints[0]?.ready === true, 'upper-half reps with RIR>=1 should be ready')

const gymNotReady: Session = {
  ...gymReady,
  id: '2',
  exercises: [
    {
      exerciseId: 'a1',
      name: 'Жим',
      sets: [
        { weight: 40, reps: 6, durationSec: null, done: true, rir: 2 },
        { weight: 40, reps: 6, durationSec: null, done: true, rir: 2 },
        { weight: 40, reps: 6, durationSec: null, done: true, rir: 1 },
      ],
    },
  ],
}

assert(progressionHints(gymNotReady)[0]?.ready === false, 'lower-half reps should not progress')

console.log('progression checks ok')
