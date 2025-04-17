

export function getTopKey(data: Record<string, number>) {
    return Object.entries(data).reduce((top, current) =>
      current[1] > top[1] ? current : top
    )[0];
  }
