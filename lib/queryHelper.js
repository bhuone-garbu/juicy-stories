// DISCLAIMER: There is probably a library for this
// but I wanted to do this myself to learn the low level stuff mongoose query
class QueryHelper {

  // This is to help build string param query into an object that mongoose understands
  // we want to create an object from
  // '?number=123,456
  // ==> { {number : {$in :[123, 456]} }
  //
  static buildParamQuery(param) {

    if (param && Object.keys(param).length === 0) return {}

    const mongoQuery = {}
    for (const key in param) {
      let value = param[key]
      if (key !== 'find') {
        if (value.includes(',')) {
          value = { $in: value.split(',') } // this is main reason for building this helper class
        } 
        mongoQuery[key] = value
      }

      if (key === 'find') {
        mongoQuery['$text'] = { $search: param['find'] }
      }
    }
    return mongoQuery
  }

}

module.exports = QueryHelper