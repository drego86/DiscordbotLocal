
module.exports = {
  name: 'damage',
  description: 'damage!',
  cooldown: 5,
  execute(msg, args) {
  const fs = require("fs");
//var output;
const output =[];
let file = fs.readFileSync("DayZServer_x64.ADM", "utf8");
let arr = file.split(/\r?\n/);
arr.forEach((line, idx)=> {
    if(line.includes("hit")){
	var str = line;
	str = line.replace(/ \([\s\S]*?\)/g, '');
	str=str.replace(/\|/g,'');
	//str +="\n";
	output.push(str);
{
// s = s.substring(1);
}
    //console.log((idx+1)+':'+ line);
	
	//msg.channel.send((idx+1)+':'+ line);
    }
});
	//msg.author.send(output, { split: true });
	msg.channel.send(output, { split: true });
	//msg.channel.send(line);
  },
};