import { observable, action, decorate } from 'mobx'

class UserStore {

    loggedIn = false;
    isDriverOff = true;
    role = 1;
    credentials = {
        username : '',
        password : ''
    };
    screens = [
        {
            roles:[1,2,3,4,5,6,7,8,9],
            navRoute: 'Overview',
            navName: 'Overview',
            navIcon: 'md-business'
        },
        {
            roles:[1,2,3,4,5],
            navRoute: 'Deliver',
            navName: 'Deliver',
            navIcon: 'md-basket'
        },
        {
            roles:[1,2,3,4],
            navRoute: 'Driver',
            navName: 'Driver',
            navIcon: 'md-car'
        },
        {
            roles:[1,2,4],
            navRoute: 'Order',
            navName: 'Order',
            navIcon: 'md-restaurant'
        },
        {
            roles:[1,2,3,4,5,6,7,8,9],
            navRoute: 'Profile',
            navName: 'Profile',
            navIcon: 'md-today'
        },
        {
            roles:[1,2,3,4,5],
            navRoute: 'Settings',
            navName: 'Settings',
            navIcon: 'md-settings'
        },
        {
            roles:[1,2,3],
            navRoute: 'User',
            navName: 'User',
            navIcon: 'md-people'
        },
        {
            roles:[1,2,3,4,5,6,7,8,9],
            navRoute: 'Logoff',
            navName: 'Logoff',
            navIcon: 'md-log-out'
        },
    ];
    currUser = {
        Personal: {},
    };

    isOnline = (userId) => {
        const random_boolean = Math.random() >= 0.5;
        return random_boolean;
    };

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
    };

    checkCredentials = async () => {
        const post = {
            function: 'login',
            username: this.credentials.username,
            password: this.credentials.password,
        };
        const url = 'http://api.zipsz.com';
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(post),
        };
        try {
            await fetch( url, options )
                .then( res => {
                    return res.json()
                })
                .then( ( data ) => {
                    if (data && data.length) {
                        this.loggedIn = true;
                        this.currUser.Personal = data;
                    }
                });
        } catch (error) {
            alert(error);
        }
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
