
register('ssd', (pat) => {
  const SSD = {
    'bd': 'c2',
    'sd': 'd2',
    'hh': 'c#4',
    'ohh': 'd#4',
    't1': 'c3',
    't2': 'b2',
    't3': 'g2',
    't4': 'f2',
    'crash': 'a3',
    'crash2': 'g3',
    'ride': 'b3',
  };

  return pat.fmap(note => {
    return {note: SSD[note.note] || note.note};
  });
});

window.ssd = function(n) {
  return note(n).ssd()
}
