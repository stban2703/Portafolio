$(document).ready(function () {  

    $("#moveToHome").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#home").offset().top
        }, 500);
    });

    $("#moveToAboutMe").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#aboutMe").offset().top
        }, 500);
    });

    $("#moveToMyWork").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#myWork").offset().top
        }, 500);
    });

    $(".moveToContactMe").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#contactMe").offset().top
        }, 500);
    });


    const gallery = $(".gallery")
    const projectsRowRight = $(".myWork__row--right")
    const projectsRowLeft = $(".myWork__row--left")

    projectsRowRight.html(``)
    projectsRowLeft.html(``)

    projectsList.forEach((e, i) => {
        //let productUrl = `index.html?${e.id}`;
        const projectElement = $(
            `<section class="project">
                <section class="project__preview" style="background-image: url('./public/img/${e.previewUrl}');">
                    <img class="project__float" src="./public/img/${e.floatUrl}" alt="${e.title}">
                </section>
                <h3 class="project__title">
                    ${e.title}
                </h3>
            </section>`)

        projectElement.click(function() {
            //window.history.pushState({}, )
            //$("body").addClass("notScroll")
            //gallery.removeClass("hidden")
        })

        if (i < 3) {
            projectsRowRight.append(projectElement)
        } else {
            projectsRowLeft.append(projectElement)
        }
    })
})