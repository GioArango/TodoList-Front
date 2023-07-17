export const saveDataInSessionStorage = (key: string, data: any) => {

    const existData = JSON.parse(sessionStorage.getItem(key) as string)

    if (!existData) {
        console.log('NO TENGO DATA');
        sessionStorage.setItem(key, JSON.stringify(data));
    } else {
        console.log('TENGO DATA', existData);
        return existData;
    }
}

export const getDataSessionStorage = (key: string) => {
    if ( key ) {
        return JSON.parse(sessionStorage.getItem(key) as string);
    }
}

export const deletaDataSessionStorage = (key: string) => {
    if( key ) {
        sessionStorage.removeItem(key)
    }
}