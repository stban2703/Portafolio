const projectsList = [
    {
        id: "solidar",
        previewUrl: "solidar.png",
        floatUrl: "solidarfloat.png",
        title: "Solidar"
    },
    {
        id: "liberalasaves",
        previewUrl: "liberalasaves.png",
        floatUrl: "liberalasavesfloat.png",
        title: "Libera las aves"
    },
    {
        id: "eltestigo",
        previewUrl: "eltestigo.png",
        floatUrl: "eltestigo.png",
        title: "El testigo"
    },
    {
        id: "mimarca",
        previewUrl: "mimarca.png",
        floatUrl: "mimarcafloat.png",
        title: "Mi marca"
    },
    {
        id: "fit2",
        previewUrl: "fit2.png",
        floatUrl: "fit2float.png",
        title: "Fit 2"
    },
    {
        id: "fit2",
        previewUrl: "fit2.png",
        floatUrl: "fit2float.png",
        title: "Samsung Landing Page"
    }
]

const projects = $(".project")

const projectsRowRight = $(".myWork__row--right")
const projectsRowLeft = $(".myWork__row--left")

projectsList.forEach((e, i) => {
    const projectElement = document.createElement('section');
    projectElement.classList.add("project")
    projectElement.id = e.id;
    projectElement.innerHTML = `
    <section class="project__preview" style="background-image: url('./public/img/${e.previewUrl}');">
        <img class="project__float" src="./public/img/${e.floatUrl}" alt="${e.title}">
    </section>
    <h3 class="project__title">
        ${e.title}
<   /h3>
    `

    if(i < 3) {
        //projectsRowRight
    }

    console.log(projectElement)
})

