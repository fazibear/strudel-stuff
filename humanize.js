register('humanize', (pats) => {
    return pats
      .late(rand.range(0, 0.02))
      .velocity(rand.range(0.7, 1))
});
