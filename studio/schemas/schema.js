// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import localeString from './objects/localeString'

// document schemas
import navMenu from './documents/navMenu'
import author from './documents/author'
import category from './documents/category'
import post from './documents/post'
import page from './documents/page'
import testSanityType from './documents/testSanityType'
import array1 from './documents/array1'
import booleanFun from './documents/booleanFun'
import dateFun from './documents/dateFun'
import dateTime from './documents/dateTime'
import documents from './documents/documents'
import fileType from './documents/fileType'
import geoPointType from './documents/geoPointType'
import images from './documents/images'
import numberFun from './documents/numberFun'
import objDef from './documents/objDef'

import siteSettings from './documents/siteSettings'
import route from './documents/route'

import experiment from './objects/experiment'
import simpleBlockContent from './objects/simpleBlockContent'

import * as plugs from './plugs'
import plugDefaultFields from './plugs/_plugDefaultFields'

// Object types
import { instagram, videoEmbed } from './objects/embeds'
import cta from './objects/cta'
import bodyPortableText from './objects/bodyPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import authorReference from './objects/authorReference'
import link from './objects/link'
import variation from './objects/variation'
import openGraph from './objects/openGraph'
import latex from './latex'
import objectDef from './documents/objDef'
import refType from './documents/refType'

const allPlugs = Object.values(plugs).map((plug) => {
  return { ...plug, fields: plugDefaultFields.concat(plug.fields) }
})

export default createSchema({
  name: 'blog',
  types: schemaTypes // Built-in types
    // Our custom types
    .concat([
      latex,
      localeString,
      variation,
      openGraph,
      experiment,
      route,
      link,
      simpleBlockContent,
      cta,
      siteSettings,
      post,
      navMenu,
      page,
      testSanityType,
      array1,
      booleanFun,
      dateFun,
      dateTime,
      documents,
      fileType,
      geoPointType,
      images,
      numberFun,
      objDef,
      refType,
      category,
      author,
      mainImage,
      authorReference,
      instagram,
      videoEmbed,
      bodyPortableText,
      excerptPortableText,
    ])
    .concat(allPlugs),
})
