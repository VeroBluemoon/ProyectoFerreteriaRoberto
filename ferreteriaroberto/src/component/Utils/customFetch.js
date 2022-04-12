let isOK = true;


const customFetch = (time, task) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(isOK) {
            resolve(task);
        } else {
            reject('Error');
        }
    }, time)})};

export default customFetch;