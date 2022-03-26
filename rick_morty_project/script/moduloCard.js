export const ShowCard = (data, container) => {
    container.innerHTML = '';
    data.forEach(element => {
        const { id, name, image} = element;         //Desestructuración
        container.innerHTML += `
            <div class = "cards">
                <div class="card front">
                    <img class = "imagFront" id=${id} src="../img/image1.png" alt="">
                </div>
                <div class="card back">
                    <img class='imagBack ' src=${image} id=${id} alt=${name} />
                </div>
            <div>
        `
    });
}
