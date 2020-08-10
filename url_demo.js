import url from 'url'

const myurl = new URL('https://www.google.com/search?client=firefox-b-d&q=is+donaltrump+senile')

//serialze url
console.log(myurl.href)

//root domain
console.log(myurl.host)
console.log(myurl.hostname)         // same as host but w/o the port if any
console.log(myurl.pathname)         // just the endpoint
console.log(myurl.search)           // seach params if any
console.log(myurl.searchParams)     // same but pretty printed in a nice json format with extra stuff too

myurl.searchParams.append('abd', 123)       // appending params to an existing url
console.log(myurl.searchParams)

console.log(myurl.searchParams.forEach((value,name)=>console.log(`${name}, ${value}`)))