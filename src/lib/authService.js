import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";

export const loginWithPhone = async (phone) => {
  const response = await axios.post(`${API_URL}/login/phone`, { phone });
  return response.data;
};

export const registerUser = async ({ fullName, phone }) => {
  const response = await axios.post(`${API_URL}/sign/up`, { fullName, phone });
  return response.data;
};

export const verifyOTP = async (otp) => {
  const phone = localStorage.getItem("phone");
  const entranceType = localStorage.getItem("entranceType");
  const response = await axios.post(`${API_URL}/verify/OTP`, {
    entranceType,
    phone,
    otp,
  });
  return response.data;
};

export const resendOTP = async () => {
  const phone = localStorage.getItem("phone");
  const entranceType = localStorage.getItem("entranceType");
  const response = await axios.post(`${API_URL}/resend/OTP`, {
    entranceType,
    phone,
  });
  return response.data;
};
