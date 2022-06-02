const BASE_URL = "http://localhost:3000";
const REST_API_KEY = "보안이슈로 discord에 공유한 걸로 사용하세요";
const REDIRECT_URI = "http://localhost:3000/oauth/callback/kakao";

export const API = {
  MAIN: `${BASE_URL}/main`, // 예시
  KAKAO_AUTH_URL: `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
};