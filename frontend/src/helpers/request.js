const baseURL = 'http://localhost:8080/api/'

class Request {

    get(url){
        console.log("fetching " + url);
        
        return fetch(baseURL + url)
        .then(res => res.json())
    }

      updateCharacter(id, payload)
     {
         console.log("updating Character " + id + "with paylod: " + payload)
       return fetch(baseURL + id,
                   {method:'PUT',
                    body: JSON.stringify(payload),
                    headers: { 'Content-Type': 'application/json' }
                   })
                   .then(res => res.json())
    }

    newCharacter(payload)
     {
         console.log("creating new character with the following payload: " + payload)
        return fetch(baseURL,
           {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: { 'Content-Type': 'application/json' }
           })
           .then(res => res.json())
      }

}


export default Request;
