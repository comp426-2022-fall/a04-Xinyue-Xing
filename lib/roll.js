export function roll(sides,dice,rolls){
    var results = [];
    for (let i=0 ; i<rolls ; i++){
        var num = 0;
        for(let j=1;j<=dice;j++){
            num += Math.floor(Math.random() * sides) + 1;
        }
        results.push(num);
    }
    const finalresult = {
		"sides": sides,
		"dice": dice,
		"rolls": rolls,
		"results": results
	};
    return JSON.stringify(finalresult);
}