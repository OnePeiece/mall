import http from '../utils/request'

export const getLunBo = () => {
  return http({
    method: 'get',
    url: '/api/getlunbo'
  })
}

export const getGrids = () => {
  return http({
    method: 'get',
    url: '/api/grids'
  })
}