//this function holds the different functionalities we need to add to the elements
const makeChange = function(collection){
     //defining css function to change the styles
     collection.css = function(...cssArgs){
         console.log(cssArgs)
        if(typeof cssArgs[0] === "string"){
            const [prop,value] = cssArgs;
            collection.forEach(element => {
                element.style[prop] = value;
            });
        }
        else if (typeof cssArgs[0] === "object"){
            let styles = cssArgs[0];
            for(let prop in styles){
                collection.forEach(element => {
                    element.style[prop] = styles[prop];
                })
            }
        }
    }

    //returns the inner html of all elements selected with the selector passed
    collection.html = function(){
        let htmlText =collection[0].innerHTML;
        return htmlText;
    }
    collection.append = function(appendArg){
         collection[0].innerHTML = collection[0].innerHTML+appendArg;
    }
    collection.prepend = function(prependArg){
        collection[0].innerHTML = prependArg+collection[0].innerHTML;
    }
    collection.val = function() {
        return collection[0].value;
    }
    collection.text = function(){
        let textVal ="";
        let colLength = collection.length; 
        //console.log( collection["0"].children[0].innerText)

        //looping through the collection nodeList
        for(let i =0;i<colLength;i++){ 

            //coverting each htmlcollection into an array
                var arr = [].slice.call( collection[i].children);
                
                //now for each array of matching elements children, text values are added to textVal
                arr.forEach(child => {
                    textVal = textVal+child.innerText+"\n";
                });
                
                //adding an extra line to distinguish between a set of children text (inspired from jQUERY output)
                textVal+="\n"
        }        
        
        return textVal;
    }

    //used to add event listener to all the instances of the element
   collection.on = function(...onArgs){
    collection.forEach(col => {
        col.addEventListener(onArgs[0],onArgs[1])
    })
 }
   return collection;
}

const $ = function(...args){
    if(typeof args[0] === "function"){
        const readyFunc = args[0];
        //From MDN docs : DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. 
        document.addEventListener("DOMContentLoaded",readyFunc)
    }
    else if(typeof args[0] === "string"){
        let selector = args[0];
        let collection = document.querySelectorAll(selector); //Selecting all elements with the selector passed 
        //if(typeof args[0]!==)
        collection = makeChange(collection);
        return collection;
    }

    //this is used to catch the instances when we pass in html elements in the form of this object and then calling the makeChange() function to add the different functions to that html element
    else if (args[0] instanceof HTMLElement){
        let collection = [args[0]];
        makeChange(collection);
        return collection;
    }
}