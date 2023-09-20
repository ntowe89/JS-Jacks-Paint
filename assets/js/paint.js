function configureListeners() {
    let images = document.getElementsByTagName("img") // select img elements  
        console.log(images)
       
        
     for (var i = 0; i < images.length; i++) {        
        // iterate over images and add mouseover event listeners 
        console.log(images[i].id)
        console.log(document.getElementById(images[i].id))
        document.getElementById(images[i].id).addEventListener("mouseover", addOpacity, false)
        document.getElementById(images[i].id).addEventListener("mouseout", removeOpacity, false)
         
    } 
}

function addOpacity(event) {
    // add appropriate CSS class
    console.log(this.classList)
    if(!this.classList.contains('dim')){
        this.classList.add('dim')
    }
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class
     console.log(this.classList)
     if(this.classList.contains('dim')){
        this.classList.remove('dim')
     }

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
            // set variables for price and color name and invoke a function to update the price     
            price = '$17.99'
            colorName = "Lime Green"
            updatePrice(colorName, price)
            break;           
        case 'pn2':
            // set variables for price and color name and invoke a function to update the price    
            price = '11.99'
            colorName = 'Medium Brown'
            updatePrice(colorName, price)
            break;            
        case 'pn3':
            // set variables for price and color name and invoke a function to update the price  
            price = '13.99'
            colorName = 'Royal Blue'
            updatePrice(colorName, price)
            break;   
        case 'pn4':
            // set variables for price and color name and invoke a function to update the price  
            price = '10.99'
            colorName = 'Bright Red'
            updatePrice(colorName, price)
            break;   
        case 'pn5':
            // set variables for price and color name and invoke a function to update the price       
            price = '9.99'
            colorName = 'Solid White'
            updatePrice(colorName, price)
            break;   
        case 'pn6':
            // set variables for price and color name and invoke a function to update the price        
            price = '18.99'
            colorName = 'Solid Black'
            updatePrice(colorName, price)
            break;   
        case 'pn7':
            // set variables for price and color name and invoke a function to update the price 
            price = '12.99'
            colorName = 'Medium Blue'
            updatePrice(colorName, price)
            break;   
        case 'pn8':
            // set variables for price and color name and invoke a function to update the price   
            price = '19.99'
            colorName = 'Light Purple'
            updatePrice(colorName, price)
            break;   
        case 'pn9':
            // set variables for price and color name and invoke a function to update the price 
            price = '15.99'
            colorName = 'Bright Yellow'
            updatePrice(colorName, price)
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById('color-price'); // select element with corresponding id
        colorPrice.textContent = price;// display price
        
        let color = document.getElementById('color-name');// select element with corresponding id
        color.textContent = colorName;//display color name
    }
    
}
