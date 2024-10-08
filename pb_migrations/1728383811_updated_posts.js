/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("om8a65z2op0pv4y")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fsssr7q4",
    "name": "field",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("om8a65z2op0pv4y")

  // remove
  collection.schema.removeField("fsssr7q4")

  return dao.saveCollection(collection)
})
