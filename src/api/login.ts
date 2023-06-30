import request from '@/utils/request'
import { AxiosRes, LoginData, LoginResult } from '@/types/data'

export const login = (data: LoginData) => {
  console.log('data', data)
  return request.post<AxiosRes<LoginResult>>(
    `auth/login`,
    {},
    {
      params: {
        ...data,
      },
    }
  )
}
