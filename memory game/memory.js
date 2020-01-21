const animals = [ 'turtle', 'snail', 'corgi', 'parrot', 'rabbit', 'bear', 'panda', 'fish', 'shark',
'pig', 'crab', 'rhinoceros'
];

const url = 'https://png.icons8.com/100/000000/color/';
var images = animals.map(x => url + x + '.png');

images = images.concat(images);
// console.log(images);

function shuffle(array) {
    let i = 0;
    for(i = 0; i < array.length; i++) {
        let j = Math.floor(Math.random() * array.length);
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
shuffle(images);
console.log(images);