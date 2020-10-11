const getResources = async () => {
    const response = await fetch ('https://api.magicthegathering.io/v1/types');
    const results = await response.json();
    console.log(results)
    return results;
};

getResources();