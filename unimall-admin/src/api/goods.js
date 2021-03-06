import request from '@/utils/request'
import Qs from 'qs'

export function spuTree() {
  return request({
    method: 'get',
    params: {
      _gp: 'admin.goods',
      _mt: 'getSpuBigTree'
    }
  })
}

export function listGoods(query) {
  return request({
    method: 'get',
    params: {
      _gp: 'admin.goods',
      _mt: 'list',
      ...query
    }
  })
}

export function editGoods(data) {
  return request({
    method: 'post',
    data: Qs.stringify({
      _gp: 'admin.goods',
      _mt: 'edit',
      spuDTO: JSON.stringify(data)
    })
  })
}

export function deleteGoods(id) {
  return request({
    method: 'post',
    params: {
      _gp: 'admin.goods',
      _mt: 'delete',
      spuId: id
    }
  })
}

export function createGoods(data) {
  return request({
    method: 'post',
    data: Qs.stringify({
      _gp: 'admin.goods',
      _mt: 'create',
      spuDTO: JSON.stringify(data)
    })
  })
}

export function detailGoods(id) {
  return request({
    method: 'get',
    params: {
      _gp: 'admin.goods',
      _mt: 'detail',
      spuId: id
    }
  })
}

export function listCatAndBrand() {
  return request({
    method: 'get',
    params: {
      _gp: 'goods',
      _mt: 'categories'
    }
  })
}
