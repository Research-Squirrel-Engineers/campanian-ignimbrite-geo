var tree={
  "plugins": [
    "defaults",
    "search",
    "sort",
    "state",
    "types",
    "contextmenu"
  ],
  "search": {
    "show_only_matches": true
  },
  "types": {
    "class": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/class.png"
    },
    "geoclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geoclass.png"
    },
    "halfgeoclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/halfgeoclass.png"
    },
    "collectionclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/collectionclass.png"
    },
    "geocollection": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geometrycollection.png"
    },
    "featurecollection": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/featurecollection.png"
    },
    "instance": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/instance.png"
    },
    "geoinstance": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geoinstance.png"
    }
  },
  "core": {
    "themes": {
      "responsive": true
    },
    "check_callback": true,
    "data": [
      {
        "id": "http://fuzzy-sl.squirrel.link/data/agent_0000-0002-3246-3531_suniv0_",
        "parent": "http://xmlns.com/foaf/0.1/Person",
        "type": "instance",
        "text": "agent_0000-0002-3246-3531 (fsld:agent_0000-0002-3246-3531)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/agent_0009-0008-2877-3204_suniv0_",
        "parent": "http://xmlns.com/foaf/0.1/Person",
        "type": "instance",
        "text": "agent_0009-0008-2877-3204 (fsld:agent_0009-0008-2877-3204)",
        "data": {}
      },
      {
        "id": "http://xmlns.com/foaf/0.1/Person",
        "parent": "#",
        "type": "class",
        "text": "Person (foaf:Person) [2]",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/agent_0000-0002-3246-3531_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Agent",
        "type": "instance",
        "text": "agent_0000-0002-3246-3531 (fsld:agent_0000-0002-3246-3531)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/agent_0009-0008-2877-3204_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Agent",
        "type": "instance",
        "text": "agent_0009-0008-2877-3204 (fsld:agent_0009-0008-2877-3204)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/ns/prov#Agent",
        "parent": "#",
        "type": "class",
        "text": "Agent (prov:Agent) [2]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2
            },
            "http://www.w3.org/2004/02/skos/core#exactMatch": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.w3.org/2004/02/skos/core#Collection": 2
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_5_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Castelcivita Cave (fsld:cisite_5)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_6_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Copecchia (fsld:cisite_6)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_10_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Marina di Cassano (Naples) (fsld:cisite_10)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_19_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Paglicci Cave (fsld:cisite_19)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_27_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Sant\u2018 Agata dei due Golfi (fsld:cisite_27)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_28_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Sant\u2018 Angelo a Scala (fsld:cisite_28)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_42_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Kozarnika Cave (Bulgaria) (fsld:cisite_42)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_43_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Temnata Cave (Bulgaria) (fsld:cisite_43)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_44_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Toplitsa Cave (Bulgaria) (fsld:cisite_44)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_45_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Franchthi Cave (Greece) (fsld:cisite_45)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_48_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Susak Island (Greece) (fsld:cisite_48)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_50_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Golema Pesht Cave near Zdunje (Macedonia) (fsld:cisite_50)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_51_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Crvena Stiljena (Montenegro) (fsld:cisite_51)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_52_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Urluia (Romania) (fsld:cisite_52)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_54_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Vlasca (Romania) (fsld:cisite_54)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_55_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Lower Danube Basin (Romania) (fsld:cisite_55)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_65_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Haua-Fteah (Libya) (fsld:cisite_65)",
        "data": {}
      },
      {
        "id": "http://archaeoinformatics.link/ontology#Site",
        "parent": "#",
        "type": "geoclass",
        "text": "Site (fsl:Site) [17]",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_5_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Castelcivita Cave (fsld:cisite_5)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_6_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Copecchia (fsld:cisite_6)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_10_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Marina di Cassano (Naples) (fsld:cisite_10)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_19_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Paglicci Cave (fsld:cisite_19)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_27_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Sant\u2018 Agata dei due Golfi (fsld:cisite_27)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_28_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Sant\u2018 Angelo a Scala (fsld:cisite_28)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_42_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Kozarnika Cave (Bulgaria) (fsld:cisite_42)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_43_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Temnata Cave (Bulgaria) (fsld:cisite_43)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_44_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Toplitsa Cave (Bulgaria) (fsld:cisite_44)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_45_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Franchthi Cave (Greece) (fsld:cisite_45)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_48_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Susak Island (Greece) (fsld:cisite_48)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_50_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Golema Pesht Cave near Zdunje (Macedonia) (fsld:cisite_50)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_51_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Crvena Stiljena (Montenegro) (fsld:cisite_51)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_52_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Urluia (Romania) (fsld:cisite_52)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_54_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Vlasca (Romania) (fsld:cisite_54)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_55_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Lower Danube Basin (Romania) (fsld:cisite_55)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_65_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Haua-Fteah (Libya) (fsld:cisite_65)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/ns/prov#Entity",
        "parent": "#",
        "type": "geoclass",
        "text": "Entity (prov:Entity) [17]",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_5_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Castelcivita Cave (fsld:cisite_5)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_6_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Copecchia (fsld:cisite_6)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_10_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Marina di Cassano (Naples) (fsld:cisite_10)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_19_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Paglicci Cave (fsld:cisite_19)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_27_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Sant\u2018 Agata dei due Golfi (fsld:cisite_27)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_28_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Sant\u2018 Angelo a Scala (fsld:cisite_28)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_42_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Kozarnika Cave (Bulgaria) (fsld:cisite_42)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_43_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Temnata Cave (Bulgaria) (fsld:cisite_43)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_44_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Toplitsa Cave (Bulgaria) (fsld:cisite_44)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_45_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Franchthi Cave (Greece) (fsld:cisite_45)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_48_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Susak Island (Greece) (fsld:cisite_48)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_50_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Golema Pesht Cave near Zdunje (Macedonia) (fsld:cisite_50)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_51_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Crvena Stiljena (Montenegro) (fsld:cisite_51)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_52_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Urluia (Romania) (fsld:cisite_52)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_54_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Vlasca (Romania) (fsld:cisite_54)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_55_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Lower Danube Basin (Romania) (fsld:cisite_55)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_65_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Haua-Fteah (Libya) (fsld:cisite_65)",
        "data": {}
      },
      {
        "id": "https://pleiades.stoa.org/places/vocab#Place",
        "parent": "#",
        "type": "geoclass",
        "text": "Place (pleiades:Place) [17]",
        "data": {
          "to": {
            "http://archaeoinformatics.link/ontology#certaintyDesc": {
              "instancecount": 1
            },
            "http://archaeoinformatics.link/ontology#certaintyLevel": {
              "instancecount": 1
            },
            "http://archaeoinformatics.link/ontology#hasReference": {
              "instancecount": 1
            },
            "http://archaeoinformatics.link/ontology#partOf": {
              "instancecount": 1
            },
            "http://archaeoinformatics.link/ontology#siteType": {
              "instancecount": 1
            },
            "http://archaeoinformatics.link/ontology#spatialType": {
              "instancecount": 2
            },
            "http://purl.org/dc/terms/creator": {
              "instancecount": 2
            },
            "http://purl.org/dc/terms/license": {
              "instancecount": 1
            },
            "http://purl.org/dc/terms/rightsHolder": {
              "instancecount": 2
            },
            "http://www.opengis.net/ont/geosparql#hasGeometry": {
              "instancecount": 1,
              "http://www.opengis.net/ont/sf#Point": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 3
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#closeMatch": {
              "instancecount": 2
            },
            "http://www.w3.org/2004/02/skos/core#prefLabel": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#scopeNote": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/prov#wasAttributedTo": {
              "instancecount": 2
            },
            "http://www.w3.org/ns/prov#wasDerivedFrom": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/prov#wasGeneratedBy": {
              "instancecount": 2,
              "http://www.w3.org/ns/prov#Activity": 2,
              "http://archaeoinformatics.link/ontology#Georeferencing": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.opengis.net/ont/geosparql#FeatureCollection": 3
            },
            "http://www.w3.org/ns/prov#used": {
              "instancecount": 0,
              "http://www.w3.org/ns/prov#Activity": 1,
              "http://archaeoinformatics.link/ontology#Georeferencing": 1
            }
          }
        },
        "instancecount": 27
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_5_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_5_geom (fsld:cisite_5_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_6_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_6_geom (fsld:cisite_6_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_10_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_10_geom (fsld:cisite_10_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_19_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_19_geom (fsld:cisite_19_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_27_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_27_geom (fsld:cisite_27_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_28_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_28_geom (fsld:cisite_28_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_42_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_42_geom (fsld:cisite_42_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_43_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_43_geom (fsld:cisite_43_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_44_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_44_geom (fsld:cisite_44_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_45_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_45_geom (fsld:cisite_45_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_48_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_48_geom (fsld:cisite_48_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_50_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_50_geom (fsld:cisite_50_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_51_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_51_geom (fsld:cisite_51_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_52_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_52_geom (fsld:cisite_52_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_54_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_54_geom (fsld:cisite_54_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_55_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_55_geom (fsld:cisite_55_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_65_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_65_geom (fsld:cisite_65_geom)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/sf#Point",
        "parent": "#",
        "type": "geoclass",
        "text": "Point (sf:Point) [17]",
        "data": {
          "to": {
            "http://archaeoinformatics.link/ontology#certaintyDesc": {
              "instancecount": 1
            },
            "http://archaeoinformatics.link/ontology#certaintyLevel": {
              "instancecount": 1
            },
            "http://www.opengis.net/ont/geosparql#asWKT": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.opengis.net/ont/geosparql#hasGeometry": {
              "instancecount": 0,
              "http://archaeoinformatics.link/ontology#Site": 1,
              "http://www.w3.org/ns/prov#Entity": 1,
              "https://pleiades.stoa.org/places/vocab#Place": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.opengis.net/ont/geosparql#GeometryCollection": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_5_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_5_activity (fsld:cisite_5_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_5_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_5_pyscript (fsld:cisite_5_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_6_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_6_activity (fsld:cisite_6_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_6_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_6_pyscript (fsld:cisite_6_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_10_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_10_activity (fsld:cisite_10_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_10_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_10_pyscript (fsld:cisite_10_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_19_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_19_activity (fsld:cisite_19_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_19_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_19_pyscript (fsld:cisite_19_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_27_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_27_activity (fsld:cisite_27_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_27_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_27_pyscript (fsld:cisite_27_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_28_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_28_activity (fsld:cisite_28_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_28_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_28_pyscript (fsld:cisite_28_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_42_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_42_activity (fsld:cisite_42_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_42_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_42_pyscript (fsld:cisite_42_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_43_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_43_activity (fsld:cisite_43_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_43_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_43_pyscript (fsld:cisite_43_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_44_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_44_activity (fsld:cisite_44_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_44_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_44_pyscript (fsld:cisite_44_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_45_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_45_activity (fsld:cisite_45_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_45_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_45_pyscript (fsld:cisite_45_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_48_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_48_activity (fsld:cisite_48_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_48_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_48_pyscript (fsld:cisite_48_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_50_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_50_activity (fsld:cisite_50_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_50_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_50_pyscript (fsld:cisite_50_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_51_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_51_activity (fsld:cisite_51_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_51_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_51_pyscript (fsld:cisite_51_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_52_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_52_activity (fsld:cisite_52_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_52_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_52_pyscript (fsld:cisite_52_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_54_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_54_activity (fsld:cisite_54_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_54_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_54_pyscript (fsld:cisite_54_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_55_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_55_activity (fsld:cisite_55_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_55_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_55_pyscript (fsld:cisite_55_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_65_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_65_activity (fsld:cisite_65_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_65_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_65_pyscript (fsld:cisite_65_pyscript)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/ns/prov#Activity",
        "parent": "#",
        "type": "class",
        "text": "Activity (prov:Activity) [34]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/prov#endedAtTime": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/prov#startedAtTime": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/prov#wasAssociatedWith": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.w3.org/2004/02/skos/core#Collection": 1
            },
            "http://www.w3.org/ns/prov#wasGeneratedBy": {
              "instancecount": 0,
              "http://archaeoinformatics.link/ontology#Site": 1,
              "http://www.w3.org/ns/prov#Entity": 1,
              "https://pleiades.stoa.org/places/vocab#Place": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_5_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_5_activity (fsld:cisite_5_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_6_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_6_activity (fsld:cisite_6_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_10_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_10_activity (fsld:cisite_10_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_19_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_19_activity (fsld:cisite_19_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_27_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_27_activity (fsld:cisite_27_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_28_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_28_activity (fsld:cisite_28_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_42_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_42_activity (fsld:cisite_42_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_43_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_43_activity (fsld:cisite_43_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_44_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_44_activity (fsld:cisite_44_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_45_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_45_activity (fsld:cisite_45_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_48_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_48_activity (fsld:cisite_48_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_50_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_50_activity (fsld:cisite_50_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_51_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_51_activity (fsld:cisite_51_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_52_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_52_activity (fsld:cisite_52_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_54_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_54_activity (fsld:cisite_54_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_55_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_55_activity (fsld:cisite_55_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_65_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_65_activity (fsld:cisite_65_activity)",
        "data": {}
      },
      {
        "id": "http://archaeoinformatics.link/ontology#Georeferencing",
        "parent": "#",
        "type": "class",
        "text": "Georeferencing (fsl:Georeferencing) [17]",
        "data": {
          "to": {
            "http://archaeoinformatics.link/ontology#activityDesc": {
              "instancecount": 1
            },
            "http://archaeoinformatics.link/ontology#certaintyDesc": {
              "instancecount": 1
            },
            "http://archaeoinformatics.link/ontology#certaintyLevel": {
              "instancecount": 1
            },
            "http://archaeoinformatics.link/ontology#hasReference": {
              "instancecount": 1
            },
            "http://archaeoinformatics.link/ontology#hasSource": {
              "instancecount": 1
            },
            "http://archaeoinformatics.link/ontology#hasSourceType": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2
            },
            "http://www.w3.org/ns/prov#endedAtTime": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/prov#startedAtTime": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/prov#used": {
              "instancecount": 1,
              "http://archaeoinformatics.link/ontology#Site": 1,
              "http://www.w3.org/ns/prov#Entity": 1,
              "https://pleiades.stoa.org/places/vocab#Place": 1
            },
            "http://www.w3.org/ns/prov#wasAssociatedWith": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.w3.org/2004/02/skos/core#Collection": 2
            },
            "http://www.w3.org/ns/prov#wasGeneratedBy": {
              "instancecount": 0,
              "http://archaeoinformatics.link/ontology#Site": 1,
              "http://www.w3.org/ns/prov#Entity": 1,
              "https://pleiades.stoa.org/places/vocab#Place": 1
            }
          }
        },
        "instancecount": 12
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/Person_collection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "instance",
        "text": "Person Instances Collection (fsld:Person_collection)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/Agent_collection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "instance",
        "text": "Agent Instances Collection (fsld:Agent_collection)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/Activity_collection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "instance",
        "text": "Activity Instances Collection (fsld:Activity_collection)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/Georeferencing_collection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "instance",
        "text": "Georeferencing Instances Collection (fsld:Georeferencing_collection)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/2004/02/skos/core#Collection",
        "parent": "#",
        "type": "collectionclass",
        "text": "Collection (skos:Collection) [4]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 17,
              "http://www.w3.org/ns/prov#Activity": 17,
              "http://archaeoinformatics.link/ontology#Georeferencing": 17
            }
          },
          "from": {}
        },
        "instancecount": 19
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/Site_collection",
        "parent": "http://www.opengis.net/ont/geosparql#FeatureCollection",
        "type": "featurecollection",
        "text": "Site Instances Collection (fsld:Site_collection)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/Entity_collection",
        "parent": "http://www.opengis.net/ont/geosparql#FeatureCollection",
        "type": "featurecollection",
        "text": "Entity Instances Collection (fsld:Entity_collection)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/Place_collection",
        "parent": "http://www.opengis.net/ont/geosparql#FeatureCollection",
        "type": "featurecollection",
        "text": "Place Instances Collection (fsld:Place_collection)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#FeatureCollection",
        "parent": "http://www.opengis.net/ont/geosparql#SpatialObjectCollection",
        "type": "collectionclass",
        "text": "FeatureCollection (gsp:FeatureCollection) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 17,
              "http://archaeoinformatics.link/ontology#Site": 17,
              "http://www.w3.org/ns/prov#Entity": 17,
              "https://pleiades.stoa.org/places/vocab#Place": 17
            }
          },
          "from": {}
        },
        "instancecount": 20
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#SpatialObjectCollection",
        "parent": "#",
        "type": "collectionclass",
        "text": "SpatialObjectCollection (gsp:SpatialObjectCollection)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/Point_collection",
        "parent": "http://www.opengis.net/ont/geosparql#GeometryCollection",
        "type": "geocollection",
        "text": "Point Instances Collection (fsld:Point_collection)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#GeometryCollection",
        "parent": "http://www.opengis.net/ont/geosparql#SpatialObjectCollection",
        "type": "collectionclass",
        "text": "GeometryCollection (gsp:GeometryCollection) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 17,
              "http://www.opengis.net/ont/sf#Point": 17
            }
          },
          "from": {}
        },
        "instancecount": 20
      }
    ]
  }
}