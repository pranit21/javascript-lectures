function loadScript(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
    
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error('Error while loading a script.'));
    
        document.head.append(script);
    });
}

loadScript('./main1.js')
    .then(value => {
        console.log(value.src);
        return loadScript('./main2.js');
    })
    .then(value => {
        console.log(value.src);
        return loadScript('./promises.js');
    })
    .then(value => {
        console.log(value.src);
    })
    .catch(error => {
        console.log(error);
    });