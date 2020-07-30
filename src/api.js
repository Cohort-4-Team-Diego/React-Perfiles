const BASE_URL = 'http://localhost:5000';
const PROFILES_PATH = '/profiles';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  profiles: {
    list() {
      return callApi(PROFILES_PATH);
    },
    create(profile) {
      return callApi(PROFILES_PATH, {
        method: 'POST',
        body: JSON.stringify(profile),
      });
    },
    read(profileId) {
      return callApi(`${PROFILES_PATH}/${profileId}`);
    },
    update(profileId, updates) {
      return callApi(`${PROFILES_PATH}/${profileId}`, {
        method: 'PATCH',
        body: JSON.stringify(updates),
      });
    },
    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    remove(profileId) {
      return callApi(`${PROFILES_PATH}/${profileId}`, {
        method: 'DELETE',
      });
    },
  },
};

export default api;
