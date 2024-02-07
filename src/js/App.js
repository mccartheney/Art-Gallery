const getData = async () => {
    const response = await fetch ("./../../data.json")
    const data = await response.json()
    return data;
};

window.onload = () => {
    getData().then (arts => {
        for (const art of arts) {
            console.log(i);
        }
    })
};