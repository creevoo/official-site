import { config } from './config'
import { connectionInstance } from './connection-instance'

const LOOPS_API_KEY = config.loops.key
const LOOPS_BASE_URL = `https://app.loops.so/api`

export const loopsAPI = connectionInstance(LOOPS_BASE_URL, {
  headers: {
    Authorization: `Bearer ${LOOPS_API_KEY}`,
    'Content-Type': 'application/json',
  },
})
