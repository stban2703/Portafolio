const homeScreen = () => {
    $(".mainPage").removeClass("hidden")
    $(".gallery").addClass("hidden")
}

const galleryScreen = () => {
    $(".gallery").removeClass("hidden")
    $(".mainPage").addClass("hidden")
    window.scrollTo(0, 0)
}