export const getUserMedia = (() => {
    const properMethod = (
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia
    ).bind(navigator);

    return (options, successCallback, failureCallback) => {
        properMethod(options, successCallback, failureCallback);
    };
})();
