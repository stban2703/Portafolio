$(document).ready(function () {
    moveToSection("#moveToHome", "home")
    moveToSection("#moveToAboutMe", "aboutMe")
    moveToSection("#moveToMyWork", "myWork")
    moveToSection("#moveToAboutMe", "aboutMe")
    moveToSection(".moveToContactMe", "contactMe")

    const projectsContainer = $(".myWork__body")
    projectsContainer.html(``)

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

        projectsContainer.append(projectElement)
    })

    closeGallery()
    navBetweenProjects()

    gsap.registerPlugin(ScrollTrigger);

    const aboutMe = $("#aboutMe")
    const softSkills = $(".softSkill")
    const softSkillTL = gsap.timeline({
        scrollTrigger: {
            trigger: aboutMe,
            start: "top center",
            toggleActions: "play none none reset"
        },
        ease: "in"
    });

    const fieldsInterest = $("#fieldsOfInterest")
    const fields = $(".field")
    const fieldsTL = gsap.timeline({
        scrollTrigger: {
            trigger: fieldsInterest,
            start: "top center",
            toggleActions: "play none none reset"
        },
        ease: "power3"
    });

    const ideSection = $("#ideSection")
    const ides = $(".ide")
    const ideTL = gsap.timeline({
        scrollTrigger: {
            trigger: ideSection,
            start: "top center",
            toggleActions: "play none none reset"
        },
        ease: "in"
    });

    softSkillTL.
        to(softSkills[0], { duration: 0.4, opacity: 1, rotationY: 0 }).
        to(softSkills[1], { duration: 0.4, opacity: 1, rotationY: 0 }).
        to(softSkills[2], { duration: 0.4, opacity: 1, rotationY: 0 }).
        to(softSkills[3], { duration: 0.4, opacity: 1, rotationY: 0 })

    fieldsTL.
        to(fields[0], { duration: 0.4, opacity: 1, y: 0, ease: "power3" }).
        to(fields[1], { duration: 0.4, opacity: 1, y: 0, ease: "power3" }).
        to(fields[2], { duration: 0.4, opacity: 1, y: 0, ease: "power3" })

    ideTL.
        to(ides[0], { duration: 0.4, opacity: 1, rotationX: 0, ease: "in" }).
        to(ides[1], { duration: 0.4, opacity: 1, rotationX: 0, ease: "in" }).
        to(ides[2], { duration: 0.4, opacity: 1, rotationX: 0, ease: "in" })

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
            if (currentPos > 0) {
                redirect(`/gallery/${idList[currentPos - 1]}`);
            } else {
                redirect(`/gallery/${idList[idList.length - 1]}`);
            }
        })

        $(".gallery__navBtn--right").click(() => {
            let currentId = projectRoute
            let currentPos = idList.findIndex(project => project.includes(currentId))
            if (currentPos < idList.length - 1) {
                redirect(`/gallery/${idList[currentPos + 1]}`);
            } else {
                redirect(`/gallery/${idList[0]}`);
            }
        })
    }
})