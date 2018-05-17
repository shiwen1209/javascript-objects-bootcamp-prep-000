var playlist={EdSheeran:'Think out loud',PeterPeter:'Tergerverse',JustinBieber:'Sorry'}
function updatePlaylist(playlist,artistName,songTitle){playlist['TaylorSwift']="Romeo and Juliet";return playlist}
function removeFromPlaylist(playlist,artistName,songTitle){delete playlist.PeterPeter;return playlist}