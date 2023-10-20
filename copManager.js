export async function getBambas(){
    const response = await fetch('NA_RLMbambas.json');
    const data = await response.json();
    return data.bambas;
}

/*export async function getBambasCarrito(){
    const response = await fetch('NA_RLMbambas.json');
    const data = await response.json();
    return data.bambas.countItems;
}*/