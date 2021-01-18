module.exports = {
  name: 'players',
  description: 'players!',
  cooldown: 5,
  execute(msg, args) {
  const fs = require("fs");
var players;
const output =[];
let file = fs.readFileSync("DayZServer_x64.ADM", "utf8");
let arr = file.split(/\r?\n/);
arr.forEach((line, idx)=> {
    if(line.includes("connected") || line.includes("disconnected")  ){
	var str = line;
	//str = line.replace(/ \([\s\S]*?\)/g, '');
	str=str.replace(/\|/g,'');
	str=str.replace(/\s*\(.*?\)\s*/g, '');
	//str +="\n";
	output.push(str);
	players +=1;
{
// s = s.substring(1);
}
    //console.log((idx+1)+':'+ line);
	
	//msg.channel.send((idx+1)+':'+ line);
    }
});
	if(players==0)
	output.push("There are no players currently online!");
	msg.channel.send(output, { split: true });
	//msg.channel.send(line);
  },
};