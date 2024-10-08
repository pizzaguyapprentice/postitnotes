/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("om8a65z2op0pv4y")

  collection.name = "note"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("om8a65z2op0pv4y")

  collection.name = "posts"

  return dao.saveCollection(collection)
})
