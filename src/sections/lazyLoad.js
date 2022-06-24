const images = document.querySelectorAll(".thumb");
images.forEach(image => {
    const dataSrc = image.getAttribute('img-data')
    console.log(dataSrc);

})
    // const options = {};
    // const imageObserver = new IntersectionObserver((entries, observer) => {
    //     entries.forEach(entry => {
    //         if (!entry.isIntersecting) return;
    //         const image = entry.target;
    //         console.log(image.src);
    //         const newUrl = image.getAttribute('img-data');
    //         image.src = newUrl;
    //         observer.unobserve(image);
    //     })
    // }, options);

    // images.forEach(image => {
    //     imageObserver.observer(image)
    // })