const errors = (err) => {
    network();
};

window.addEventListener('DOMContentLoaded', async (e) => {
    // document.querySelector('#network').innerHTML = navigator.connection.effectiveType;
    // m();
    // await I();

    const dropArea = document.getElementById('drop-area');

    dropArea.addEventListener('dragover', (event) => {
        event.stopPropagation();
        event.preventDefault();
        // Style the drag-and-drop as a "copy file" operation.
        event.dataTransfer.dropEffect = 'copy';
    });

    dropArea.addEventListener('drop', (event) => {
        event.stopPropagation();
        event.preventDefault();
        const fileList = event.dataTransfer.files;
        console.log(fileList);

        for (const file of fileList) {
            // Not supported in Safari for iOS.
            const name = file.name ? file.name : 'NOT SUPPORTED';
            // Not supported in Firefox for Android or Opera for Android.
            const type = file.type ? file.type : 'NOT SUPPORTED';
            // Unknown cross-browser support.
            const size = file.size ? file.size : 'NOT SUPPORTED';
            console.log({file, name, type, size});
          }
    });
});

function share() {
    if (navigator.canShare()) {
        navigator.share({
            text: 'Nevvrmbk new website!',
            title: 'Share!',
            url: 'https://h.nevvrmbk.cloud'
        })
            .catch((err) => {
                errors(err);
            })
    }
}

function network() {
    document.querySelector('#network').innerHTML = navigator.connection.effectiveType;
    navigator.connection.addEventListener('change', (e) => {
        document.querySelector('#network').innerHTML = navigator.connection.effectiveType;
    });
}

function g() {
    navigator.geolocation.getCurrentPosition(console.log, console.error);
}

function m() {
    window.addEventListener('devicemotion', (e) => {
        console.log(e.rotationRate.alpha);
        console.log(e.rotationRate.beta);
        console.log(e.rotationRate.gamma);
    })
}

async function I() {
    if ('IdleDetector' in window) {
        const state = await IdleDetector.requestPermission();
        console.log(state);

        const idleDetector = new IdleDetector();

        idleDetector.addEventListener('change', () => {
            const { userState, screenState } = idleDetector;

            console.log(userState);
            console.log(screenState);
        });

        await idleDetector.start({
            threshold: 120000,
        })
    }
}
