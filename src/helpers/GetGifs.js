

export const getGifs = async(category, inputNumber) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=${inputNumber}&api_key=OiBz6i28YtfxlHNtblsbLvbP7B29Sxty`;

    const resp = await fetch( url );

    const {data} = await resp.json();

    

    const gifs = data.map( img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    
    return gifs;
    
    
}