module.exports = {
  name: 'lifetimes',
  description: 'lifetimes!',
  execute(msg, args) {
  const fs = require("fs");
//var output;
const output =[];
let file = fs.readFileSync("lifetimes.txt", "utf8");
output.push("This is the time it will take an item to decay with no interaction from a player and assuming no flag is present.");
let arr = file.split(/\r?\n/);
arr.forEach((line, idx)=> {
	var str = line;
	//str = line.replace(/ \([\s\S]*?\)/g, '');
	//str=str.replace(/\|/g,'');
	//str=str.replace(/\s*\(.*?\)\s*/g, '');
	//str +="\n";
	output.push(str);
});
	//msg.author.send(output, { split: true });
	msg.channel.send(output, { split: true });
	//msg.channel.send(line);
  },
};