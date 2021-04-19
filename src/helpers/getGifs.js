export const getGifs = async( category ) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=CIeFeWs8JPzvQ65XPYK7yr5Abs4rjzNG`;
    const resp = await fetch( url );
    
    const {data} = await resp.json();

    const getGifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_large.url
        }
    });

    return getGifs;
}