export default function validateInfo (values){
    let errors = {}

    if(!values.firstname.trim()) {
        errors.firstname = "First Name Required"
    }
    if(!values.lastname.trim()) {
        errors.lastname = "Last Name Required"
    }
    if(!values.email) {
        errors.email = "Email Required"
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "Email address is invalid"
    }
    if(!values.country.trim()) {
        errors.country = "Country Required"
    }
    if(!values.phonenumber) {
        errors.phonenumber = "Phone Number Required"
    }
return errors;

}