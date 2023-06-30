export interface LoginData {
  username: string
  password: string
}

export interface AxiosRes<T> {
  code: string
  data: T
  msg: string
}

/**
 * LoginResult，登录响应对象
 */
export interface LoginResult {
  /**
   * 访问token
   */
  accessToken?: string
  /**
   * 过期时间(单位：毫秒)
   */
  expires?: number | null
  /**
   * 刷新token
   */
  refreshToken?: null | string
  /**
   * token 类型
   */
  tokenType?: string
}
