import countries from '../api/country'
import {setCountries} from "../redux/actions"

export const getCountries = async ():Promise<void>=>{
    countries().then((allCountries)=>{
        setCountries(allCountries)
    }).catch(e=>{
        console.log(e)
        alert("Something went Wrong (rejected Promise) - Please click Ok to Refresh")
        window.location.reload();
    })
}
