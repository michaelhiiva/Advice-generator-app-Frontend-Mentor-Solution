class AdviceClient {
    constructor (
        request_url,
    ) {
        this.request_url = request_url;
        this.response = "";
        this.qoute = "";
        this.qouteId = "";
    }

    sendRequest() {
        fetch(this.request_url)
        .then((response) => response.json())
        .then((data) => data.slip)
        .then((data) => {
            this.qouteId = data.id;
            this.qoute = data.advice;
        })
        .catch((error) => {
            console.log(`${error}`)
        });
    }

    getQouteId() {
        return this.qouteId;
    }

    getQoute() {
        return this.qoute;
    }
}

export default AdviceClient;