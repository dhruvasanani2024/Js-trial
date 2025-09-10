const arr = [1,2,3,44,5]

for (const array of arr) {
    console.log(array);
}


const object = {
    name : " aklsjdfh",
    age : 12,
}

for (const key in object) {
    console.log(object[key]);
}


const map = new Map();
map.set('name',"askdjdf")
map.set('age',23)

for (const [key,value] of map) {
    console.log(value);
    
}


const coding = [
    {
    name : "js",
    full : "Javascript"
    },
    {
    name : "py",
    full : "python"
    },
    {
    name : "cpp",
    full : "c++"

    }
]

coding.forEach( (item)=>{
    console.log(item.name);
})