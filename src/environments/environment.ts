// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

//url del api en desarrollo
//export const API_URL = 'https://dataengine.wif-id.co/api'
//export const API_URL = 'http://localhost:3000/api'
export const API_URL = 'https://apiblockid.pulsatrix.co/api'
export const SOCKET_URL = 'https://.wif-id.co'
export const tokenName = 'vote-token'

export const AUTH = {
  token: 'auth_token',
  tipo: 'tipo_usuario'
}