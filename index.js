const fetchCategories=()=>{
    const url='https://openapi.programming-hero.com/api/news/categories';
    fetch(url)
    .then(res=>res.json())
    .then(data=> showCategories(data.data))
}
const showCategories=data=>{
    console.log(data);
    const categoriesContainer=document.getElementById("categories-container");
    // console.log(categoriesContainer);

}