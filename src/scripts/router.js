let baseLink = "";
let linkRoute = "";
let projectRoute = "";

function readLink() {
  let link = window.location.href;

  if (!link.includes("#")) {
    baseLink = link + "#";
    window.location.href = baseLink;

  } else {
    let linkArray = [];
    linkArray = link.split("#");
    baseLink = linkArray[0] + "#";
    linkRoute = linkArray[1];
    projectRoute = "";
    if (linkRoute.includes("project")) {
      let localRoute = linkRoute.split("/");
      linkRoute = "/" + localRoute[1];
      if (localRoute[2]) {
          projectRoute = localRoute[2];
      }
    }
  }
}

function router() {
    readLink()
    const body = $("body")

    switch(linkRoute) {
        case "":
            body.html(body)
            break;

        case "solidar":
            body.html(body)
            break;
    }
}