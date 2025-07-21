// maps 
//a map holds key-value pair where the key can be any datatype
const cities = new Map([
  ["Edenburg", "Scotland"],
  ["Rome", "Italy"],
  ["Paris", "France"],
  ["Seoul", "Korea"],
  ["Kolkata", "India"],
  ["Whole Japan", "Japan"]
]);

const hobby = new Map();
hobby.set("Reading", 1);
hobby.set("Photography", 2);

// You can't directly print Map like this and expect readable output
// Use forEach or for...of loop to print

document.writeln("<strong>Cities:</strong><br>");
cities.forEach((value, key) => {
  document.writeln(`${key} → ${value}<br>`);
});
//forEach() = "For every item, do this..."
document.writeln("<br><strong>Hobbies:</strong><br>");
hobby.forEach((value, key) => {
  document.writeln(`${key} → ${value}<br>`);
});

document.writeln(cities.get("Edenburg"));//.get(key)-> will gate that key's value
document.writeln(cities.size);//give map's size
//to delete any element hoddy.delete(key)
document.writeln(cities.has("Paris"));// .has(key) -> if the key has in the map
