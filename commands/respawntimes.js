module.exports = {
  name: 'respawntimes',
  description: 'respawntimes!',
  execute(msg, args) {
  const fs = require("fs");
//var output;
const output =[];
let file = fs.readFileSync("respawn.txt", "utf8");
output.push("This is the time it will take for one item of the item's type to be put in the respawn queue after the item reaches its minimum value. For items with 0, the items will be put in the queue to spawn instantly. The number of items put into the spawn queue will be enough to bring that item type back to nominal value. \n");
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