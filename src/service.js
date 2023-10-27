const queryStrings = {
    app_id: "4208ad34",
    app_key:"b7d2e8e9d2644f4bcbf4e6e646b9ab7a"
    
}

// https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=4208ad34&app_key=b7d2e8e9d2644f4bcbf4e6e646b9ab7a


export const fetchData = async (defaultQuery) => {
    const {app_id,app_key} = queryStrings;
    try {
        const data = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`);
        const response = await data.json();
        return response;
    }
    catch(e) {
        console.log(e,'something went wrong')
        return e
    }
}

export const fetchTabData = async (defaultQuery) => {
    const {app_id,app_key} = queryStrings;
    try {
        const data = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`);
        const response = await data.json();
        return response;
    }
    catch(e) {
        console.log(e,'something went wrong')
        return e
    }
}