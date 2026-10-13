import { readFile, writeFile } from "node:fs"

const name = ["Ade", "Olu", "Ope"]
const age= 24
const secret = "SECRET CODE"

console.log("start");

readFile('./content/1-text.txt', (err, data)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = data;
    readFile('./content/second.txt', (err, data)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = data;
        writeFile(
            './content/result.txt',
            `Here is the results: \n ${first}, ${second}`,
            (err, data)=>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log("Done with this operation");
                
            }
        )
    })
})
console.log("Starting a new operation");

// export default {name, age}
setInterval(() => {
    console.log("I will continue running");
    
}, 2 // This is code will be executing after 2 sec and not only after 2 sec because it is synchronous
);

