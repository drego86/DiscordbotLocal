module.exports = {
  name: 'playercount',
  description: 'players!',
  cooldown: 5,
  execute(msg, args) {
  const fs = require("fs");
var output;
var connected =0;
var disconnected =0;
let file = fs.readFileSync("DayZServer_x64.ADM", "utf8");
let arr = file.split(/\r?\n/);
arr.forEach((line, idx)=> {
    if(line.includes("is connected")  ){
	var str = line;
	//str = line.replace(/ \([\s\S]*?\)/g, '');
	//str=str.replace(/\|/g,'');
	//str=str.replace(/\s*\(.*?\)\s*/g, '');
	//str +="\n";
	connected++;

    }
	if(line.includes("disconnected")  ){
	var str = line;
	
	disconnected++;

    }
});
	var count =connected -disconnected;
	if(count >1|| count ==0)
{
	output="Their are currently " + count;
	
	output+=" players on WWIII";
}
	else
{
	output="Their is currently " + count;
	
	output+=" player on WWIII";
}

	//msg.author.send(output, { split: true });
	msg.channel.send(output, { split: true });
	//msg.channel.send(line);
  },
};