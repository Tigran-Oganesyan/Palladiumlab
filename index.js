
let channgeTitle =document.querySelector('.change-title');
let header = document.querySelector('.header');
let headerService = document.querySelector('.header-service');
let button = document.querySelector('.button');
let menu = document.querySelector('.header-menu');
let menuWhite = document.querySelector('.header-menu__white');
let text = document.createElement('p');
let arrowRight = document.createElement('img')

for(var i = 0; i < document.getElementsByClassName('service-button').length; i++) {
  document.getElementsByClassName('service-button')[i].onmouseover =  document.getElementsByClassName('service-button')[i].onmouseout = function (event){

    if(this.innerHTML === 'Услуги по ремонту' && event.type == 'mouseover'){
       channgeTitle.textContent = 'Услуги по ремонту';
       channgeTitle.style.color = "white";
       
       header.style.backgroundImage = "url(./images/ImageUslugi.png)";
       header.style.backgroundRepeat="no-repeat";
       header.style.color="white";
       
       headerService.style.backgroundImage = "none";
       headerService.style.backgroundSize = "cover";
       headerService.style.backgroundRepeat = "no-repeat";
       
       button.style.color="white";
       button.style.border = "1px solid white";

       menuWhite.style.display="flex"
       menu.style.display="none"

       text.textContent ="С другой стороны реализация намеченных плановых заданий требуют от нас анализа."
       text.style.fontSize = "14px"
       text.style.fontFamily="Montserrat"
       text.style.width="280px"
       text.style.marginLeft="auto"
       text.style.marginRight="auto"
       text.style.marginTop="16px"

       document.getElementsByClassName('service-button')[0].append(text)
       document.getElementsByClassName('service-button')[0].style.position="relative"
       document.getElementsByClassName('service-button')[0].style.top="-654px"
       document.getElementsByClassName('service-button')[0].style.backgroundColor = "#EB5757"
       document.getElementsByClassName('service-button')[0].style.height="810px"
       document.getElementsByClassName('service-button')[0].style.paddingTop="300px"


    }else if(this.innerHTML === 'Виды работ' && event.type == 'mouseover'){
        channgeTitle.textContent = 'Виды работ по ремонту';
        channgeTitle.style.color = "white";

        header.style.backgroundImage = "url(./images/ImageRabot.png)";
        header.style.backgroundRepeat="no-repeat";
        header.style.color="white";
        
        headerService.style.backgroundImage = "none";
        headerService.style.backgroundSize = "cover";
        headerService.style.backgroundRepeat = "no-repeat";
        
        button.style.color="white";
        button.style.border = "1px solid white";

        menuWhite.style.display="flex"
        menu.style.display="none"

        text.textContent ="С другой стороны реализация намеченных плановых заданий требуют от нас анализа."
        text.style.fontSize = "14px"
        text.style.fontFamily="Montserrat"
        text.style.width="280px"
        text.style.marginLeft="auto"
        text.style.marginRight="auto"
        text.style.marginTop="16px"

        document.getElementsByClassName('service-button')[1].append(text)
        document.getElementsByClassName('service-button')[1].style.position="relative"
        document.getElementsByClassName('service-button')[1].style.top="-654px"
        document.getElementsByClassName('service-button')[1].style.backgroundColor = "#219653"
        document.getElementsByClassName('service-button')[1].style.height="810px"
        document.getElementsByClassName('service-button')[1].style.paddingTop="300px"

    }else if(this.innerHTML === 'Дизайн интерьера' && event.type == 'mouseover'){
        channgeTitle.textContent = 'Дизайн интерьера';
        channgeTitle.style.color = "white";

        header.style.backgroundImage = "url(./images/ImageDizain.png)";
        header.style.backgroundRepeat="no-repeat";
        header.style.color="white";
        
        headerService.style.backgroundImage = "none";
        headerService.style.backgroundSize = "cover";
        headerService.style.backgroundRepeat = "no-repeat";
        
        button.style.color="white";
        button.style.border = "1px solid white";

        menuWhite.style.display="flex"
        menu.style.display="none"

        text.textContent ="С другой стороны реализация намеченных плановых заданий требуют от нас анализа."
        text.style.fontSize = "14px"
        text.style.fontFamily="Montserrat"
        text.style.width="280px"
        text.style.marginLeft="auto"
        text.style.marginRight="auto"
        text.style.marginTop="16px"

        document.getElementsByClassName('service-button')[2].append(text)
        document.getElementsByClassName('service-button')[2].style.position="relative"
        document.getElementsByClassName('service-button')[2].style.top="-654px"
        document.getElementsByClassName('service-button')[2].style.backgroundColor = "#2F80ED"
        document.getElementsByClassName('service-button')[2].style.height="810px"
        document.getElementsByClassName('service-button')[2].style.paddingTop="300px"

    }else if(this.innerHTML === 'Ремонт помещений' && event.type == 'mouseover'){
        channgeTitle.textContent = 'Ремонт помещений';
        channgeTitle.style.color = "white";

        header.style.backgroundImage = "url(./images/ImagePomechenii.png)";
        header.style.backgroundRepeat="no-repeat";
        header.style.color="white";
        
        headerService.style.backgroundImage = "none";
        headerService.style.backgroundSize = "cover";
        headerService.style.backgroundRepeat = "no-repeat";
        
        button.style.color="white";
        button.style.border = "1px solid white";

        menuWhite.style.display="flex"
        menu.style.display="none"

        text.textContent ="С другой стороны реализация намеченных плановых заданий требуют от нас анализа."
        text.style.fontSize = "14px"
        text.style.fontFamily="Montserrat"
        text.style.width="280px"
        text.style.marginLeft="auto"
        text.style.marginRight="auto"
        text.style.marginTop="16px"

        document.getElementsByClassName('service-button')[3].append(text)
        document.getElementsByClassName('service-button')[3].style.position="relative"
        document.getElementsByClassName('service-button')[3].style.top="-654px"
        document.getElementsByClassName('service-button')[3].style.backgroundColor = "#9B51E0"
        document.getElementsByClassName('service-button')[3].style.height="810px"
        document.getElementsByClassName('service-button')[3].style.paddingTop="300px"

    }else if(event.type == 'mouseout'){
        channgeTitle.textContent = 'Ремонт и дизайн';
        channgeTitle.style.color = "black";
        channgeTitle.style.textShadow = "none";

        header.style.backgroundImage = "none";
        headerService.style.backgroundImage = "url(./images/Image.png)";

        button.style.color="black";
        button.style.border = "1px solid rgba(34, 34, 34, 0.3)";

        menuWhite.style.display="none"
        menu.style.display="flex"

        document.getElementsByClassName('service-button')[0].style.position="none"
        document.getElementsByClassName('service-button')[0].style.top="0"
        document.getElementsByClassName('service-button')[0].style.backgroundColor = "transparent"
        document.getElementsByClassName('service-button')[0].style.height="85px"
        document.getElementsByClassName('service-button')[0].style.paddingTop="0px"

        document.getElementsByClassName('service-button')[1].style.position="none"
        document.getElementsByClassName('service-button')[1].style.top="0"
        document.getElementsByClassName('service-button')[1].style.backgroundColor = "transparent"
        document.getElementsByClassName('service-button')[1].style.height="85px"
        document.getElementsByClassName('service-button')[1].style.paddingTop="0px"

        document.getElementsByClassName('service-button')[2].style.position="none"
        document.getElementsByClassName('service-button')[2].style.top="0"
        document.getElementsByClassName('service-button')[2].style.backgroundColor = "transparent"
        document.getElementsByClassName('service-button')[2].style.height="85px"
        document.getElementsByClassName('service-button')[2].style.paddingTop="0px"

        document.getElementsByClassName('service-button')[3].style.position="none"
        document.getElementsByClassName('service-button')[3].style.top="0"
        document.getElementsByClassName('service-button')[3].style.backgroundColor = "transparent"
        document.getElementsByClassName('service-button')[3].style.height="85px"
        document.getElementsByClassName('service-button')[3].style.paddingTop="0px"

        text.remove()
    }
  }
}
