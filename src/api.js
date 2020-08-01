const BASE_URL = "https://perfiles.infomega.biz";
const PROFILES_PATH = "/profiles";

async function callApi(endpoint, options = {}) {
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
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
        method: "POST",
        body: JSON.stringify(profile),
      });
    },
    read(profileId) {
      return callApi(`${PROFILES_PATH}/${profileId}`);
    },
    update(profileId, updates) {
      return callApi(`${PROFILES_PATH}/${profileId}`, {
        method: "PATCH",
        body: JSON.stringify(updates),
      });
    },
    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    remove(profileId) {
      return callApi(`${PROFILES_PATH}/${profileId}`, {
        method: "DELETE",
      });
    },
  },
};

export default api;
