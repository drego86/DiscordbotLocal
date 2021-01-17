module.exports = {
  name: 'deaths',
  description: 'deaths!',
  cooldown: 5,
  execute(msg, args) {
  const fs = require("fs");
const output =[];
var deaths=0;
let file = fs.readFileSync("DayZServer_x64.ADM", "utf8");
let arr = file.split(/\r?\n/);
arr.forEach((line, idx)=> {
    if(line.includes("killed")|| line.includes("suicide")){
	var str = line;
	str = line.replace(/ \([\s\S]*?\)/g, '');
	str=str.replace(/\|/g,'');
	output.push(str);
	deaths+=1;
{
}
    //console.log((idx+1)+':'+ line);
	//msg.channel.send(str);
	//msg.channel.send((idx+1)+':'+ line);
    }
});
	//msg.channel.send(line);
	if(deaths==0)
	output.push("There are no deaths to report.");
	msg.channel.send(output, { split: true });
  },
};