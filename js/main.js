const photo = document.querySelector('.photo');

async function getPhoto() {
        const response = await fetch('https://picsum.photos/v2/list');
        const json = await response.json();             //oraz respons rzutowanie na format json za pomoca metody, przypisanie odpowiedzi do zmiennej json 
        console.log(json);

        json.forEach(image => {                                 //wywowalanie petli przechodzacej po wszystkich encjach tablicy json
          const imageElement = document.createElement('img'); //przypisanie zmiennej imageElement metody tworzacej element <img>
          imageElement.src = image.download_url;                //wpisanie do zmiennej url('obrazu') w miejscu <img src="">
          photo.appendChild(imageElement);                      //element photo jest rodzicem elementu zawartego w zmiennej imageElement
         })
        
        $(window).ready(function(){
                $('.photo').slick({
                        slidesToShow: 2, //liczba zdjec pojawiajacych sie
                        slidesToScroll: 3 //o ile zdjec ma sie przewijac karuzela
                        });
                  });
};
getPhoto();
