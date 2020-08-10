import url from 'url'

// create a url object, which we can further manipulate, access attributes, etc.
const myurl = new URL('https://www.google.com/search?client=firefox-b-d&q=is+donaltrump+senile')


/* a few examples of attributes */
//serialze url
console.log(myurl.href)

//root domain
console.log(myurl.host)
console.log(myurl.hostname)         // same as host but w/o the port if any
console.log(myurl.pathname)         // just the endpoint
console.log(myurl.search)           // seach params if any
console.log(myurl.searchParams)     // same but pretty printed in a nice json format with extra stuff too

// we can dynamically manipulate the object as well
myurl.searchParams.append('abd', 123)       // appending params to an existing url
console.log(myurl.searchParams)
/* forEach syntax: basically apply the same (asynx?) trmt to each element in there. here we just arrow func to a console.log()*/
console.log(myurl.searchParams.forEach((value,name)=>console.log(`${name}, ${value}`)))