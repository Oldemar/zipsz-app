import { observable, action, decorate } from 'mobx'


class UserStore {

    loggedIn = false;
    isDriverOff = true;
    role = 5;
    credentials = {
        username : '',
        password : ''
    };
    screens = ['','Owner','Admin', 'Manager', 'Vendor', 'Driver','','','','Guest'];
    currUser = {
        Personal: {
            id: 0,
            username: '',
            password: '',
            email: '',
            first_name: '',
            last_name: '',
            full_name: '',
            loginStatus: 0,

        },
    };

    isOnline = (userId) => {
        const random_boolean = Math.random() >= 0.5;
        return random_boolean;
    }

    changeLoginStatus = () => {
        this.loggedIn = !this.loggedIn;
    };

    changeDriverStatus = () => {
        this.isDriverOff = !this.isDriverOff;
    };

    resetCredentials = () => {
        this.credentials = {
            username : '',
            password : ''
        }
    }

    checkCredentials = () => {

        fetch('http://api.zonalivre.news/users/login', {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.credentials),
        })
            .then( res => res.json() )
            .then( (data) =>  {
                this._setCurrUser(data);
            });
    }

    _setCurrUser = data => {
        this.loggedIn = data.loginStatus ? 1 : 0 ;
        this.currUser.Personal = data.loginStatus ? { full_name: 'Oldie dad' } : data;
    }

}

decorate(UserStore, {
    loggedIn: observable,
    isDriverOff: observable,
    currUser: observable,
    role: observable,
    credentials: observable,
    changeLoginStatus: action,
    changeDriverStatus: action,
    checkCredentials: action,
    isOnline: action,

});

const userStore = new UserStore();

export default userStore;
