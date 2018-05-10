const galleryItems = [
    { preview: 'img/preview-01.jpeg', fullview: 'img/fullview-01.jpeg', alt: "alt text 01" },
    { preview: 'img/preview-02.jpeg', fullview: 'img/fullview-02.jpeg', alt: "alt text 02" },
    { preview: 'img/preview-03.jpeg', fullview: 'img/fullview-03.jpeg', alt: "alt text 03" },
    { preview: 'img/preview-04.jpeg', fullview: 'img/fullview-04.jpeg', alt: "alt text 04" },
    { preview: 'img/preview-05.jpeg', fullview: 'img/fullview-05.jpeg', alt: "alt text 05" },
    { preview: 'img/preview-06.jpeg', fullview: 'img/fullview-06.jpeg', alt: "alt text 06" },
    { preview: 'img/preview-07.jpeg', fullview: 'img/fullview-07.jpeg', alt: "alt text 07" },
    { preview: 'img/preview-08.jpeg', fullview: 'img/fullview-08.jpeg', alt: "alt text 08" },
    { preview: 'img/preview-09.jpeg', fullview: 'img/fullview-09.jpeg', alt: "alt text 09" },
    { preview: 'img/preview-10.jpeg', fullview: 'img/fullview-10.jpeg', alt: "alt text 10" },
    { preview: 'img/preview-11.jpeg', fullview: 'img/fullview-11.jpeg', alt: "alt text 11" },
    { preview: 'img/preview-12.jpeg', fullview: 'img/fullview-12.jpeg', alt: "alt text 12" },
];
{/* <div class="fullview">
<!-- Если выбран первый элемент из preview -->
<img src="img/fullview-image-1.jpeg" alt="alt text 1">
</div>
<ul class="preview">
<li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
<li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
<li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
</ul> */}

function fullView(url, alt) { //Создаем функцию в которую передаем url для src атрибута картинки
    let string = `<div class="fullview">
    <img src="${url}" alt="${alt}">
    </div>`; // Создаем строку с розметкой в которую будет передаваться "${url}".
    imgGallery.insertAdjacentHTML('afterBegin', string);
}

let imgGallery = document.querySelector('.image-gallery'); // Получаем доступ к ДОМ элементу в который будем вставлять розметку.

fullView(galleryItems[0].fullview, galleryItems[0].alt);

function preView(data) {
    let string = `<ul class="preview">
    ${data.reduce((acc, item) => acc + `<li class="preview-item"><img src="${item.preview}" data-fullview="${item.fullview}" alt="${item.alt}"></li>`
        , '')}
  </ul>`;
    return string;
}
imgGallery.insertAdjacentHTML('beforeend', preView(galleryItems));

let fullViewImage = document.querySelector(".fullview>img");
let active = null;

function handleClickPreview(event) {
    if(event.target.tagName === 'IMG'){
        for(let item of previewContainer.children) { // Вариант удаления класса active со всех елементов li
            item.firstElementChild.classList.remove('active');
        }
        // active !== null && active.classList.remove('active');
        // if(active !== null) { // тоже что и в 53 строке, только там это в одну строку ;)
        //   active.classList.remove('active')
        // }

        fullViewImage.src = event.target.dataset.fullview;
        fullViewImage.alt = event.target.alt;

        event.target.classList.add('active');
        // active = event.target;
    }
}

let previewContainer = document.querySelector(".preview");
previewContainer.addEventListener("click", handleClickPreview);



// // Примерное отображение DOM узла в виде объекта
// let image = document.querySelector('.preview>img');
// // таким выражением мы в переменную image сохраняем ссылку на объект дом узла подобного вида
//
// let image = {
//   tagname: 'img',
//   scr: 'img/preview-01.jpeg',
//   alt: 'alt text 1',
//   dataset: {
//     fullView: 'img/fullview-01.jpeg',
//   }
// }
// этот объект отображение HTML тега img который находится ниже
{/* <ul class="preview">
<li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
</ul> */}