//your JS code here. If required.

const getRandomDelay = (min, max) => Math.random() * (max - min) + min;

const createPromise = id => new Promise(resolve => {
    const delay = getRandomDelay(1, 3) * 1000;
    setTimeout(() => resolve({ id, time: delay / 1000 }), delay);
});

const promises = [1, 2, 3].map(createPromise);

Promise.all(promises)
    .then(results => {
        const total = results.reduce((acc, cur) => acc + cur.time, 0);
        document.getElementById("output").innerHTML = results.map(({id, time}) => `<tr><td>Promise ${id}</td><td>${time.toFixed(3)}</td></tr>`).join('') + `<tr><td>Total</td><td>${total.toFixed(3)}</td></tr>`;
    })
    .catch(error => console.error("Error:", error));

