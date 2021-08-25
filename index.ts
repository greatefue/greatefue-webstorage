// import { EncryptDecrypt } from "./encrypt";
import { GreatEfuePreDefinedVariables } from "./variables";
import * as CryptoJS from 'crypto-js';


export function LS_SaveArray(key: string, ArrayData: any[]): void {
    if (key && ArrayData) {

        const NewData = EncryptDecrypt.GreatEfueEncryptData(JSON.stringify(ArrayData));
        if (NewData) {
            localStorage.setItem(key, NewData);
            return;
        }
        console.table([{ "Log Type": "Info", "Log Reason": "Unable to save data" }]);
        return;
    }
    console.table([{ "Log Type": "Warn", "Log Reason": "Supplied Key or Data not found" }]);
    return;
}


export function LS_GetArray(key: string): unknown {
    if (key) {

        let NewData = localStorage.getItem(key);
        if (NewData) {
            NewData = JSON.parse(EncryptDecrypt.GreatEfueDecryptData(NewData));
            return NewData;
        }
        console.table([{ "Log Type": "Error", "Log Reason": "Data not found with supplied key", "Supplied Key": key }]);
        return;
    }
    console.table([{ "Log Type": "Error", "Log Reason": "Supplied Key not found" }]);
    return;
}
export function LS_SaveObject(key: string, ObjectData: unknown): void {
    if (key && ObjectData) {

        const NewData = EncryptDecrypt.GreatEfueEncryptData(JSON.stringify(ObjectData));
        if (NewData) {
            localStorage.setItem(key, NewData);
            return;
        }
        console.table([{ "Log Type": "Info", "Log Reason": "Unable to save data" }]);
        return;
    }
    console.table([{ "Log Type": "Warn", "Log Reason": "Supplied Key or Data not found" }]);
    return;
}

export function LS_GetObject(key: string): unknown {
    if (key) {

        let NewData = localStorage.getItem(key);
        if (NewData) {
            NewData = JSON.parse(EncryptDecrypt.GreatEfueDecryptData(NewData));
            return NewData;
        }
        console.table([{ "Log Type": "Error", "Log Reason": "Data not found with supplied key", "Supplied Key": key }]);
        return;
    }
    console.table([{ "Log Type": "Error", "Log Reason": "Supplied Key not found" }]);
    return;
}

export function LS_Save(key: string, Data: string): void {
    if (key && Data) {
        const NewData = EncryptDecrypt.GreatEfueEncryptData(Data);
        if (NewData) {
            localStorage.setItem(key, NewData);
            return;
        }
        console.table([{ "Log Type": "Info", "Log Reason": "Unable to save data" }]);
        return;
    }
    console.table([{ "Log Type": "Warn", "Log Reason": "Supplied Key or Data not found" }]);
    return;
}

export function LS_Get(key: string): string | unknown {
    if (key) {
        let NewData = localStorage.getItem(key);
        if (NewData) {
            NewData = EncryptDecrypt.GreatEfueDecryptData(NewData);
            return NewData;
        }
        console.table([{ "Log Type": "Warn", "Log Reason": "Data not found with supplied key", "Supplied Key": key }]);
        return;
    }
    console.table([{ "Log Type": "Warn", "Log Reason": "Supplied Key not found" }]);
    return;
}


export function SS_SaveArray(key: string, ArrayData: any[]): void {
    if (key && ArrayData) {

        const NewData = EncryptDecrypt.GreatEfueEncryptData(JSON.stringify(ArrayData));
        if (NewData) {
            sessionStorage.setItem(key, NewData);
            return;
        }
        console.table([{ "Log Type": "Info", "Log Reason": "Unable to save data" }]);
        return;
    }
    console.table([{ "Log Type": "Warn", "Log Reason": "Supplied Key or Data not found" }]);
    return;
}
export function SS_GetArray(key: string): unknown {
    if (key) {

        let NewData = sessionStorage.getItem(key);
        if (NewData) {
            NewData = JSON.parse(EncryptDecrypt.GreatEfueDecryptData(NewData));
            return NewData;
        }
        console.table([{ "Log Type": "Error", "Log Reason": "Data not found with supplied key", "Supplied Key": key }]);
        return;
    }
    console.table([{ "Log Type": "Error", "Log Reason": "Supplied Key not found" }]);
    return;
}
export function SS_SaveObject(key: string, ObjectData: unknown): void {
    if (key && ObjectData) {

        const NewData = EncryptDecrypt.GreatEfueEncryptData(JSON.stringify(ObjectData));
        if (NewData) {
            sessionStorage.setItem(key, NewData);
            return;
        }
        console.table([{ "Log Type": "Info", "Log Reason": "Unable to save data" }]);
        return;
    }
    console.table([{ "Log Type": "Warn", "Log Reason": "Supplied Key or Data not found" }]);
    return;
}

export function SS_GetObject(key: string): unknown {
    if (key) {

        let NewData = sessionStorage.getItem(key);
        if (NewData) {
            NewData = JSON.parse(EncryptDecrypt.GreatEfueDecryptData(NewData));
            return NewData;
        }
        console.table([{ "Log Type": "Error", "Log Reason": "Data not found with supplied key", "Supplied Key": key }]);
        return;
    }
    console.table([{ "Log Type": "Error", "Log Reason": "Supplied Key not found" }]);
    return;
}

export function SS_Save(key: string, Data: string): void {
    if (key && Data) {
        const NewData = EncryptDecrypt.GreatEfueEncryptData(Data);
        if (NewData) {
            sessionStorage.setItem(key, NewData);
            return;
        }
        console.table([{ "Log Type": "Info", "Log Reason": "Unable to save data" }]);
        return;
    }
    console.table([{ "Log Type": "Warn", "Log Reason": "Supplied Key or Data not found" }]);
    return;
}


export function SS_Get(key: string): string | unknown {
    if (key) {
        let NewData = sessionStorage.getItem(key);
        if (NewData) {
            NewData = EncryptDecrypt.GreatEfueDecryptData(NewData);
            return NewData;
        }
        console.table([{ "Log Type": "Warn", "Log Reason": "Data not found with supplied key", "Supplied Key": key }]);
        return;
    }
    console.table([{ "Log Type": "Warn", "Log Reason": "Supplied Key not found" }]);
    return;
}

// export class GreatEfueSQLDatabase {
//     constructor(private encryptDecrypt: EncryptDecrypt) { }
//     SaveArray(key: string, ArrayData: any[]): void {
//         if (key && ArrayData) {

//             const NewData = this.encryptDecrypt.GreatEfueEncryptData(JSON.stringify(ArrayData));
//             if (NewData) {
//                 sessionStorage.setItem(key, NewData);
//                 return;
//             }
//             console.table([{ "Log Type": "Info", "Log Reason": "Unable to save data" }]);
//             return;
//         }
//         console.table([{ "Log Type": "Warn", "Log Reason": "Supplied Key or Data not found" }]);
//         return;
//     }
//     GetArray(key: string): unknown {
//         if (key) {

//             let NewData = sessionStorage.getItem(key);
//             if (NewData) {
//                 NewData = JSON.parse(this.encryptDecrypt.GreatEfueDecryptData(NewData));
//                 return NewData;
//             }
//             console.table([{ "Log Type": "Error", "Log Reason": "Data not found with supplied key", "Supplied Key": key }]);
//             return;
//         }
//         console.table([{ "Log Type": "Error", "Log Reason": "Supplied Key not found" }]);
//         return;
//     }
//     SaveObject(key: string, ObjectData: unknown): void {
//         if (key && ObjectData) {

//             const NewData = this.encryptDecrypt.GreatEfueEncryptData(JSON.stringify(ObjectData));
//             if (NewData) {
//                 sessionStorage.setItem(key, NewData);
//                 return;
//             }
//             console.table([{ "Log Type": "Info", "Log Reason": "Unable to save data" }]);
//             return;
//         }
//         console.table([{ "Log Type": "Warn", "Log Reason": "Supplied Key or Data not found" }]);
//         return;
//     }

//     GetObject(key: string): unknown {
//         if (key) {

//             let NewData = sessionStorage.getItem(key);
//             if (NewData) {
//                 NewData = JSON.parse(this.encryptDecrypt.GreatEfueDecryptData(NewData));
//                 return NewData;
//             }
//             console.table([{ "Log Type": "Error", "Log Reason": "Data not found with supplied key", "Supplied Key": key }]);
//             return;
//         }
//         console.table([{ "Log Type": "Error", "Log Reason": "Supplied Key not found" }]);
//         return;
//     }

//     Save(key: string, Data: string): void {
//         if (key && Data) {
//             const NewData = this.encryptDecrypt.GreatEfueEncryptData(Data);
//             if (NewData) {
//                 sessionStorage.setItem(key, NewData);
//                 return;
//             }
//             console.table([{ "Log Type": "Info", "Log Reason": "Unable to save data" }]);
//             return;
//         }
//         console.table([{ "Log Type": "Warn", "Log Reason": "Supplied Key or Data not found" }]);
//         return;
//     }


//     Get(key: string): string | unknown {
//         if (key) {
//             let NewData = sessionStorage.getItem(key);
//             if (NewData) {
//                 NewData = this.encryptDecrypt.GreatEfueDecryptData(NewData);
//                 return NewData;
//             }
//             console.table([{ "Log Type": "Warn", "Log Reason": "Data not found with supplied key", "Supplied Key": key }]);
//             return;
//         }
//         console.table([{ "Log Type": "Warn", "Log Reason": "Supplied Key not found" }]);
//         return;
//     }
// }

class EncryptDecrypt {

    static GreatEfueEncryptData(data: string) {
        const Pwd = this.GreatEfueEncPswd();
        let NewData = null;
        try {
            NewData = CryptoJS.AES.encrypt(data.trim(), Pwd.trim()).toString() + (GreatEfuePreDefinedVariables.Seperator + Pwd);
            return NewData.toString();
        } catch (error) {
            console.table([{ "Log Type": "Error", "Log Reason": "Unable to secure data", "Stack Trace": error }]);
        }
    }

    static GreatEfueDecryptData(data: string): string | any {
        let NewData = null;
        try {
            NewData = CryptoJS.AES.decrypt(data.split(GreatEfuePreDefinedVariables.Seperator)[0].trim(), data.split(GreatEfuePreDefinedVariables.Seperator)[1].trim()).toString(CryptoJS.enc.Utf8);
            return NewData.toString();
        } catch (error) {
            console.table([{ "Log Type": "Error", "Log Reason": "Unable to return actual data", "Stack Trace": error }]);
        }
    }

    static GreatEfueEncPswd(): string {
        let EncPswd = "";
        try {
            const PswdLen = 50;
            const Charset = GreatEfuePreDefinedVariables.LowerCaseAlpha + GreatEfuePreDefinedVariables.UpperCaseAlpha + GreatEfuePreDefinedVariables.Symbol;

            for (let i = 0, n = Charset.length; i < PswdLen; ++i) {
                EncPswd += Charset.charAt(Math.floor(Math.random() * n));
            }
        } catch (error) {
            console.table([{ "Log Type": "Error", "Log Reason": "Unable to integrate secure data process", "Stack Trace": error }]);
        }
        return EncPswd;
    }
}