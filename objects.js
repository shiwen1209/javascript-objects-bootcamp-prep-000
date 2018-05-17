var playlist={EdSheeran:'Think out loud',PeterPeter:'Tergerverse',JustinBieber:'Sorry'}
function updatePlaylist(playlist,artistName,songTitle){playlist['${artistName}']="${songTitle}";return playlist}
function removeFromPlaylist(playlist,artistName,songTitle){delete playlist.PeterPeter;return playlist}