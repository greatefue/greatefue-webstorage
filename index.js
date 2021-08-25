"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SS_Get = exports.SS_Save = exports.SS_GetObject = exports.SS_SaveObject = exports.SS_GetArray = exports.SS_SaveArray = exports.LS_Get = exports.LS_Save = exports.LS_GetObject = exports.LS_SaveObject = exports.LS_GetArray = exports.LS_SaveArray = void 0;
// import { EncryptDecrypt } from "./encrypt";
const variables_1 = require("./variables");
const CryptoJS = require("crypto-js");
function LS_SaveArray(key, ArrayData) {
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
exports.LS_SaveArray = LS_SaveArray;
function LS_GetArray(key) {
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
exports.LS_GetArray = LS_GetArray;
function LS_SaveObject(key, ObjectData) {
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
exports.LS_SaveObject = LS_SaveObject;
function LS_GetObject(key) {
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
exports.LS_GetObject = LS_GetObject;
function LS_Save(key, Data) {
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
exports.LS_Save = LS_Save;
function LS_Get(key) {
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
exports.LS_Get = LS_Get;
function SS_SaveArray(key, ArrayData) {
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
exports.SS_SaveArray = SS_SaveArray;
function SS_GetArray(key) {
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
exports.SS_GetArray = SS_GetArray;
function SS_SaveObject(key, ObjectData) {
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
exports.SS_SaveObject = SS_SaveObject;
function SS_GetObject(key) {
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
exports.SS_GetObject = SS_GetObject;
function SS_Save(key, Data) {
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
exports.SS_Save = SS_Save;
function SS_Get(key) {
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
exports.SS_Get = SS_Get;
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
    static GreatEfueEncryptData(data) {
        const Pwd = this.GreatEfueEncPswd();
        let NewData = null;
        try {
            NewData = CryptoJS.AES.encrypt(data.trim(), Pwd.trim()).toString() + (variables_1.GreatEfuePreDefinedVariables.Seperator + Pwd);
            return NewData.toString();
        }
        catch (error) {
            console.table([{ "Log Type": "Error", "Log Reason": "Unable to secure data", "Stack Trace": error }]);
        }
    }
    static GreatEfueDecryptData(data) {
        let NewData = null;
        try {
            NewData = CryptoJS.AES.decrypt(data.split(variables_1.GreatEfuePreDefinedVariables.Seperator)[0].trim(), data.split(variables_1.GreatEfuePreDefinedVariables.Seperator)[1].trim()).toString(CryptoJS.enc.Utf8);
            return NewData.toString();
        }
        catch (error) {
            console.table([{ "Log Type": "Error", "Log Reason": "Unable to return actual data", "Stack Trace": error }]);
        }
    }
    static GreatEfueEncPswd() {
        let EncPswd = "";
        try {
            const PswdLen = 50;
            const Charset = variables_1.GreatEfuePreDefinedVariables.LowerCaseAlpha + variables_1.GreatEfuePreDefinedVariables.UpperCaseAlpha + variables_1.GreatEfuePreDefinedVariables.Symbol;
            for (let i = 0, n = Charset.length; i < PswdLen; ++i) {
                EncPswd += Charset.charAt(Math.floor(Math.random() * n));
            }
        }
        catch (error) {
            console.table([{ "Log Type": "Error", "Log Reason": "Unable to integrate secure data process", "Stack Trace": error }]);
        }
        return EncPswd;
    }
}
