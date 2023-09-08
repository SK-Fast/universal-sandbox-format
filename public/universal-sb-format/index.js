const convertBtn = document.querySelector("#convert-btn")
const fromFormatOption = document.querySelector("#from-format")
const toFormatOption = document.querySelector("#to-format")
const fileUploadField = document.querySelector("#place-choose")
let sourceBuffer = {}

const formats = {
    pt: require('./converters/polytoria.js'),
    bh: require('./converters/brick-hill.js'),
    worldtobuild: require('./converters/worldtobuild.js'),
}

for (const [k, v] of Object.entries(formats)) {
    const option = `<option value=${k}>${v.metadata.platformName} ${v.metadata.supportedVersion} (${v.metadata.fileExtension})</option>`
    if (v['toUniversal']) {
        fromFormatOption.innerHTML += option
    }

    if (v['fromUniversal']) {
        toFormatOption.innerHTML += option
    }
}

const convertFile = async () => {
    const fromModule = formats[fromFormatOption.value]
    const toModule = formats[toFormatOption.value]
    let dataFeed = sourceBuffer

    if (fromModule.metadata.fileType == "text") {
        const textDec = new TextDecoder("utf-8")
        dataFeed = textDec.decode(sourceBuffer)
    }

    const uni = await fromModule.toUniversal(dataFeed)
    const converted = await toModule.fromUniversal(uni)

    // prompt save
    const link = document.createElement("a")
    const file = new Blob([converted], { type: 'text/plain' })
    link.href = URL.createObjectURL(file)
    link.download = `converted${toModule.metadata.fileExtension}`
    link.click()
    URL.revokeObjectURL(link.href)


        /*
    var oMyBlob = new Blob(converted, { type: 'text/plain' }); // the blob
    window.open(URL.createObjectURL(oMyBlob));

    const a = document.getElementById("a");
    const file = new Blob([converted], {type: "text/plain"});
    a.href = URL.createObjectURL(file);
    a.download = `converted${toModule.metadata.fileExtension}`;
    */
}

const handleFileSelect = (event) => {
    let files = event.target.files;

    let f = files[0];

    let reader = new FileReader();
    reader.onload = (function (theFile) {
        const fileExt = "." + theFile.name.split('.').slice(-1)

        let foundExt = false
        
        for (const [k,v] of Object.entries(formats)) {
            if (v.metadata.fileExtension == fileExt) {
                fromFormatOption.value = k
                foundExt = true
            }
        }

        if (!foundExt) {
            alert(`The ${fileExt} file format is not supported.`)
            return
        }

        return function (e) {
            sourceBuffer = e.target.result
        };
    })(f);

    // Read in the image file as a data URL.
    reader.readAsArrayBuffer(f);
}

convertBtn.addEventListener("click", () => { convertFile() })
fileUploadField.addEventListener("change", handleFileSelect)