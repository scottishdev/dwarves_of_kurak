const baseURL = "http://localhost:8080/api";

class Request {
    
    get(url){
        return fetch(baseURL + url)
        .then(res => res.json())
    }

    show(url){
        return fetch(baseURL + url)
        .then(res =>res.json())
    }

    updateCharacter(id, payload){
        return fetch(baseURL + "/characters" + id,{
            method:'PUT',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
            })
            .then(res => res.json())
    }
    newCharacter(payload){
            return fetch(baseURL + "/characters",{
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
            })
            .then(res => res.json())
        }
    }


export default Request;
