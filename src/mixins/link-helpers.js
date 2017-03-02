var extractDomain = function (link) {
  var domain
  if (link.indexOf('://') >= 0) {
    domain = link.split('/')[2]
  } else {
    domain = link.split('/')[0]
  }

  return domain.split('/')[0]
}

export default {
  methods: {
    extractDomain: extractDomain
  },
  filters: {
    domain: extractDomain
  }
}
