const filterContainer = document.querySelector(".nav-bar"),
galleryItems= document.querySelectorAll(".movie");


filterContainer.addEventListener("click",(event)=>{

    if(event.target.classList.contains("filter-item")){
        filterContainer.querySelector(".active").classList.remove("active");

        event.target.classList.add("active");
        const filterValue = event.target.getAttribute("data-filter");
        galleryItems.forEach((item) =>{
            if (item.classList.contains(filterValue)){
                item.classList.remove("hide");
                item.classList.add("show");
            }
            else{
                item.classList.remove("show");
                item.classList.add("hide");
            }
        });
    }
});

