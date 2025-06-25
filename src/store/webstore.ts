import { configure, makeAutoObservable, runInAction } from "mobx"
import { axiosInstance } from "../config/AxiosInstance";
import { toast } from "react-toastify";
import secureLocalStorage from "react-secure-storage";
import Swal from "sweetalert2";

interface UserData {
    news: any[];
    users: any[];
    exchangeData: any;
    trade_history: any[];
    api_key: any[];
    trade_news: any[];
    admintoken: string | null;
    email: string;
    id: number | null;
    name: string | null;
    contact: string | null;
    role: string | null;
}

class WebsiteStore {
    loading = false;
    loadingApply = false;
    data: UserData = {
        news: [],
        users: [],
        exchangeData: null,
        trade_history: [],
        api_key: [],
        trade_news: [],
        admintoken: null,
        email: "",
        id: null,
        name: null,
        contact: null,
        role: null,
    }
    errors = {}
    constructor() {
        makeAutoObservable(this);
        configure({
            useProxies: "never"
        })
    }
    toggleLoading = (toggle: boolean) => {
        this.loading = toggle
    }
    toggleLoadingApply = (toggle: boolean) => {
        this.loadingApply = toggle
    }

    // registerUser(userData) {
    //   this.data.users.push(userData);
    //   console.log('User registered:', userData);
    // }

    async updateAsyncStore(data: { token: string; role: string; }) {
        secureLocalStorage.removeItem("userData");
        secureLocalStorage.removeItem("token");
        secureLocalStorage.setItem("admin-token", data.token);
        secureLocalStorage.setItem("type", data.role);
        secureLocalStorage.setItem("adminData", JSON.stringify(data));
    }

    updateTokenFromStorage(data: { name: string; email: string; contact: string; id: number; role: string; }, token: string) {
        this.data.admintoken = token;
        this.data.name = data.name;
        this.data.email = data.email;
        this.data.contact = data.contact;
        this.data.id = data.id;
        this.data.role = data.role;
    }
    // ----------------------------------------------------------------------------------------------------------------------
    async signin({ email, password }: Record<string, string>, rememberMe = false) {
        this.toggleLoading(true);
        try {
            const response = await axiosInstance.post("/login", { email, password });

            const { token, id, email: userEmail, name, contact, role } = response.data;

            secureLocalStorage.setItem("authToken", token);

            if (rememberMe) {
                secureLocalStorage.setItem("userEmail", userEmail);
            } else {
                secureLocalStorage.removeItem("userEmail");
            }
            runInAction(() => {
                this.data.admintoken = token;
                this.data.email = userEmail;
                this.data.id = id;
                this.data.name = name;
                this.data.contact = contact;
                this.data.role = role;
            });

            return token;
        } catch (err) {
            // Optional: log error or toast here
            throw err;
        } finally {
            this.toggleLoading(false);
        }
    }

    async register(payload: Record<string, any>) {
        this.toggleLoading(true);
        console.log("Register payload:", payload);
        try {
            const res = await axiosInstance.post("/register", payload);
            runInAction(() => {
                // if your API returns a token on register
                this.data.email = res.data.email;
                this.data.id = res.data.id;
            });
            return res.data;
        } catch (err) {
            // re-throw for caller to handle
            throw err;
        } finally {
            this.toggleLoading(false);
        }
    }

    async verifyOtp(payload: Record<string, any>) {
        this.toggleLoading(true);
        try {
            const res = await axiosInstance.post("/verify-otp", {
                ...payload,
                context: payload.context || "forgot-password", // dynamic fallback
            });
            return res.data;
        } catch (err) {
            throw err;
        } finally {
            this.toggleLoading(false);
        }
    }
}
const webStore = new WebsiteStore();
export default webStore;