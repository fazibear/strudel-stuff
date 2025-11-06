window.MIDI1 = function(n) { return n.midichan(1).midi() }
window.MIDI2 = function(n) { return n.midichan(2).midi() }
window.MIDI3 = function(n) { return n.midichan(3).midi() }
window.MIDI4 = function(n) { return n.midichan(4).midi() }
window.MIDI5 = function(n) { return n.midichan(5).midi() }
window.MIDI6 = function(n) { return n.midichan(6).midi() }
window.MIDI7 = function(n) { return n.midichan(7).midi() }
window.MIDI8 = function(n) { return n.midichan(8).midi() }
window.MIDI9 = function(n) { return n.midichan(9).midi() }
window.MIDI10 = function(n) { return n.midichan(10).midi() }
window.MIDI11 = function(n) { return n.midichan(11).midi() }
window.MIDI12 = function(n) { return n.midichan(12).midi() }
window.MIDI13 = function(n) { return n.midichan(13).midi() }
window.MIDI14 = function(n) { return n.midichan(14).midi() }
window.MIDI15 = function(n) { return n.midichan(15).midi() }

register('tomidi', (chan, pats) => {
    return pats
      .midichan(chan)
      .midi()
});

