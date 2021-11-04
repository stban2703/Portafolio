$(document).ready(function () {
    moveToSection("#moveToHome", "home")
    moveToSection("#moveToAboutMe", "aboutMe")
    moveToSection("#moveToMyWork", "myWork")
    moveToSection("#moveToAboutMe", "aboutMe")
    moveToSection(".moveToContactMe", "contactMe")

    const projectsRowRight = $(".myWork__row--right")
    const projectsRowLeft = $(".myWork__row--left")

    projectsRowRight.html(``)
    projectsRowLeft.html(``)

    projectsList.forEach((e, i) => {
        const projectElement = $(
            `<section class="project" id="${e.id}">
                <section class="project__preview" style="background-image: url('./public/img/${e.previewUrl}');">
                    <img class="project__float" src="./public/img/${e.floatUrl}" alt="${e.title}">
                </section>
                <h3 class="project__title">
                    ${e.title}
                </h3>
            </section>`)

        projectElement.click(function (event) {
            redirect(`/gallery/${e.id}`);
        })

        if (i < 3) {
            projectsRowRight.append(projectElement)
        } else {
            projectsRowLeft.append(projectElement)
        }
    })

    closeGallery()
    navBetweenProjects()

    function closeGallery() {
        $(".gallery__close").click(() => {
            redirect("/home")
        })
    }

    function moveToSection(target, section) {
        $(`${target}`).click(function () {
            $([document.documentElement, document.body]).animate({
                scrollTop: $(`#${section}`).offset().top
            }, 500);
        });
    }

    function navBetweenProjects() {
        let idList = ["solidar", "liberalasaves", "eltestigo", "mimarca", "fit2", "samsunglandingpage"]
        $(".gallery__navBtn--left").click(() => {
            let currentId = projectRoute
            let currentPos = idList.findIndex(project => project.includes(currentId))
            if(currentPos > 0) {
                redirect(`/gallery/${idList[currentPos - 1]}`);
            } else {
                redirect(`/gallery/${idList[idList.length - 1]}`);
            }
        })

        $(".gallery__navBtn--right").click(() => {
            let currentId = projectRoute
            let currentPos = idList.findIndex(project => project.includes(currentId))
            if(currentPos < idList.length - 1) {
                redirect(`/gallery/${idList[currentPos + 1]}`);
            } else {
                redirect(`/gallery/${idList[0]}`);
            }
        })
    }
})