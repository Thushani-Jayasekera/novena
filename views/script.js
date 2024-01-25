import {signIn} from './util.js';

document.addEventListener('DOMContentLoaded', function() {
    let client_id="978225651454-3rp3tki3fef9rpd2ccocnt1fep7881m6.apps.googleusercontent.com";
    let redirect_uri = "http://127.0.0.1:5500/connect";
    let scopes = "https://www.googleapis.com/auth/drive"
    
    let button = document.getElementById('signin-button')
    
    button.onclick = function() {
        console.log('clicked');
        signIn(client_id, redirect_uri, scopes);
      };
  });

