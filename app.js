var tags = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div']
var allTags ={}
for(var i = 0;i < tags.length;i++){
    if (allTags[tags[i]]){
        allTags[tags[i]]++
    }else{
        allTags[tags[i]] = 1
    }
}
console.log(allTags)
allTags = Object.keys(allTags).sort((a,b) => {
    if (allTags[a] > allTags[b]){
        return-1
    }else if (allTags[a] > allTags[b]){
        return 1
    }else return 0
})
console.log(allTags)

