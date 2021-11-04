let comeFromHome = false;

const homeScreen = () => {
    $(".mainPage").removeClass("hidden")
    $(".gallery").addClass("hidden")
    if (comeFromHome) {
        window.scrollTo(0, $(`#myWork`).offset().top)
    }
}

const galleryScreen = () => {
    comeFromHome = true
    $(".gallery").removeClass("hidden")
    $(".mainPage").addClass("hidden")
    window.scrollTo(0, 0)
    console.log(projectRoute)
    switch (projectRoute) {
        case "solidar":
            $(".gallery").html(solidarPage)
            break;
        case "liberalasaves":
            $(".gallery").html(liberaPage)
            break;
        case "eltestigo":
            $(".gallery").html(elTestigoPage)
            break;
        case "mimarca":
            $(".gallery").html(miMarcaPage)
            break;
    }
}