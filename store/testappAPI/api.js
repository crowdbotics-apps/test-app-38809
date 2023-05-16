import axios from "axios"
const testappAPI = axios.create({
  baseURL: "https://test-app-38809-prod.herokuapp.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_login_create(payload) {
  return testappAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return testappAPI.post(`/api/v1/signup/`, payload.data)
}
function api_v1_article_list(payload) {
  return testappAPI.get(`/api/v1/article/`)
}
function api_v1_article_create(payload) {
  return testappAPI.post(`/api/v1/article/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return testappAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return testappAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return testappAPI.patch(`/rest-auth/user/`, payload.data)
}
function api_docs_schema_retrieve(payload) {
  return testappAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function rest_auth_login_create(payload) {
  return testappAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return testappAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return testappAPI.post(`/rest-auth/logout/`)
}
function api_v1_article_retrieve(payload) {
  return testappAPI.get(`/api/v1/article/${payload.id}/`)
}
function api_v1_article_update(payload) {
  return testappAPI.put(`/api/v1/article/${payload.id}/`, payload.data)
}
function api_v1_article_partial_update(payload) {
  return testappAPI.patch(`/api/v1/article/${payload.id}/`, payload.data)
}
function api_v1_article_destroy(payload) {
  return testappAPI.delete(`/api/v1/article/${payload.id}/`)
}
function rest_auth_registration_create(payload) {
  return testappAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return testappAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return testappAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return testappAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return testappAPI.post(`/rest-auth/registration/verify-email/`, payload.data)
}
export const apiService = {
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_article_list,
  api_v1_article_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  api_v1_article_retrieve,
  api_v1_article_update,
  api_v1_article_partial_update,
  api_v1_article_destroy,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_verify_email_create
}
