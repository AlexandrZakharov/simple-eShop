let theOldestCat = [];
function createCat(age, name) {
  theOldestCat.push(age);
  theOldestCat.sort((a, b) => b - a);
  const cat = {
    meow: function() {
      return `My name is ${name}!`;
    },
    myAge: function() {
      if(age < 10) {
        return `My age is ${age}`;
      } else return `I am too old...`;
    },
    myOrder: function() {
      return `I am cat №${theOldestCat.indexOf(age) + 1} in family`;
    }
  }

  return cat;
}

const cat1 = createCat(5, 'Boris');
const cat2 = createCat(10, 'Jora');
const cat3 = createCat(11, 'Valera');
const cat4 = createCat(3, 'Egor');

console.log(theOldestCat);

console.log(cat1.meow());
console.log(cat3.myAge());
console.log(cat1.myOrder());




// function box(obj) {
//   let userBox = {
//       prop: obj,
//       unbox: function() {
//         if(this.prop.unbox === undefined) {
//           return this.prop;
//         }
//         return this.prop.unbox();
//     }
//   }

//   return userBox;
// }

// const box1 = box('Alex');
// const box2 = box(box1);
// const box3 = box(box2);

// const box4 = box('Jora');
// const box5 = box(box4);

// console.log('Box4: ',box4);
// console.log('Box5: ',box5);
// console.log(box1.unbox());



// function createBird() {
//   const bird = {
//     distance: 0,
//     fly: function(distance=0) {
//       this.distance += distance;
//       if(distance == 0) {
//         this.distance += 1;
//       }
//       return this;
//     },
//     getDistance: function() {
//       return this.distance;
//     },
//     compareWith: function(anotherBird) {
//       if(this.distance > anotherBird.distance) {
//         return 'I win';
//       } else return 'Another bird win';
//     }
//   }

//   return bird;
// }

// const bird1 = createBird();

// bird1.fly();
// bird1.fly(3);
// bird1.fly().fly();
// console.log(bird1.getDistance());

// const bird2 = createBird();
// bird2.fly();
// bird2.fly(3);
// console.log(bird2.getDistance());
// console.log(bird2.compareWith(bird1));


// function createBlock(obj) {
//   const userBlock = {
//     value: obj,
//     next: null,
//     getVal: function() {
//       return this.value;
//     },
//     getNext: function() {
//       return this.next;
//     },
//     link: function(newObject) {
//       return this.next = newObject;
//     }
//   }
  
//   return userBlock;
// }

// const block = createBlock({ m: 'MVar' })

// console.log(block.getVal());
// console.log(block.getNext());

// block.link(createBlock({ f: 'FVar' }));

// console.log(block);
// console.log(block.getVal());
// // block.getNext().getVal()
// // block.getNext().getNext()

// // block.getNext().link(createBlock({ sd: 'SDVar' }, { l: 'LVar' }))
// // block.getNext().getVal()
// // block.getNext().getNext().getVal()