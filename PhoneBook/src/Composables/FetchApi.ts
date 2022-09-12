
export interface UserDetail {
    id?: number;
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
}

export const  createUserContact = async (url: string, contact: UserDetail) => {
    let saved_contact: UserDetail = {
        firstName: null, lastName: null, phone: null
    };
    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    })
    .then((response) => {
        if(response.status === 200) {
            return response.json();
        } else {
            throw Error(response.statusText);
        }
    })
    .then((json) => {
        
        saved_contact = json;
        console.log('Response', saved_contact);
        return json;
    })
    .catch(error => {
        throw Error(error);
    })
    
    return saved_contact;
}