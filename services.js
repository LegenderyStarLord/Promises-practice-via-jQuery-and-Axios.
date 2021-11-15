//Server request via jquery-ajax

function getImages_2(pageNumber) {
    const promise = $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}`);
    return promise;   
};


//Server request via axios

function getImages(pageNumber) {
    const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber}`);
    return promise.then((response) => {
        return response.data;
    });   
};



