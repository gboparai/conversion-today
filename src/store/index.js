import { createStore } from 'vuex';
import Worker from 'worker-loader!@/js/img-worker';
import { FILE_STATUS } from '@/js/constants';
import { MagickFormat } from "@imagemagick/magick-wasm/magick-format";

export default createStore({
    state: {
        files: [],
        nextIndex: 0,
        worker: null,
        formats: [
            {
                name: 'jpg',
                extension: 'jpg',
                title:'Joint Photographic Experts Group',  
                description: 'A JPG file is a raster image saved in the JPEG format, commonly used to store digital photographs and graphics created by image-editing software. JPEG features lossy compression that can significantly reduce the size of an image without much degradation and supports up to 16,777,216 colors.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Jpg,
            },
            {
                name: 'jpeg',
                extension: 'jpeg',
                title:'Joint Photographic Experts Group', 
                description: 'A JPEG file is an image saved in a compressed graphic format standardized by the Joint Photographic Experts Group (JPEG). It supports up to 24-bit color and utilizes lossy compression, which may noticeably reduce the image quality if high amounts are applied. Users commonly save digital photos and web graphics as JPEG files.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Jpeg,
            },
            {
                name: 'png',
                extension: 'png',
                title:'Portable Network Graphic',  
                description: 'A PNG file is an image saved in the Portable Network Graphic (PNG) format, commonly used to store web graphics, digital photographs, and images with transparent backgrounds. It is a raster graphic similar to a .JPG image but is compressed with lossless compression and supports transparency.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Png,
            },
            {
                name: 'tiff',
                extension: 'tiff',
                title:'Tagged Image File Format',  
                description: 'A TIFF file is a graphics container that stores raster images in the Tagged Image File Format (TIFF). It contains high-quality graphics that support color depths from 1 to 24-bit and supports both lossy and lossless compression. TIFF files also support multiple layers and pages.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Tiff,
            },
            {
                name: 'webp',
                extension: 'webp',
                title:'WebP',  
                description: 'A WEBP file is an image saved in the WebP (pronounced "Weppy") raster image format developed by Google for web graphics. The WebP format reduces file size more than standard JPEG compression while maintaining similar or better image quality. It supports both lossy and lossless compression and includes an alpha channel for transparency, similar to the PNG format.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Webp,
            },
            {
                name: 'gif',
                extension: 'gif',
                title:'Graphical Interchange Format File', 
                description: 'A GIF file is an image saved in the Graphical Interchange Format (GIF). It may contain up to 256 indexed colors, with a color palette that may be a predefined set of colors or adapted to the colors in the image. GIF files are saved in a lossless format, meaning that the GIF compression does not degrade the image\'s clarity.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Gif,
            },
            {
                name: 'bmp',
                extension: 'bmp',
                title:'Bitmap Image',  
                description: 'A BMP file is an image saved in the Bitmap (BMP) raster image format developed by Microsoft. It contains uncompressed image data that supports monochrome and color images at variable color bit depths and image metadata. Users commonly save digital photos as BMP files.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Bmp,
            },
            {
                name: 'svg',
                extension: 'svg',
                title:'Scalable Vector Graphics File',  
                description: 'An SVG file is a graphic saved in a two-dimensional vector graphic format created by the World Wide Web Consortium (W3C). It stores information that describes an image in a text format based on XML. SVG files may include vector shapes, embedded raster graphics (also known as bitmap images), and text.', 
                isConvertToOnly: true, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Svg,
            },
            {
                name: 'psd',
                extension: 'psd',
                title:'Adobe Photoshop Document',  
                description: 'A PSD file is an image file created by Adobe Photoshop, a professional image-editing program used to enhance digital photos and create web graphics. It is the native format used to save files in Photoshop. PSD files may include image layers, adjustment layers, layer masks, annotations, file information, keywords, and other Photoshop-specific elements. They are commonly created and shared among graphics professionals.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Psd,
            },
            {
                name: 'ai',
                extension: 'ai',
                title:'Adobe Illustrator Artwork', 
                description: 'An AI file is a vector graphic saved in the Adobe Illustrator Artwork (AI) format. It is created by Adobe Illustrator or exported by another graphics application, such as Adobe Photoshop. AI files are saved in a vector format that comprises paths connected by points rather than bitmap image data, allowing users to enlarge them without losing any image quality.', 
                isConvertToOnly: true, intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Ai,
            },
            {
                name: 'eps',
                extension: 'eps',
                title:'Encapsulated PostScript File',  
                description: 'An EPS file is a vector graphic saved in the Encapsulated PostScript (EPS) format. It contains PostScript-formatted image data, which is ideal for scaling high-resolution images, and may include bitmap image data and text. EPS files also store a low-resolution embedded bitmap image for previewing the graphic.', 
                isConvertToOnly: true, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Eps,
            },
          
            {
                name: 'svgz',
                extension: 'svgz',
                title:'Compressed SVG File',  
                description: 'An SVGZ file is a Scalable Vector Graphics (.SVG) file compressed with gzip compression. It contains graphics data in XML, which includes the positioning of lines, text, curves, colors, and shapes that make up a two-dimensional graphic. SVGZ files also support layers, transparency, gradients, animations, and filters.', 
                isConvertToOnly: true, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Svgz,
            },
            
            {
                name: 'dcx',
                extension: 'dcx',
                title:'Zsoft Multi-Page Paintbrush File',  
                description: 'Multi-page image file created by various image programs; contains a small header that identifies the DCX file followed by a sequence of .PCX files; commonly used to create digital fax files.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Dcx,
            },
            {
                name: 'dds',
                extension: 'dds',
                title:'DirectDraw Surface Image',  
                description: 'A DDS file is a raster image saved in the DirectDraw Surface (DDS) container format. It can store compressed and uncompressed pixel formats DDS files are often used for texturing video game unit models, but may also be used to store digital photos and Windows desktop backgrounds.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Dds,
            },
            {
                name: 'dpx',
                extension: 'dpx',
                title:'Digital Picture Exchange File',  
                description: 'A DPX file is a raster image saved in the Digital Picture Exchange (DPX) format, which is primarily used for transferring film images to a digital medium without loss of quality. It may contain a single frame but is typically exported as a frame sequence that contains a series of still images.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Dpx,
            },
            {
                name: 'exr',
                extension: 'ext',
                title:'OpenEXR Image',  
                description: 'An EXR file is a raster image stored in the OpenEXR format, a high dynamic-range (HDR) image format developed by Academy Software Foundation (ASWF). The EXR format supports multi-layer images, lossy and lossless compression, and 16-bit and 32-bit pixels.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Exr,
            },
            {
                name: 'fits',
                extension: 'fits',
                title:'Flexible Image Transport System File',  
                description: 'Bitmap graphic created in the FITS (Flexible Image Transport System) format, which was originally specified by the International Astronomical Union (IAU); may contain both binary data and ASCII text; used as a standard format for storing astronomical data.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Fits,
            },
            
            {
                name: 'jfif',
                extension: 'jfif',
                title:'JPEG File Interchange Format',  
                description: 'A JFIF file is a bitmap graphic that uses JPEG compression. It is saved using a variation of the common .JPEG file format, designed to include a minimal amount of data and allow easy exchange across multiple platforms and applications.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Jiff,
            },
            {
                name: 'jpc',
                extension: 'jpc',
                title:'JPEG 2000 Code Stream File',  
                description: 'Image format that uses JPEG 2000 advanced wavelet compression; supports color depths of 8, 24, and 32 bits per pixel; also supports grayscale, RGB, YCbCr, XYZ, and Lab color spaces.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Jpc,
            },
            {
                name: 'jpe',
                extension: 'jpe',
                title:'JPEG 2000 Code Stream File',  
                description: 'Image format that uses JPEG 2000 advanced wavelet compression; supports color depths of 8, 24, and 32 bits per pixel; also supports grayscale, RGB, YCbCr, XYZ, and Lab color spaces.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Jpe,
            },
            {
                name: 'jps',
                extension: 'jps',
                title:'Stereo JPEG Image',  
                description: 'A JPS file is a stereoscopic JPEG image used for creating 3D effects from 2D images. It contains two static images, one for the left eye and one for the right eye that are encoded as two side-by-side images in a single .JPG file.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Jps,
            },
            {
                name: 'jpm',
                extension: 'jpm',
                title:'JPEG 2000 Multi-layer bitmap file',  
                description: 'JPM files mostly belong to LuraDocument.jpm by Algo Vision LuraTech GmbH. An implementation of the new ISO standard JPEG2000/Part6 which is compression technology for scanned colored documents containing both bilevel elements (text, technical drawings) and images.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Jpm,
            },
           
            {
                name: 'jng',
                extension: 'jng',
                title:'JPEG Network Graphic',  
                description: 'Image file format related to the .PNG format, but uses lossy compression like standard .JPG files; developed as a sub-format for .MNG objects, but can also be used as a standalone raster image format.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Jng,
            },
            {
                name: 'j2c',
                extension: 'j2c',
                title:'JPEG 2000 Code Stream',  
                description: 'Bitmap image created using JPEG 2000 compression, which is similar to standard .JPG compression but uses a newer encoding standard that allows flexibility at the cost of computational complexity; can be viewed by most applications that support standard .JP2 files.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.J2c,
            },
            {
                name: 'j2k',
                extension: 'j2k',
                title:'JPEG 2000 Image',  
                description: 'Compressed bitmap image that uses wavelet compression instead of the DCT compression used by standard .JPEG images; supports 16-bit color, alpha transparency, and lossless compression.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.J2k,
            },
            {
                name: 'miff',
                extension: 'miff',
                title:'Magick Image File',  
                description: 'Image format used by ImageMagick, a program used to view, edit, and convert image formats; stores one or more bitmap images, along with any metadata, such as the author, copyright, image color profiles, and comments.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Miff,
            },
            {
                name: 'mng',
                extension: 'mng',
                title:'Multiple-image Network Graphic',  
                description: 'An MNG file is an animated image saved in the Multiple-image Network Graphics (MNG) file format. It contains multiple .PNG images that are shown in sequence to convey motion or animation. MNG files are similar to animated .GIF files, but use higher compression and support full alpha (multi-level transparency).', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Mng,
            },
            {
                name: 'palm',
                extension: 'palm',
                title:'Palm Pixmap',  
                description: 'This format is used for storing bitmap images. It supports many different file types and compression algorithms. One Palm bitmap file can contain multiple versions of the same images with different colors. These files are used on PALM devices.', 
                isConvertToOnly: true, 
                intermdeiate: ['png','gif'],
                magickFormat: MagickFormat.Palm,
            },
            {
                name: 'pam',
                extension: 'pam',
                title:'Common 2-dimensional bitmap format',  
                description: '', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Pam,
            },
            {
                name: 'pbm',
                extension: 'pbm',
                title:'Portable Bitmap',  
                description: 'PBM is a Portable image in black and white. Can be opened with programs: Adobe Photoshop CS, ACD Systems Canvas 15, ACD Systems ACDSee 17, Newera Graphics Converter Pro, Corel PaintShop Pro X6. File contains 1 bit per pixel. PBM is a kind of file format PPM. And can be readable or binary.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Pbm,
            },
            {
                name: 'pcd',
                extension: 'pcd',
                title:'Photo CD',  
                description: 'This format was developed by Kodak in order to store images on optical or other media. It is used as a format for archiving scanned documents on Kodak devices. It encodes images in 24-bit color and supports resolutions of up to 6144x4096 pixels.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Pcd,
            },
            {
                name: 'pcds',
                extension: 'pcds',
                title:'Photo CD',  
                description: 'PCDS files mostly belong to Photo-CD Image. multi-resolution : Bitmap graphics - Kodak Photo-CD format', isConvertToOnly: false, intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Pcds,
            },
            {
                name: 'pcl',
                extension: 'pcl',
                title:'Printer Command Language Document',  
                description: 'A PCL file is a digital printed document created in the Printer Command Language (PCL) page description language. It describes the layout of text and graphics for the document. The PCL format was originally used by Hewlett-Packard printers in the 1980s and is now used by HP LaserJet printers and others. PCL is widely-used but offers fewer features than the PostScript (.PS) format.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Pcl,
            },
            {
                name: 'pcx',
                extension: 'pcx',
                title:'Paintbrush Bitmap Image File',  
                description: 'Raster image format developed by ZSoft; became one of the original bitmap image formats for the DOS/Windows platform; supports 24-bit color images, 8-bit grayscale and indexed color images, and 1-bit black and white images; compressed using RLE encoding.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Pcx,
            },
            {
                name: 'pfa',
                extension: 'pfa',
                title:'PostScript Type 1',  
                description: 'This is a 7-bit font format used for directly downloading to a PostScript printer. It has two character encoding in hexadecimal. It has good compatibility with multiple font formats. PFA contains an outline for font symbols and is formatted in ASCII text data.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Pfa,
            },
            {
                name: 'pgm',
                extension: 'pgm',
                title:'Portable Graymap',  
                description: 'PGM is a storage format for grayscale images. Files in this format can be opened using software: ACDSee Photo Manager 14, ACD Systems Canvas 15, Corel PaintShop Pro X4. This type of file can be edited with a text editor. PGM files can be in two versions: P2 / P5. P2 are readable, P5 - to binary formats.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Pgm,
            },
            {
                name: 'psb',
                extension: 'psb',
                title:'Photoshop Large Document Format',  
                description: 'A PSB file is an image file created by Adobe Photoshop, a professional image-editing application. It contains an image that is larger than 30,000 x 30,000 pixels or 2 GB in size. PSB files are nearly identical to .PSD files except that they contain large images, so they tend to have large file sizes.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Psb,
            },
            {
                name: 'ptif',
                extension: 'ptif',
                title:'Pyramid Encoded TIFF',  
                description: 'PTIF files mostly belong to Pyramid Encoded TIFF. (multiple resolutions in one file)', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Ptif,
            },
            {
                name: 'p7',
                extension: 'p7',
                title:'PKCS #7 Digital Certificate File',  
                description: 'Digital certificate file used by various applications for authentication; contains a key that was generated using the Public-Key Cryptography Standards (PKCS) #7 specification; more commonly seen with the .P7C extension.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.P7,
            },
            {
                name: 'ras',
                extension: 'ras',
                title:'Remedy Archive System File',  
                description: 'Game resource file used by Max Payne video games; contains default information referenced by the game, such as textures, models, level data, and music; similar to .MPM files.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Ras,
            },

            {
                name: 'sgi',
                extension: 'sgi',
                title:'Silicon Graphics Image File',  
                description: 'Image saved in the native graphics format used by Silicon Graphics workstations; can store 8 to 32 bits per pixel; also supports Run-length encoding (RLE) compression for reducing the image file size.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Sgi,
            },
      
            {
                name: 'sun',
                extension: 'sun',
                title:'Sun Raster Graphic File',  
                description: 'Bitmap image generated by a Sun Microsystems workstation; native graphic format used by the Sun Unix operating system; uses a standard image format that can be read by several graphics programs.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Sun,
            },
            {
                name: 'tga',
                extension: 'tga',
                title:'Targa Graphic',  
                description: 'A TGA file is an image saved in the Targa raster graphic format designed by Truevision. It supports 8, 16, 24, or 32 bits per pixel at a maximum of 24 bits for RGB colors and an 8-bit alpha channel. TGA files are used for various types of images, such as digital photos and textures referenced by 3D video games.', 
                isConvertToOnly: true, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Tga,
            },
            {
                name: 'vda',
                extension: 'vda',
                title:'Targa Bitmap Image File',  
                description: 'Raster image formatted in the Targa Truevision format; stores image data using 1 to 32 bits per pixel, with 24 bits possible for the RGB data and 8 bits for the alpha (opacity)channel.', 
                isConvertToOnly: true, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Vda,
            },
            {
                name: 'vicar',
                extension: 'vicar',
                title:'VICAR Image File',  
                description: 'Raster image format developed by NASA\'s Jet Propulsion Laboratory; stores an image that has been taken on a mission by NASA\'s spacecraft; also contains information that describes the structure and type of data along with a history of processing that has been done to the image.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Vicar,
            },
            {
                name: 'viff',
                extension: 'viff',
                title:'Visualization Image File Format',  
                description: 'Image file used by VisiQuest Khoros, an software development kit (SDK) used to develop imaging software and other visualization tools; stores a bitmap image using color "bands;" may optionally store one or more color maps.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Viff,
            },
            {
                name: 'vips',
                extension: 'vips',
                title:'VIPS Image',  
                description: 'VIPS is a format used by libvips internally for calculation but it can also be used for storing images. It is simple, fast and has no size limit. However, only a few other programs are able to open such files which is why it is better to convert them to a more popular format.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Vips,
            },
            {
                name: 'xbm',
                extension: 'xbm',
                title:'X Windows system bitmap (black and white)',  
                description: 'This is a monochrome image format with a bitmap structure. It is used to store images of icons and cursors in the X Window System graphical user interface, which is used for remote connections. The structure of an XBM file consists of simple text written in the C programming language.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Xbm,
            },
            {
                name: 'xpm',
                extension: 'xpm',
                title:'X Windows system pixmap (color)',  
                description: 'This is an image file format written in textual form in the C language. It is used in the X Windows System interface for remote connections, which is designed to serve clients and servers. This format can be used to store color and monochrome images.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Xpm,
            },
            {
                name: 'xv',
                extension: 'xv',
                title:'Khoros Visualization image',  
                description: 'This is an image format that is used for visualization in the Khoros software suite. It is a kind of VIFF bitmap image. The format consists of color zones. It is used for visualization purposes in software for both commercial and scientific purposes.', 
                isConvertToOnly: false, 
                intermdeiate: ['png','gif','jpg', 'webp'],
                magickFormat: MagickFormat.Xv,
            }, 
        ],

        config: {
            format: null,
        }
    },
    mutations: {

        setFormat(state, format) {
            state.config.format = format;
        },
        // files
        addFile(state, fileObject) {
            state.files.push(fileObject);
        },
        clearFiles(state){
            state.files = [];
            state.nextIndex = 0;
        },
        setData(state, { id, data }) {
            let file = state.files.find(file => file.id === id);
            file.output.blob = data.output;
            file.output.config = data.config;
        },
        setUrl(state, { id, url }) {
            let file = state.files.find(file => file.id === id);
            file.output.url = url;
        },
        setName(state, { id, name }) {
            let file = state.files.find(file => file.id === id);
            file.output.name = name;
        },
        setStatus(state, { id, status }) {
            let file = state.files.find(file => file.id === id);
            file.status = status;
        },


        // others
        incrementId(state) {
            state.nextIndex++;
        },
        addWorker(state, worker) {
            state.worker = worker;
        }
       
    },
    actions: {
        
        loadWorker(context) {
            let imgWorker = new Worker();
            this.state.worker = imgWorker;

            imgWorker.postMessage({
                action: 'load',
            });
            imgWorker.onmessage = (e) => {
                let status = e.data.status;
                let processMore = false;
                if (status === 'loaded') {
                    console.log('loaded');
                } else if (status === 'processed') {
                    context.commit('setStatus', { id: e.data.id, status: FILE_STATUS.processed });
                    context.commit('setData', { id: e.data.id, data: e.data });
                    processMore = true;
                } else if (status === 'failed') {
                    context.commit('setStatus', { id: e.data.id, status: FILE_STATUS.failed });
                    processMore = true;
                }

                if (processMore) {
                    context.dispatch('processAllWaiting');
                }
            };
        },
        clearFiles(context) {
            context.commit('clearFiles');
        },
        setFormat(context, format){
            context.commit('setFormat', format);
        },
        addFile(context, file) {
            let fileObject = {
                id: context.state.nextIndex,
                ogFile: file,
                name: file.name,
                status: FILE_STATUS.initialized,
                output: {
                    blob: null,
                    name: null,
                    url: null,
                    config: null,
                },
                process: [],
            }
            context.commit('incrementId');
            context.commit('addFile', fileObject);
        },
        async addFiles(context, files) {
            for (let i = 0; i < files.length; i++) {
                context.dispatch('addFile', files[i]);
                await new Promise(r => setTimeout(r, 16));
            }
        },
        processAllFiles(context) {
            let notProcessed = context.state.files.filter(file => file.status === FILE_STATUS.initialized);
            notProcessed.forEach(file => {
                context.commit('setStatus', { id: file.id, status: FILE_STATUS.waiting });
            });
            context.dispatch('processAllWaiting');
        },
        processAllWaiting(context) {
            let processesRunning = context.state.files.filter(file => file.status === FILE_STATUS.processing).length;
            // run as many threads as possible
            for (let i = 0; i < navigator.hardwareConcurrency - processesRunning; i++) {
                let waitingFile = context.state.files.find(file => file.status === FILE_STATUS.waiting);
                if (waitingFile === undefined) break;

                context.dispatch('processFile', waitingFile.id);
            }
        },
        processFile(context, id) {

            let file = context.state.files.find(file => file.id === id);

            let config = clone(context.state.config);


            context.state.worker.postMessage({
                action: 'process',
                file: file.ogFile,
                id: file.id,
                config: config,
            });
            context.commit('setStatus', { id: id, status: FILE_STATUS.processing });
        }
    },
    modules: {
    }
})

function clone(object) {
    return JSON.parse(JSON.stringify(object));
}
