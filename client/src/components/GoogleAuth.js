import React from 'react';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '664535234526-6fd1t1qtd81tkjts72d6c163t4bhu3bf.apps.googleusercontent.com',
                scope: 'email'
            })
        });
    }

    render() {
        return <div>Google Auth</div>
    };
};

export default GoogleAuth;