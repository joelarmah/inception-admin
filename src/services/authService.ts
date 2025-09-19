import { apiClient } from "@lib/apiClient"


  export interface SignInResponse {
    token: string;
    user: { id: string; name: string; email: string };
  }
  
  export async function signIn(email: string, password: string) {
    return apiClient<SignInResponse>("auth/signin", {
      method: "POST",
      body: { email, password },
    });
  }

  // export async function getProfile(token: string) {
  //   return apiClient<{ id: string; name: string; email: string }>("users/me", {
  //     method: "GET",
  //     authToken: token,
  //   });
  // }
  