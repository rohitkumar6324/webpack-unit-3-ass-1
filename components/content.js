const content = () => {
    return `<div id="random">
        <div id="random-label">Recipe of the day 😋</div>
        <div id="random-data">
          <div id="random-text">
            <h2 id="random-title"></h2>
            <div id="ingredients">
              <h3></h3>
              <ul id="ingredients-list"></ul>
            </div>
            <div id="random-recipe">
              <h3></h3>
              <p id="random-recipe-data"></p>
            </div>
          </div>
          <div id="random-img">
            <img alt="" />
          </div>
        </div>
      </div>`
}

const fetchRecipe = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            console.log(res.meals);
            appendData(res.meals);
        });

    const appendData = (data) => {
        data.forEach((elem) => {
            let image = document.querySelector("#random-img > img");
            image.src = elem.strMealThumb;
            image.style.height = "100%";
            image.style.borderRadius = "10px";
            document.querySelector("#random-title").innerText = elem.strMeal;
            let x = getIngredients(elem);
            let h3 = document.querySelector("#ingredients > h3");
            document.querySelector("#random-recipe > h3").innerText = "Recipe";
            document.querySelector("#random-recipe-data").innerText =
                elem.strInstructions;
            h3.innerText = "Ingredients";
            x.forEach((el) => {
                let y = el.join(" - ");
                let list = document.createElement("li");
                list.innerText = y;
                document.querySelector("#ingredients-list").append(list);
            });
        });
    };



}
const getIngredients = (data) => {
    let x = 1;
    let arr = [];
    while (data[`strIngredient${x}`] !== "") {
        let y = [data[`strIngredient${x}`], data[`strMeasure${x}`]];
        arr.push(y);
        x++;
    }
    console.log(arr);
    return arr;
};


export { content, fetchRecipe, getIngredients };