export const download = (url) => {
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const blobURL = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = blobURL;
            a.style = "display: none";
            a.download = 'video';
            document.body.appendChild(a);
            a.click();
        })
        .catch((e) => console.log('error'));
};