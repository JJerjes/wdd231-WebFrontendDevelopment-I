const myPromise = new Promise( (resolve, reject) => {
    const success = true;
    if (success) {
        resolve('Operacion was successfull.');
    } else {
        reject('Operation failed.');
    }
}); 


const myAsyncFunction = async () => {
    try {
        const result = await myPromise;
        console.log(result);;
    } catch (error) {
        console.log(error);
    }
}

async function getDate () {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const data = await response.json();
    console.log(data);
}