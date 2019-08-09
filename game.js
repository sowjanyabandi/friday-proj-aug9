
const image = [
    {
        name: 'tiger',
        src: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/P.t.altaica_Tomak_Male.jpg'
    }, 
    {  
        name : 'elephant',
        src  : 'https://www.medicalnewstoday.com/content//images/articles/322/322736/elephant-from-the-front.jpg'
}, 
    {
        name : 'dog',
        src  : 'https://www.petmd.com/sites/default/files/over-active-dog-211592482.jpg'
    }
]


function getRandomInt(val1,val2){
    let random = Math.floor(Math.random() * (+val1 - +val2)) + +val2; 
    return random
}

const name = image.name;
const src = image.src;
    for(i =0; i< image.length; i++){
        const main = document.getElementById('searchField')
        //console.log(main)
        const img = document.createElement('img')  
        //console.log(img)
       //img.alt = name
       //img.src = src
       const currentObj = image[i];
       //console.log(currentObj)
         img.alt = currentObj.name
         img.src = currentObj.src 
       
       //console.log(img)
    //console.log(currentObj.name)
    //console.log(currentObj.src)
         img.style.height = '8rem'
         img.style.position = 'absolute'
        
         getRandomInt(0,30)
         rem = `${getRandomInt(0,30)}rem`
         //console.log(rem)
         img.style.bottom = rem
         //console.log('img-style-bottom: ', img.style.bottom)
         getRandomInt(0,60)
          rem = `${getRandomInt(0,60)}rem`
         img.style.left = rem
         //console.log('img-style-left: ',img.style.left)
         img.onclick = function() {
            addToFoundItems(currentObj)
            displayInFooter()
            //console.log(foundItems)
         }
         main.appendChild(img)
         //console.log(main.appendChild(img))
    }
         const foundItems =[];
         function addToFoundItems(image){
            console.log(image)

            if(!foundItems.includes(image)){
                foundItems.push(image)
                //console.log(foundItems)
             }
             displayInFooter()

         }

   function displayInFooter(){
        const footer = document.getElementById('foundItemsSection')
            footer.innerHTML = '';
            for(let i = 0; i<foundItemsSection.length; i++){
                //console.log('hello')
                const image = foundItemsSection[i];
                //console.log(foundItemsSection)
                const fimage = document.createElement('img')
                img.src = fimage.src
                img.alt = fimage.name
                footer.appendChild(img)

            }
        }
            //const foundSec = document.createElemnt('foundItemsSection')
            //found.innerHTML = []
            //for(let i = 0;i<foundItems.length;i++){
              //  const
             //   document.write(foundItems[i])
               // console.log(foundItems)
       
    



