import http from "./httpService";

export function getOtp(data) {
  //data => {phone number  :0912 ... ....}
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
}

export function checkOtp(data) {
  //data => {phone number  :0912 ... ....}
  return http.post("/user/check-otp", data).then(({ data }) => data.data);
}

export function completeProfile(data) {
  //data => {phone number  :0912 ... ....}
  return http
    .post("/user/complete-profile", data)
    .then(({ data }) => data.data);
}

export function getUser(data) {
  //data => {phone number  :0912 ... ....}
  return http.get("/user/profile").then(({ data }) => data.data);
}
