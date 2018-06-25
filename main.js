#!/usr/bin/env node

const cacache = require('cacache/en')
const path = require('path')
const semver = require('semver')

const cachePath = path.join(require('os').homedir(), '/.npm/_cacache')

const filter = process.argv.length > 2 ? process.argv.pop() : null

cacache.ls(cachePath)
  .then((packages) => {
    let _cache = []
    for (const i in packages) {
      const _ext = path.extname(packages[i].key)
      if (_ext !== '.tgz') {
        continue
      }
      let _name = path.basename(packages[i].key)
        .replace(_ext, '')
      const _version = _name
        .substr(_name.lastIndexOf('-'))
        .replace('-', '')
      _name = _name.replace(_version, '')
      _name = _name.substr(0, _name.length - 1)
      _cache.push({name: _name, version: _version})
    }
    _cache = _cache.sort((a, b) => {
      if (a.name === b.name) {
        return semver.gt(semver.coerce(a.version), semver.coerce(b.version)) ? 1 : -1
      }
      return a.name > b.name ? 1 : -1
    })
    _cache.forEach((a) => {
      if (!filter || (filter && a.name.indexOf(filter) !== -1)) {
        console.log(a.name, a.version)
      }
    })
  })
