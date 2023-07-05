import { SUBMIT_FORM } from "./FormTypes"

export const submit=({name})=>{
    return {
        type:SUBMIT_FORM
        ,payload:{name}
    }
}