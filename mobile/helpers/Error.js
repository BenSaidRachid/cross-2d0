export default class Error {
    constructor() {
        this.messageError = {};
    }

    getMessage() {
        return this.messageError;
    }

    checkField(field = "", name = "") {
        const fieldEmpty = `${name} vide, veuillez remplir ce champ`;

        if (!this.messageError.hasOwnProperty(name)) this.messageError[name] = [];

        if (this.__isNotEmpty(field, name, fieldEmpty)) {
            const index = this.messageError[name].indexOf(fieldEmpty);
            if (index >= 0) this.messageError[name].splice(index, 1);
        }
        return this.messageError[name].length === 0;
    }

    checkPassword(passwords = {}, names = {}) {
        const { password, confirmPassword } = passwords;
        const { namePassword, nameConfirmPassword } = names;
        const passwordEmpty = `${namePassword} vide, veuillez remplir ce champ`;
        const confirmPasswordEmpty = `${nameConfirmPassword} vide, veuillez remplir ce champ`;
        // const passwordLength = `${namePassword} trop court, il doit être de 8 caractères minimums`;
        const confirmation = `${namePassword} et ${nameConfirmPassword} ne correspondent pas`;

        if (
            !this.messageError.hasOwnProperty(namePassword) ||
            !this.messageError.hasOwnProperty(nameConfirmPassword)
        ) {
            this.messageError[namePassword] = [];
            this.messageError[nameConfirmPassword] = [];
        }
        if (this.__isNotEmpty(password, namePassword, passwordEmpty)) {
            const index = this.messageError[namePassword].indexOf(passwordEmpty);
            if (index >= 0) this.messageError[namePassword].splice(index, 1);
        }

        if (typeof confirmPassword !== "undefined") {
            if (this.__isNotEmpty(confirmPassword, nameConfirmPassword, confirmPasswordEmpty)) {
                const index = this.messageError[nameConfirmPassword].indexOf(confirmPasswordEmpty);
                if (index >= 0) this.messageError[nameConfirmPassword].splice(index, 1);
            }
            if (
                this.__checkPasswordConfirmation(
                    password,
                    confirmPassword,
                    namePassword,
                    confirmation,
                )
            ) {
                const index = this.messageError[namePassword].indexOf(confirmation);
                if (index >= 0) this.messageError[namePassword].splice(index, 1);
            }
        }

        return (
            this.messageError[namePassword].length === 0 &&
            this.messageError[nameConfirmPassword].length === 0
        );
    }

    checkEmail(email = "", name = "") {
        const emailEmpty = `${name} vide, veuillez remplir ce champ`;
        const emailInvalid = `${name} invalide`;

        if (!this.messageError.hasOwnProperty(name)) this.messageError[name] = [];

        if (this.__isNotEmpty(email, name, emailEmpty)) {
            const index = this.messageError[name].indexOf(emailEmpty);
            if (index >= 0) this.messageError[name].splice(index, 1);
        }
        if (this.__isEmailValid(email, name, emailInvalid)) {
            const index = this.messageError[name].indexOf(emailInvalid);
            if (index >= 0) this.messageError[name].splice(index, 1);
        }
        return this.messageError[name].length === 0;
    }

    __isNotEmpty(field, key, message) {
        if (!(field && field.length > 0)) {
            this.messageError[key].push(message);
            return false;
        }
        return true;
    }

    __isEmailValid(email, key, message) {
        if (!(email && email.match(/^\S+@\S+\.\S+$/))) {
            this.messageError[key].push(message);
            return false;
        }
        return true;
    }

    __checkPasswordLength(password, key, message) {
        if (!(password && password.length >= 8)) {
            this.messageError[key].push(message);
            return false;
        }
        return true;
    }

    __checkPasswordConfirmation(password, confirmPassword, key, message) {
        if (!(password && confirmPassword && password === confirmPassword)) {
            this.messageError[key].push(message);
            return false;
        }
        return true;
    }
}
