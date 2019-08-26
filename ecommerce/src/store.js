import createStore from "unistore";

export const store = createStore({
    is_login: false,
    username: "",
    alamat: "",
    status: "",
    nomorhp: "",
    token: "",
    user_id: "",
    baseUrl: "http://0.0.0.0:5000"
});

export const actions = store => ({
    login(state) {
        return { is_login: true };
    },

    logout(state) {
        return { is_login: false };
    },

    downToken(state) {
        return { token: "" };
    },

    setToken(state, token) {
        return { token: token };
    },

    setName(state, name) {
        return { username: name };
    },

    setAlamat(state, alamat) {
        return { alamat: alamat };
    },

    setStatus(state, status) {
        return { status: status };
    },

    setNomorhp(state, nomorhp) {
        return { nomorhp: nomorhp };
    },
    setUserid(state, id) {
        return { user_id: id };
    }
});
