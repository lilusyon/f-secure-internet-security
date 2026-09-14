// build 1df8321068
// (auto) cc9ed2
import { useState } from 'react';
export default function useCounter(init = 0) {
  const [n, setN] = useState(init);
  return { n, inc: () => setN((x) => x + 1), dec: () => setN((x) => x - 1) };
}
