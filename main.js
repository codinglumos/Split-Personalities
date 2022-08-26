//I want all the disorders to print out- when I called for disorder and split it only depression showed up
//To do the above you need to console.log EACH piece split---NOT TRUE
//Tried this--- const totalDisorders = [console.log(disorder1),console.log(disorder2),console.log(disorder3),console.log(disorder4),console.log(disorder5),console.log(disorder6),console.log(disorder7),console.log(disorder8)]

const originalDisorderFormat = "Depression|$|Bipolar|$|Manic|$|Anxiety|$|Anorexia|$|Posttraumtic Stress|$|Seasonal Affective|$|Bulimia"

const newFormat = originalDisorderFormat.split("|$|")
newFormat.join("</div><div>") //doing this in reverse allows for the right console.log to print. 

console.log(`<div>${newFormat.join("</div><div>")}</div>`)

//Think more simply! 
//Lessons: split the format, create new, join them, add the way they are joined, then console.log it with new format. 