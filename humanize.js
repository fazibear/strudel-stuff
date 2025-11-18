register('humanize', (pats) => {
    return pats
      .late(rand.range(0, 0.01))
      .velocity(rand.range(0.8, 1))
});
