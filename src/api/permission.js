import request from '@/utils/request'

export function getPermission(applicationId) {
  return request({
    url: '/vue-admin-template/permission',
    method: 'get',
    params: { applicationId }
  })
}

export function createPermission(data) {
  return request({
    url: '/vue-admin-template/permission',
    method: 'post',
    data
  })
}

export function updatePermission(data) {
  return request({
    url: '/vue-admin-template/permission',
    method: 'put',
    data
  })
}

export function deletePermission() {
  return request({
    url: '/vue-admin-template/permission',
    method: 'delete'
  })
}
