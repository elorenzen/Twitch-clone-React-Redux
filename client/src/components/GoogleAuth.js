import React from 'react';

const client_id = process.env.CLIENT_ID;

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: client_id,
                scopes: 'email'
            })
        });
    }

    render() {
        return <div>Google Auth</div>
    };
};

export default GoogleAuth;