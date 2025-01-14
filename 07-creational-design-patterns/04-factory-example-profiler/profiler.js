class Profiler {
  constructor (label) {
    this.label = label
    this.lastTime = null
  }

  start () {
    this.lastTime = process.hrtime()
  }

  end () {
    const diff = process.hrtime(this.lastTime)
    console.log(`Timer "${this.label}" took ${diff[0]} seconds ` +
      `and ${diff[1]} nanoseconds.`)
  }
}

const noopProfiler = {
  start () {},
  end () {}
}

// createProfiler() function is our factory and its role
// is abstracting the creation of a Profiler object from its
// implementation

// See how in below createProfiler() function, we are
// returning a class one time and returning a object
// one time depending on environment.
export function createProfiler (label) {
  if (process.env.NODE_ENV === 'production') {
    return noopProfiler
  }

  return new Profiler(label)
}
