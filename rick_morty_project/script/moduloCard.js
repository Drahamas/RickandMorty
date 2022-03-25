export const ShowCard = (data, container) => {
    // container.innerHTML = '';
    data.forEach(element => {
        const { id, name, image} = element;
        container.innerHTML += `
            <div>
                <div class = "cards">
                    <div class="card">
                        <img src="./img/image1.png" alt="">
                    </div>
                    <div class="card back">
                        <img class='imagen' src=${image} id=${id} alt=${name} />
                    </div>
                <div>
            </div>
        `
    });
}
