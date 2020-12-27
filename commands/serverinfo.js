module.exports = {
  name: 'serverinfo',
  description: 'serverinfo!',
  execute(msg, args) {
  const fs = require("fs");
//var output;
const output =[];
let file = fs.readFileSync("DayzWWIIIINFO.txt", "utf8");
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