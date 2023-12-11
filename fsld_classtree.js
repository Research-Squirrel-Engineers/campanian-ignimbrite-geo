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
        "id": "http://fuzzy-sl.squirrel.link/data/agent_0009-0008-2877-3204_suniv0_",
        "parent": "http://xmlns.com/foaf/0.1/Person",
        "type": "instance",
        "text": "agent_0009-0008-2877-3204 (fsld:agent_0009-0008-2877-3204)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/agent_0000-0002-3246-3531_suniv0_",
        "parent": "http://xmlns.com/foaf/0.1/Person",
        "type": "instance",
        "text": "agent_0000-0002-3246-3531 (fsld:agent_0000-0002-3246-3531)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/agent_0009-0008-2877-3204_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Agent",
        "type": "instance",
        "text": "agent_0009-0008-2877-3204 (fsld:agent_0009-0008-2877-3204)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_1_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Acerra Sink (fsld:cisite_1)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_2_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Acqua Fidia (fsld:cisite_2)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_3_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Capezzano (fsld:cisite_3)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_4_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Casola (fsld:cisite_4)",
        "data": {}
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_7_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Cuma (fsld:cisite_7)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_8_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Gulf of Naples (fsld:cisite_8)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_9_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Lago Patria (Naples) (fsld:cisite_9)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_11_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Massaquano (Naples) (fsld:cisite_11)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_12_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Monte Echia (Naples) (fsld:cisite_12)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_13_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Lago Grande di Monticchio (fsld:cisite_13)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_14_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Monticchio (Bagni) (fsld:cisite_14)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_15_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Monticchio Lakes (fsld:cisite_15)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_16_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Murge Plateau (fsld:cisite_16)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_17_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Naples (fsld:cisite_17)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_18_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Pacognano (fsld:cisite_18)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_20_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Pellezzano (fsld:cisite_20)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_21_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Penta (fsld:cisite_21)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_22_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Phlegraean Fields (fsld:cisite_22)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_23_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Ponti Rossi (Naples) (fsld:cisite_23)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_24_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Pozzuoli Bay (fsld:cisite_24)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_25_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Pucara (fsld:cisite_25)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_26_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Punta Marmolite (fsld:cisite_26)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_29_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "San Marco (fsld:cisite_29)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_30_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "San Nicola La Strada (fsld:cisite_30)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_31_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Scarafea Area (fsld:cisite_31)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_32_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Serino (fsld:cisite_32)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_33_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Starza (fsld:cisite_33)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_34_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Torregaveta (fsld:cisite_34)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_35_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Trefola (fsld:cisite_35)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_36_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Tufara (fsld:cisite_36)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_37_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Tufarella Area (fsld:cisite_37)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_38_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Vico Equense (fsld:cisite_38)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_39_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Villa di Briano (Naples) (fsld:cisite_39)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_40_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Voscone Area (fsld:cisite_40)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_41_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Lake Ohrid (Albania) (fsld:cisite_41)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_46_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Klissoura (Greece) (fsld:cisite_46)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_47_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Tenaghi Philippon (Greece) (fsld:cisite_47)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_49_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Lake Ohrid (Macedonia) (fsld:cisite_49)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_53_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Dobrogea (Romania) (fsld:cisite_53)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_56_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Bratul Borcea (Romania) (fsld:cisite_56)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_57_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Balta Alba (Romania) (fsld:cisite_57)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_58_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Russian Plane (fsld:cisite_58)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_59_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Kostenki-Borshchevo (Russia) (fsld:cisite_59)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_60_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Kostenki (Russia) (fsld:cisite_60)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_61_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Kisiljevo (Serbia) (fsld:cisite_61)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_62_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Tabula Traiana (Serbia) (fsld:cisite_62)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_63_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Titel Pleateau (Serbia) (fsld:cisite_63)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_64_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Southern Ukraine (fsld:cisite_64)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_101_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Orlovat (fsld:cisite_101)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_102_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Stala\u0107 (fsld:cisite_102)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_103_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Dunaszekcs\u0151 (fsld:cisite_103)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_104_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Batajnica (fsld:cisite_104)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_105_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Rasova (fsld:cisite_105)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_106_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Lake Prespa (fsld:cisite_106)",
        "data": {}
      },
      {
        "id": "http://archaeoinformatics.link/ontology#Site",
        "parent": "#",
        "type": "geoclass",
        "text": "Site (fsl:Site) [71]",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_1_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Acerra Sink (fsld:cisite_1)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_2_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Acqua Fidia (fsld:cisite_2)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_3_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Capezzano (fsld:cisite_3)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_4_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Casola (fsld:cisite_4)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_7_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Cuma (fsld:cisite_7)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_8_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Gulf of Naples (fsld:cisite_8)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_9_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Lago Patria (Naples) (fsld:cisite_9)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_11_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Massaquano (Naples) (fsld:cisite_11)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_12_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Monte Echia (Naples) (fsld:cisite_12)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_13_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Lago Grande di Monticchio (fsld:cisite_13)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_14_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Monticchio (Bagni) (fsld:cisite_14)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_15_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Monticchio Lakes (fsld:cisite_15)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_16_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Murge Plateau (fsld:cisite_16)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_17_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Naples (fsld:cisite_17)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_18_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Pacognano (fsld:cisite_18)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_20_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Pellezzano (fsld:cisite_20)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_21_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Penta (fsld:cisite_21)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_22_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Phlegraean Fields (fsld:cisite_22)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_23_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Ponti Rossi (Naples) (fsld:cisite_23)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_24_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Pozzuoli Bay (fsld:cisite_24)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_25_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Pucara (fsld:cisite_25)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_26_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Punta Marmolite (fsld:cisite_26)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_29_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "San Marco (fsld:cisite_29)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_30_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "San Nicola La Strada (fsld:cisite_30)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_31_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Scarafea Area (fsld:cisite_31)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_32_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Serino (fsld:cisite_32)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_33_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Starza (fsld:cisite_33)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_34_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Torregaveta (fsld:cisite_34)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_35_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Trefola (fsld:cisite_35)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_36_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Tufara (fsld:cisite_36)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_37_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Tufarella Area (fsld:cisite_37)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_38_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Vico Equense (fsld:cisite_38)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_39_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Villa di Briano (Naples) (fsld:cisite_39)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_40_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Voscone Area (fsld:cisite_40)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_41_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Lake Ohrid (Albania) (fsld:cisite_41)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_46_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Klissoura (Greece) (fsld:cisite_46)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_47_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Tenaghi Philippon (Greece) (fsld:cisite_47)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_49_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Lake Ohrid (Macedonia) (fsld:cisite_49)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_53_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Dobrogea (Romania) (fsld:cisite_53)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_56_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Bratul Borcea (Romania) (fsld:cisite_56)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_57_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Balta Alba (Romania) (fsld:cisite_57)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_58_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Russian Plane (fsld:cisite_58)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_59_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Kostenki-Borshchevo (Russia) (fsld:cisite_59)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_60_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Kostenki (Russia) (fsld:cisite_60)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_61_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Kisiljevo (Serbia) (fsld:cisite_61)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_62_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Tabula Traiana (Serbia) (fsld:cisite_62)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_63_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Titel Pleateau (Serbia) (fsld:cisite_63)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_64_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Southern Ukraine (fsld:cisite_64)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_101_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Orlovat (fsld:cisite_101)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_102_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Stala\u0107 (fsld:cisite_102)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_103_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Dunaszekcs\u0151 (fsld:cisite_103)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_104_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Batajnica (fsld:cisite_104)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_105_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Rasova (fsld:cisite_105)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_106_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Lake Prespa (fsld:cisite_106)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/ns/prov#Entity",
        "parent": "#",
        "type": "geoclass",
        "text": "Entity (prov:Entity) [71]",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_1_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Acerra Sink (fsld:cisite_1)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_2_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Acqua Fidia (fsld:cisite_2)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_3_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Capezzano (fsld:cisite_3)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_4_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Casola (fsld:cisite_4)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_7_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Cuma (fsld:cisite_7)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_8_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Gulf of Naples (fsld:cisite_8)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_9_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Lago Patria (Naples) (fsld:cisite_9)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_11_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Massaquano (Naples) (fsld:cisite_11)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_12_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Monte Echia (Naples) (fsld:cisite_12)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_13_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Lago Grande di Monticchio (fsld:cisite_13)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_14_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Monticchio (Bagni) (fsld:cisite_14)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_15_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Monticchio Lakes (fsld:cisite_15)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_16_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Murge Plateau (fsld:cisite_16)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_17_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Naples (fsld:cisite_17)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_18_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Pacognano (fsld:cisite_18)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_20_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Pellezzano (fsld:cisite_20)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_21_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Penta (fsld:cisite_21)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_22_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Phlegraean Fields (fsld:cisite_22)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_23_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Ponti Rossi (Naples) (fsld:cisite_23)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_24_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Pozzuoli Bay (fsld:cisite_24)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_25_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Pucara (fsld:cisite_25)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_26_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Punta Marmolite (fsld:cisite_26)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_29_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "San Marco (fsld:cisite_29)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_30_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "San Nicola La Strada (fsld:cisite_30)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_31_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Scarafea Area (fsld:cisite_31)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_32_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Serino (fsld:cisite_32)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_33_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Starza (fsld:cisite_33)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_34_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Torregaveta (fsld:cisite_34)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_35_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Trefola (fsld:cisite_35)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_36_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Tufara (fsld:cisite_36)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_37_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Tufarella Area (fsld:cisite_37)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_38_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Vico Equense (fsld:cisite_38)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_39_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Villa di Briano (Naples) (fsld:cisite_39)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_40_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Voscone Area (fsld:cisite_40)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_41_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Lake Ohrid (Albania) (fsld:cisite_41)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_46_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Klissoura (Greece) (fsld:cisite_46)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_47_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Tenaghi Philippon (Greece) (fsld:cisite_47)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_49_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Lake Ohrid (Macedonia) (fsld:cisite_49)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_53_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Dobrogea (Romania) (fsld:cisite_53)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_56_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Bratul Borcea (Romania) (fsld:cisite_56)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_57_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Balta Alba (Romania) (fsld:cisite_57)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_58_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Russian Plane (fsld:cisite_58)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_59_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Kostenki-Borshchevo (Russia) (fsld:cisite_59)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_60_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Kostenki (Russia) (fsld:cisite_60)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_61_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Kisiljevo (Serbia) (fsld:cisite_61)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_62_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Tabula Traiana (Serbia) (fsld:cisite_62)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_63_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Titel Pleateau (Serbia) (fsld:cisite_63)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_64_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Southern Ukraine (fsld:cisite_64)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_101_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Orlovat (fsld:cisite_101)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_102_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Stala\u0107 (fsld:cisite_102)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_103_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Dunaszekcs\u0151 (fsld:cisite_103)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_104_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Batajnica (fsld:cisite_104)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_105_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Rasova (fsld:cisite_105)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_106_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Lake Prespa (fsld:cisite_106)",
        "data": {}
      },
      {
        "id": "https://pleiades.stoa.org/places/vocab#Place",
        "parent": "#",
        "type": "geoclass",
        "text": "Place (pleiades:Place) [71]",
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
              "instancecount": 1
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
              "instancecount": 1
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
        "instancecount": 25
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_1_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_1_geom (fsld:cisite_1_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_2_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_2_geom (fsld:cisite_2_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_3_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_3_geom (fsld:cisite_3_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_4_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_4_geom (fsld:cisite_4_geom)",
        "data": {}
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_7_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_7_geom (fsld:cisite_7_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_8_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_8_geom (fsld:cisite_8_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_9_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_9_geom (fsld:cisite_9_geom)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_11_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_11_geom (fsld:cisite_11_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_12_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_12_geom (fsld:cisite_12_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_13_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_13_geom (fsld:cisite_13_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_14_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_14_geom (fsld:cisite_14_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_15_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_15_geom (fsld:cisite_15_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_16_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_16_geom (fsld:cisite_16_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_17_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_17_geom (fsld:cisite_17_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_18_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_18_geom (fsld:cisite_18_geom)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_20_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_20_geom (fsld:cisite_20_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_21_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_21_geom (fsld:cisite_21_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_22_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_22_geom (fsld:cisite_22_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_23_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_23_geom (fsld:cisite_23_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_24_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_24_geom (fsld:cisite_24_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_25_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_25_geom (fsld:cisite_25_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_26_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_26_geom (fsld:cisite_26_geom)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_29_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_29_geom (fsld:cisite_29_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_30_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_30_geom (fsld:cisite_30_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_31_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_31_geom (fsld:cisite_31_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_32_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_32_geom (fsld:cisite_32_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_33_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_33_geom (fsld:cisite_33_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_34_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_34_geom (fsld:cisite_34_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_35_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_35_geom (fsld:cisite_35_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_36_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_36_geom (fsld:cisite_36_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_37_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_37_geom (fsld:cisite_37_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_38_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_38_geom (fsld:cisite_38_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_39_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_39_geom (fsld:cisite_39_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_40_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_40_geom (fsld:cisite_40_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_41_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_41_geom (fsld:cisite_41_geom)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_46_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_46_geom (fsld:cisite_46_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_47_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_47_geom (fsld:cisite_47_geom)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_49_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_49_geom (fsld:cisite_49_geom)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_53_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_53_geom (fsld:cisite_53_geom)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_56_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_56_geom (fsld:cisite_56_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_57_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_57_geom (fsld:cisite_57_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_58_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_58_geom (fsld:cisite_58_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_59_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_59_geom (fsld:cisite_59_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_60_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_60_geom (fsld:cisite_60_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_61_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_61_geom (fsld:cisite_61_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_62_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_62_geom (fsld:cisite_62_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_63_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_63_geom (fsld:cisite_63_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_64_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_64_geom (fsld:cisite_64_geom)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_101_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_101_geom (fsld:cisite_101_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_102_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_102_geom (fsld:cisite_102_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_103_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_103_geom (fsld:cisite_103_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_104_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_104_geom (fsld:cisite_104_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_105_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_105_geom (fsld:cisite_105_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_106_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "cisite_106_geom (fsld:cisite_106_geom)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/sf#Point",
        "parent": "#",
        "type": "geoclass",
        "text": "Point (sf:Point) [71]",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_1_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_1_activity (fsld:cisite_1_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_1_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_1_pyscript (fsld:cisite_1_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_2_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_2_activity (fsld:cisite_2_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_2_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_2_pyscript (fsld:cisite_2_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_3_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_3_activity (fsld:cisite_3_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_3_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_3_pyscript (fsld:cisite_3_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_4_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_4_activity (fsld:cisite_4_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_4_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_4_pyscript (fsld:cisite_4_pyscript)",
        "data": {}
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_7_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_7_activity (fsld:cisite_7_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_7_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_7_pyscript (fsld:cisite_7_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_8_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_8_activity (fsld:cisite_8_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_8_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_8_pyscript (fsld:cisite_8_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_9_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_9_activity (fsld:cisite_9_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_9_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_9_pyscript (fsld:cisite_9_pyscript)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_11_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_11_activity (fsld:cisite_11_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_11_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_11_pyscript (fsld:cisite_11_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_12_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_12_activity (fsld:cisite_12_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_12_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_12_pyscript (fsld:cisite_12_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_13_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_13_activity (fsld:cisite_13_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_13_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_13_pyscript (fsld:cisite_13_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_14_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_14_activity (fsld:cisite_14_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_14_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_14_pyscript (fsld:cisite_14_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_15_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_15_activity (fsld:cisite_15_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_15_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_15_pyscript (fsld:cisite_15_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_16_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_16_activity (fsld:cisite_16_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_16_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_16_pyscript (fsld:cisite_16_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_17_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_17_activity (fsld:cisite_17_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_17_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_17_pyscript (fsld:cisite_17_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_18_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_18_activity (fsld:cisite_18_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_18_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_18_pyscript (fsld:cisite_18_pyscript)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_20_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_20_activity (fsld:cisite_20_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_20_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_20_pyscript (fsld:cisite_20_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_21_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_21_activity (fsld:cisite_21_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_21_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_21_pyscript (fsld:cisite_21_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_22_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_22_activity (fsld:cisite_22_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_22_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_22_pyscript (fsld:cisite_22_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_23_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_23_activity (fsld:cisite_23_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_23_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_23_pyscript (fsld:cisite_23_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_24_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_24_activity (fsld:cisite_24_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_24_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_24_pyscript (fsld:cisite_24_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_25_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_25_activity (fsld:cisite_25_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_25_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_25_pyscript (fsld:cisite_25_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_26_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_26_activity (fsld:cisite_26_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_26_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_26_pyscript (fsld:cisite_26_pyscript)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_29_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_29_activity (fsld:cisite_29_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_29_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_29_pyscript (fsld:cisite_29_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_30_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_30_activity (fsld:cisite_30_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_30_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_30_pyscript (fsld:cisite_30_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_31_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_31_activity (fsld:cisite_31_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_31_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_31_pyscript (fsld:cisite_31_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_32_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_32_activity (fsld:cisite_32_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_32_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_32_pyscript (fsld:cisite_32_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_33_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_33_activity (fsld:cisite_33_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_33_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_33_pyscript (fsld:cisite_33_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_34_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_34_activity (fsld:cisite_34_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_34_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_34_pyscript (fsld:cisite_34_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_35_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_35_activity (fsld:cisite_35_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_35_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_35_pyscript (fsld:cisite_35_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_36_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_36_activity (fsld:cisite_36_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_36_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_36_pyscript (fsld:cisite_36_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_37_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_37_activity (fsld:cisite_37_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_37_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_37_pyscript (fsld:cisite_37_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_38_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_38_activity (fsld:cisite_38_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_38_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_38_pyscript (fsld:cisite_38_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_39_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_39_activity (fsld:cisite_39_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_39_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_39_pyscript (fsld:cisite_39_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_40_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_40_activity (fsld:cisite_40_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_40_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_40_pyscript (fsld:cisite_40_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_41_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_41_activity (fsld:cisite_41_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_41_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_41_pyscript (fsld:cisite_41_pyscript)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_46_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_46_activity (fsld:cisite_46_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_46_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_46_pyscript (fsld:cisite_46_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_47_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_47_activity (fsld:cisite_47_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_47_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_47_pyscript (fsld:cisite_47_pyscript)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_49_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_49_activity (fsld:cisite_49_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_49_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_49_pyscript (fsld:cisite_49_pyscript)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_53_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_53_activity (fsld:cisite_53_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_53_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_53_pyscript (fsld:cisite_53_pyscript)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_56_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_56_activity (fsld:cisite_56_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_56_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_56_pyscript (fsld:cisite_56_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_57_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_57_activity (fsld:cisite_57_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_57_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_57_pyscript (fsld:cisite_57_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_58_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_58_activity (fsld:cisite_58_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_58_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_58_pyscript (fsld:cisite_58_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_59_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_59_activity (fsld:cisite_59_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_59_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_59_pyscript (fsld:cisite_59_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_60_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_60_activity (fsld:cisite_60_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_60_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_60_pyscript (fsld:cisite_60_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_61_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_61_activity (fsld:cisite_61_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_61_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_61_pyscript (fsld:cisite_61_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_62_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_62_activity (fsld:cisite_62_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_62_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_62_pyscript (fsld:cisite_62_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_63_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_63_activity (fsld:cisite_63_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_63_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_63_pyscript (fsld:cisite_63_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_64_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_64_activity (fsld:cisite_64_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_64_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_64_pyscript (fsld:cisite_64_pyscript)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_101_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_101_activity (fsld:cisite_101_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_101_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_101_pyscript (fsld:cisite_101_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_102_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_102_activity (fsld:cisite_102_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_102_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_102_pyscript (fsld:cisite_102_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_103_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_103_activity (fsld:cisite_103_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_103_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_103_pyscript (fsld:cisite_103_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_104_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_104_activity (fsld:cisite_104_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_104_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_104_pyscript (fsld:cisite_104_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_105_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_105_activity (fsld:cisite_105_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_105_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_105_pyscript (fsld:cisite_105_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_106_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_106_activity (fsld:cisite_106_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_106_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "cisite_106_pyscript (fsld:cisite_106_pyscript)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/ns/prov#Activity",
        "parent": "#",
        "type": "class",
        "text": "Activity (prov:Activity) [142]",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_1_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_1_activity (fsld:cisite_1_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_2_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_2_activity (fsld:cisite_2_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_3_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_3_activity (fsld:cisite_3_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_4_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_4_activity (fsld:cisite_4_activity)",
        "data": {}
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_7_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_7_activity (fsld:cisite_7_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_8_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_8_activity (fsld:cisite_8_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_9_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_9_activity (fsld:cisite_9_activity)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_11_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_11_activity (fsld:cisite_11_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_12_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_12_activity (fsld:cisite_12_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_13_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_13_activity (fsld:cisite_13_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_14_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_14_activity (fsld:cisite_14_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_15_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_15_activity (fsld:cisite_15_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_16_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_16_activity (fsld:cisite_16_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_17_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_17_activity (fsld:cisite_17_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_18_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_18_activity (fsld:cisite_18_activity)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_20_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_20_activity (fsld:cisite_20_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_21_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_21_activity (fsld:cisite_21_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_22_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_22_activity (fsld:cisite_22_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_23_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_23_activity (fsld:cisite_23_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_24_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_24_activity (fsld:cisite_24_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_25_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_25_activity (fsld:cisite_25_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_26_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_26_activity (fsld:cisite_26_activity)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_29_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_29_activity (fsld:cisite_29_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_30_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_30_activity (fsld:cisite_30_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_31_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_31_activity (fsld:cisite_31_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_32_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_32_activity (fsld:cisite_32_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_33_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_33_activity (fsld:cisite_33_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_34_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_34_activity (fsld:cisite_34_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_35_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_35_activity (fsld:cisite_35_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_36_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_36_activity (fsld:cisite_36_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_37_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_37_activity (fsld:cisite_37_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_38_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_38_activity (fsld:cisite_38_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_39_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_39_activity (fsld:cisite_39_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_40_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_40_activity (fsld:cisite_40_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_41_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_41_activity (fsld:cisite_41_activity)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_46_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_46_activity (fsld:cisite_46_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_47_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_47_activity (fsld:cisite_47_activity)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_49_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_49_activity (fsld:cisite_49_activity)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_53_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_53_activity (fsld:cisite_53_activity)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_56_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_56_activity (fsld:cisite_56_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_57_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_57_activity (fsld:cisite_57_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_58_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_58_activity (fsld:cisite_58_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_59_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_59_activity (fsld:cisite_59_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_60_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_60_activity (fsld:cisite_60_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_61_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_61_activity (fsld:cisite_61_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_62_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_62_activity (fsld:cisite_62_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_63_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_63_activity (fsld:cisite_63_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_64_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_64_activity (fsld:cisite_64_activity)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_101_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_101_activity (fsld:cisite_101_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_102_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_102_activity (fsld:cisite_102_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_103_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_103_activity (fsld:cisite_103_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_104_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_104_activity (fsld:cisite_104_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_105_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_105_activity (fsld:cisite_105_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/cisite_106_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "cisite_106_activity (fsld:cisite_106_activity)",
        "data": {}
      },
      {
        "id": "http://archaeoinformatics.link/ontology#Georeferencing",
        "parent": "#",
        "type": "class",
        "text": "Georeferencing (fsl:Georeferencing) [71]",
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
              "instancecount": 71,
              "http://www.w3.org/ns/prov#Activity": 71,
              "http://archaeoinformatics.link/ontology#Georeferencing": 71
            }
          },
          "from": {}
        },
        "instancecount": 73
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
              "instancecount": 71,
              "http://archaeoinformatics.link/ontology#Site": 71,
              "http://www.w3.org/ns/prov#Entity": 71,
              "https://pleiades.stoa.org/places/vocab#Place": 71
            }
          },
          "from": {}
        },
        "instancecount": 74
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
              "instancecount": 71,
              "http://www.opengis.net/ont/sf#Point": 71
            }
          },
          "from": {}
        },
        "instancecount": 74
      }
    ]
  }
}