function handleAvatarChange(e, setAvatarUrl) {
    const file = e.target.files[0];
    if (file) {
        setAvatarUrl(URL.createObjectURL(file));
    }
}

function removeImage(setAvatarUrl) {
    setAvatarUrl(null)
}

function validateImage(fileList) {
    const image = fileList[0];
    if (!image || image.type == "" || image.size == 0) return "Upload your photo (JPG or PNG, max size: 500KB).";
    if (image.size > 500 * 1024) return "File too large. Please upload a photo under 500KB";
    return true;
}

function isString(value) {
    if (typeof value !== 'string' || value.trim() === '') return 'Invalid';
    return true;
}

export { handleAvatarChange, removeImage, validateImage, isString };