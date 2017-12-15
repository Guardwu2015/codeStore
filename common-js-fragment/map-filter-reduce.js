const people = [
 { name: 'John Doe', age: 16 },
 { name: 'Thomas Calls', age: 19 },
 { name: 'Liam Smith', age: 20 },
 { name: 'Jessy Pinkman', age: 18 },
];
const coffeeLovers = ['John Doe', 'Liam Smith', 'Jessy Pinkman'];

//1,使用filter方法筛选出年龄大于18
const peopleAbove18 = (collection) => {
  return collection
    .filter((person) => person.age >= 18);
}

//2,使用map方法添加coffeeLover属性
const incrementAge = (collection) => {
  return collection.map((person) => {
    person.coffeeLover = coffeeLovers.includes(person.name);
 
    return person;
  });
};

//3,使用reduce方法计算年龄总和
const sumAge = (collection) => collection.reduce((sum, person) => {
 return sum + person.age;
}, 0);

//4,使用reduce方法实现map和filter方法
const map = (collection, fn) => {
  return collection.reduce((acc, item) => {
    return acc.concat(fn(item));
  }, []);
}
const filter = (collection, fn) => {
  return collection.reduce((acc, item) => {
    if (fn(item)) {
      return acc.concat(item);
    }
 
    return acc;
  }, []);
}

//5,组合map, filter和reduce
const people = [
 { name: 'John Doe', age: 16 },
 { name: 'Thomas Calls', age: 19 },
 { name: 'Liam Smith', age: 20 },
 { name: 'Jessy Pinkman', age: 18 },
];
const coffeeLovers = ['John Doe', 'Liam Smith', 'Jessy Pinkman'];

const ageAbove18 = (person) => person.age >= 18;
const addCoffeeLoverProperty = (person) => {
 person.coffeeLover = coffeeLovers.includes(person.name);
 
 return person;
}
const ageReducer = (sum, person) => {
 return sum + person.age;
};
const coffeeLoversAbove18 = people.filter(ageAbove18).map(addCoffeeLoverProperty);
const totalAgeOfCoffeeLoversAbove18 = coffeeLoversAbove18.reduce(ageReducer, 0);
const totalAge = people.reduce(ageReducer);
