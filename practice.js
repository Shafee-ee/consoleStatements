

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => { resolve("done") }, 2000)
    })
}

async function asyncCall() {
    console.log("Calling");
    const result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();