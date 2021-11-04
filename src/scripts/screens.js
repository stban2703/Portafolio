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
    $(".mainPage").addClass("hidden")
    $(".gallery").removeClass("hidden")
    $(".gallery__view").removeClass("animate__animated animate__fadeIn")
    $(".loader").removeClass("hidden")
    $(".gallery__content").addClass("gallery__content--preload")
    window.scrollTo(0, 0)
    switch (projectRoute) {
        case "solidar":
            $(".gallery__title").text("Solidar")
            $(".gallery__view").html(solidarPage)
            break;
        case "liberalasaves":
            $(".gallery__title").text("Libera las aves")
            $(".gallery__view").html(liberaPage)
            break;
        case "eltestigo":
            $(".gallery__title").text("El testigo")
            $(".gallery__view").html(elTestigoPage)
            break;
        case "mimarca":
            $(".gallery__title").text("Mi marca")
            $(".gallery__view").html(miMarcaPage)
            break;
        case "fit2":
            $(".gallery__title").text("Fit 2")
            $(".gallery__view").html(fit2Page)
            break;
        case "samsunglandingpage":
            $(".gallery__title").text("Samsung Landing Page")
            $(".gallery__view").html(samsungLandingPage)
            break;
    }
    $(".gallery__content").removeClass("gallery__content--preload")
    setTimeout(() => {
        $(".loader").addClass("hidden")
        $(".gallery__view").addClass("animate__animated animate__fadeIn")
    }, 2000)
}