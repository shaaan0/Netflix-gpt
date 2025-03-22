export const checkValidData = (email, password, name="") => {

    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,20}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(name !== "none"){
        const isNameValid = /^[A-Za-z\s]{1,20}$/.test(name)
        if(!isNameValid){
            return "Name should be less than or equal to 20 characters";
        }
    }
    if (!isEmailValid) {
        return "Email Id is not valid";
    }
    if (!isPasswordValid) {
        return "Password is not valid";
    }
    
    return null;
}