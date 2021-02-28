// 1st case
var attitude = function (original, replacement, source) {
    return function (source) {
        return source.replace(original, replacement);
    };
};

var snakify = attitude(/millenials/ig, "Snake People");
var hippify = attitude(/baby boomers/ig, "Aging Hippies");

console.log(snakify("The Millenials are always up to something."));
// The Snake People are always up to something.
console.log(hippify("The Baby Boomers just look the other way."));
// The Aging Hippies just look the other way.
// -----------------------------------------------------------------------------
// 2 case
var animals = [
    {name: 'тузик', species: 'dog'},
    {name: 'рубик', species: 'fish'},
    {name: 'мурлей', species: 'cat'},
    {name: 'рекс', species: 'dog'},
    {name: 'jimmy', species: 'fish'}
]

var isDog = function (obj) {
    return obj.species === 'dog'
}
var dogs = animals.filter(isDog);
console.log(dogs);


// по старому
// var dogs = [];
// for (var i = 0; i < animals.length; i++) {
// 	if (animals[i].species === 'dog' ) {
// 		dogs.push(animals[i]);
// 	}
// }
// -------------------------------------------------------------------------------------------------