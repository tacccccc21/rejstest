let gt ="fall";

  // gt = "up";


  // 配列
let five = ['いちか','にの','みく','よつば','いつき'];

// ループ文
// let index = 0;
// while(index < five.length){
//   // 繰り返し文
//   console.log(five[index]);[]
//   index++;
// }

// if else 
// if(five.length > 5){
//   console.log('中野姉妹');
// } else {
// console.log('aaaa');
// }


// 関数
const sister = (arg) => {
  //  ここに命令をかく
  if(five.length === arg){
    console.log('中野姉妹');
  } else {
  console.log('五つ子じゃないです');
  }
};

sister(5);

const ichika = {
  size: 'big',
  color: 'pink',
  number: '1',
  uesugiCall: () => {
    console.log('フータローくん')
  }
};

const nino = {
  size: 'big',
  color: 'pink',
  number: '2',
  uesugiCall: () => {
    console.log('あんた')
  }
};

const miku = {
  size: 'big',
  color: 'pink',
  number: '1',
  uesugiCall: () => {
    console.log('フータロー')
  }
};

const yothuba = {
  size: 'big',
  color: 'pink',
  number: '1',
  uesugiCall: () => {
    console.log('上杉さん')
  }
};

const ituki = {
  size: 'big',
  color: 'red',
  number: '5',
  uesugiCall: () => {
    console.log('上杉くん')
  }
};



document.getElementsByTagName('button')[0].addEventListener('click', ()=> {
  window.alert(ichika.color)
});

document.getElementsByTagName('button')[1].addEventListener('click', ()=> {
  window.alert('二女')
});

document.getElementsByTagName('button')[2].addEventListener('click', ()=> {
  window.alert('三女')
});

document.getElementsByTagName('button')[3].addEventListener('click', ()=> {
  window.alert('四女')
});

document.getElementsByTagName('button')[4].addEventListener('click', ()=> {
  window.alert(ituki.color)
});