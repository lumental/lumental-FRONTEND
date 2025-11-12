import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000", // 백엔드분들이 준 서버 주소로 바꾸기
  //withCredentials: true,            
});

export default api;