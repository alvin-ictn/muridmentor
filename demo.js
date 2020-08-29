const nilai = (nama,nilai) => {
  return `name = '${nama}'
nilai = '${nilai}'
output : ${nilai>= 101 ? 'Nilai Invalid' : nilai >= 80 ? 'A' : nilai >= 65 ? 'B' : nilai >= 50 ? 'C' : nilai >= 35 ? 'D' : nilai >= 0 ? 'E' : 'Nilai Invalid'}
  `
}

const grup = (nama) => {
  return `name = '${nama}', output: '${['a','b','c','d'].some(check => nama[0] == check) ? 'Masuk group pertama' : ['e','f','g','h'].some(check => nama[0] == check) ? 'Masuk group kedua' : 'Masuk group terakhir'}'`
}

console.log(grup("daniel"))
console.log(grup("himelda"))
console.log(grup("taufik"))