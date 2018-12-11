export const handleStatus = res => 
    res.ok ? res.json() : Promise.reject(res.statusText);

    //Se o status de response for OK, retorna o response parseado para json. Senão, retorna o reject da Promise, com o statusText da response.