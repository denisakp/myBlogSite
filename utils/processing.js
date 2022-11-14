import technos from "~/data/technos";

const processImagePath = (name) => {
    let path
    technos.map((element) => {
        return element.techs.find((item) => {
            if(item.name === name) {
                path = item.image;
            }
        })
    })
    return path
}
export { processImagePath }