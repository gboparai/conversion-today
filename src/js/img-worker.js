import { initializeImageMagick, ImageMagick } from "@imagemagick/magick-wasm/image-magick";


onmessage = e => {
    let payload = e.data;
    let action = payload.action;

    if (action === "load") {
        postMessage({
            status: "loaded"
        });
    } else if (action === "process") {

        let file = payload.file;
        let config = payload.config;
        let extension = config.format.extension;
        file.arrayBuffer().then((d) => {

            initializeImageMagick().then(async () => {

                ImageMagick.read(new Uint8Array(d), (image) => {

                    image.write(data => {
                        let blob = new Blob([data], { type: `image/${extension}` });
                        postMessage({
                            status: "processed",
                            output: blob,
                            config: config,
                            id: payload.id,
                        });

                    }, config.format.magickFormat);

                });
            }).catch(err => {
                console.log(err)
                postMessage({
                    status: "failed",
                    id: payload.id,
                });
            });
        });

    }

};