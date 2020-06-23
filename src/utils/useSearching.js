import { useState, useEffect } from "react"
import { chainFrom } from "transducist"
import { author as authorSymbol, tag as tagSymbol } from "./symbols"

export function useSearching(collection) {
  const [filteredCollection, setFilteredCollection] = useState()
  const [searchingPhrase, setSearchingPhrase] = useState("")
  const [preparedSearchingPhrase, setPreparedSearchingPhrase] = useState("")
  const [author, setAuthor] = useState("")
  const [tags, setTags] = useState([])

  useEffect(() => {
    const computedAuthor = getAuthor(searchingPhrase)
    const computedTags = getTags(searchingPhrase)
    const preparedPhrase = getPreparedPhrase(searchingPhrase, computedAuthor)

    setAuthor(computedAuthor)
    setTags(computedTags)
    setPreparedSearchingPhrase(preparedPhrase)
  }, [searchingPhrase])

  useEffect(() => {
    const filtered = getFilteredCollection({
      collection,
      author,
      tags,
      phrase: preparedSearchingPhrase
    })
    setFilteredCollection(filtered)
  }, [preparedSearchingPhrase, collection, author, tags])

  return { searchingPhrase, setSearchingPhrase, filteredCollection }
}

function getAuthor(phrase) {
  return phrase.split(" ").reduce((localAuthor, currentWord, i, array) => {
    if (currentWord.includes(authorSymbol)) {
      if (array[i + 1]) {
        return `${localAuthor} ${currentWord.substr(1)} ${array[i + 1]}`
      } else {
        return `${localAuthor} ${currentWord.substr(1)}`
      }
    } else {
      return localAuthor
    }
  }, "")
}

function getTags(phrase) {
  const tags = phrase.split(" ").reduce((localTags, currentWord) => {
    if (currentWord.includes(tagSymbol))
      return [...localTags, currentWord.slice(1)]
    else return localTags
  }, [])

  return [...new Set(tags)]
}

function getPreparedPhrase(phrase, author) {
  return phrase
    .replace(new RegExp(`${tagSymbol}[a-zA-Z-ąęźżćńłóść]+`, "g"), "")
    .replace(authorSymbol + author.trim(), "")
    .trim()
}

function getFilteredCollection({ phrase, author, tags, collection }) {
  return chainFrom(collection)
    .filter(includesPhrase(phrase))
    .filter(byAuthor(author))
    .filter(includesAllTags(tags))
    .toArray()
}

const includesPhrase = phrase => post =>
  post.node.frontmatter.title.toLowerCase().includes(phrase.toLowerCase())

const byAuthor = author => post => {
  if (author.length > 0) {
    return post.node.frontmatter.author.trim().includes(author.trim())
  }
  return true
}

const includesAllTags = tags => post => {
  if (tags.length > 0) {
    for (let tag of tags) {
      if (!post.node.frontmatter.tags.includes(tag)) return false
    }
  }
  return true
}
