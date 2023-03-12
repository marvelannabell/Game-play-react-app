const baseUrl = 'http://localhost:3030';


export const getAll = async () => {
    const responce = await fetch(`${baseUrl}/data/games`);
    const result = await responce.json();
    // console.log(result);

    return result;
}