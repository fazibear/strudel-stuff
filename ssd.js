const ssd = function(n) {
  return note(n).ssd()
}

register('ssd', (pat) => {
  const drumMapSSD = {
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
    return {note: drumMapSSD[note.note] || note.note};
  });
});
