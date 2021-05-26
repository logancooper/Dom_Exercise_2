'use strict';

document.addEventListener('DOMContentLoaded', function(){
    console.log("The DOM content has loaded");
    
    const allParagraphs = document.querySelectorAll('p');
    allParagraphs.forEach(function(paragraph, index){
        console.log(index, paragraph)
        const spanElement = document.createElement("span");
        spanElement.innerText = `This paragraph is at index ${index}.`
        spanElement.classList.add("bold");
        paragraph.append(spanElement);
    })
})