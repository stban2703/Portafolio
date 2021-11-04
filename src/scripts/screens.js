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
    switch (projectRoute) {
        case "solidar":
            $(".gallery__title").text("Solidar")
            $(".gallery__content").html(solidarPage)
            break;
        case "liberalasaves":
            $(".gallery__title").text("Libera las aves")
            $(".gallery__content").html(liberaPage)
            break;
        case "eltestigo":
            $(".gallery__title").text("El testigo")
            $(".gallery__content").html(elTestigoPage)
            break;
        case "mimarca":
            $(".gallery__title").text("Mi marca")
            $(".gallery__content").html(miMarcaPage)
            break;
        case "fit2":
            $(".gallery__title").text("Fit 2")
            $(".gallery__content").html(fit2Page)
            break;
        case "samsunglandingpage":
            $(".gallery__title").text("Samsung Landing Page")
            $(".gallery__content").html(samsungLandingPage)
            break;
    }
}