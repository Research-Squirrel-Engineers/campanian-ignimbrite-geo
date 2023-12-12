__author__ = "Florian Thiery"
__copyright__ = "MIT Licence 2023, Florian Thiery"
__credits__ = ["Florian Thiery"]
__license__ = "MIT"
__version__ = "beta"
__maintainer__ = "Florian Thiery"
__email__ = "mail@fthiery.de"
__status__ = "beta"
__update__ = "2023-08-14"

# import dependencies
import uuid
import requests
import io
import pandas as pd
import os
import codecs
import datetime
import importlib
import sys
import hashlib

# set UTF8 as default
importlib.reload(sys)

# set starttime
starttime = datetime.datetime.now().strftime("%Y-%m-%dT%H:%M:%S.%fZ")
lines = []

# set paths I
file_name = "cifindspots_part_full.csv"
dir_path = os.path.dirname(os.path.realpath(__file__))
file_in = dir_path.replace("\\py", "\\csv") + "\\" + file_name

# read csv file
data = pd.read_csv(
    file_in,
    encoding='utf-8',
    sep=',',
    usecols=['id', 'label', 'desc', 'certainty', 'certaintyinfo', 'relatedto', 'relatedtohow', 'source',
             'sourcetype', 'spatialtype', 'methodtype', 'agent', 'methoddesc', 'literature', 'wkt'],
    na_values=['.', '??', 'NULL']  # take any '.' or '??' values as NA
)
print("*****************************************")
print(data.info())

# create triples from dataframe
lineNo = 2
for index, row in data.iterrows():
    tmpno = lineNo - 2
    lineNo += 1

    # agent
    agent = str(row['agent'])
    agents = agent.split(";")
    for i in agents:
        tmp_agent_id = i.replace("http://orcid.org/", "")
        lines.append("fsld:agent_" + tmp_agent_id +
                     " " + "rdf:type" + " foaf:Person .")
        lines.append("fsld:agent_" + tmp_agent_id +
                     " " + "rdf:type" + " prov:Agent .")
        lines.append("fsld:agent_" + tmp_agent_id +
                     " " + "skos:exactMatch" + " <" + i + ">.")

    # entity (site)
    # typing
    lines.append("fsld:cisite_" +
                 str(row['id']) + " " + "rdf:type" + " fsl:Site .")
    lines.append("fsld:cisite_" +
                 str(row['id']) + " " + "rdf:type" + " prov:Entity .")
    lines.append("fsld:cisite_" +
                 str(row['id']) + " " + "rdf:type" + " pleiades:Place .")
    lines.append("fsld:cisite_" +
                 str(row['id']) + " " + "fsl:partOf" + " fsl:CampanianIgnimbriteProject .")
    lines.append("fsld:cisite_" +
                 str(row['id']) + " " + "fsl:siteType" + " fsl:ArchaeologicalSite .")
    # metadata
    lines.append("fsld:cisite_" +
                 str(row['id']) + " " + "rdfs:label" + " '" + str(row['label']) + "'@en.")
    lines.append("fsld:cisite_" +
                 str(row['id']) + " " + "skos:prefLabel" + " '" + str(row['label']) + "'@en.")
    if str(row['desc']) != 'nan':
        lines.append("fsld:cisite_" +
                     str(row['id']) + " " + "skos:scopeNote" + " '" + str(row['desc']) + "'@en.")
        lines.append("fsld:cisite_" +
                     str(row['id']) + " " + "rdfs:comment" + " '" + str(row['desc']) + "'@en.")
    lines.append("fsld:cisite_" + str(row['id']) + " " +
                 "prov:wasDerivedFrom" + " <https://github.com/Research-Squirrel-Engineers/campanian-ignimbrite-geo> .")
    # certainty
    lines.append("fsld:cisite_" +
                 str(row['id']) + " " + "fsl:certaintyLevel" + " " + str(row['certainty']) + ".")
    lines.append("fsld:cisite_" +
                 str(row['id']) + " " + "fsl:certaintyDesc" + " '" + str(row['certaintyinfo']) + "'@en.")
    # relations
    relatedto = str(row['relatedto'])
    relatedtos = relatedto.split(";")
    for i in relatedtos:
        lines.append("fsld:cisite_" + str(row['id']) +
                     " " + str(row['relatedtohow']) + " <" + i + ">.")
    spatialtype = str(row['spatialtype'])
    spatialtypes = spatialtype.split(";")
    for i in spatialtypes:
        lines.append("fsld:cisite_" +
                     str(row['id']) + " " + "fsl:spatialType" + " " + i + ".")
    # literature
    if str(row['literature']) != 'nan':
        lit = str(row['literature'])
        lits = lit.split(";")
        for i in lits:
            lines.append("fsld:cisite_" +
                         str(row['id']) + " " + "fsl:hasReference" + " '" + i + "'.")

    # site geometry
    point = str(row['wkt'])
    point = "\"<http://www.opengis.net/def/crs/EPSG/0/4326> " + \
        point + "\"^^geosparql:wktLiteral"
    lines.append("fsld:cisite_" + str(row['id']) + " " +
                 "geosparql:hasGeometry" + " fsld:cisite_" + str(row['id']) + "_geom .")
    lines.append("fsld:cisite_" +
                 str(row['id']) + "_geom " + "rdf:type" + " sf:Point .")
    lines.append("fsld:cisite_" +
                 str(row['id']) + "_geom " + "geosparql:asWKT " + point + ".")
    lines.append("fsld:cisite_" +
                 str(row['id']) + "_geom " + "fsl:certaintyLevel" + " " + str(row['certainty']) + ".")
    lines.append("fsld:cisite_" +
                 str(row['id']) + "_geom " + "fsl:certaintyDesc" + " '" + str(row['certaintyinfo']) + "'@en.")

    # activity
    # metadata
    lines.append("fsld:cisite_" +
                 str(row['id']) + "_activity " + "rdf:type" + " prov:Activity .")
    lines.append("fsld:cisite_" +
                 str(row['id']) + "_activity " + "rdf:type" + " " + str(row['methodtype']) + ".")
    lines.append("fsld:cisite_" +
                 str(row['id']) + "_activity " + "prov:startedAtTime '" + starttime + "'^^xsd:dateTime .")
    lines.append("fsld:cisite_" +
                 str(row['id']) + "_activity " + "prov:endedAtTime '" +
                 datetime.datetime.now().strftime("%Y-%m-%dT%H:%M:%S.%fZ") + "'^^xsd:dateTime .")
    # activity data
    lines.append("fsld:cisite_" +
                 str(row['id']) + "_activity " + "fsl:hasSource" + " " + str(row['source']) + ".")
    lines.append("fsld:cisite_" +
                 str(row['id']) + "_activity " + "fsl:hasSourceType" + " " + str(row['sourcetype']) + ".")
    if str(row['literature']) != 'nan':
        for i in lits:
            lines.append(
                "fsld:cisite_" + str(row['id']) + "_activity " + "fsl:hasReference" + " '" + i + "'.")
    lines.append("fsld:cisite_" +
                 str(row['id']) + "_activity " + "fsl:activityDesc" + " '" + str(row['methoddesc']) + "'@en.")
    lines.append("fsld:cisite_" +
                 str(row['id']) + "_activity " + "fsl:certaintyLevel" + " " + str(row['certainty']) + ".")
    lines.append("fsld:cisite_" +
                 str(row['id']) + "_activity " + "fsl:certaintyDesc" + " '" + str(row['certaintyinfo']) + "'@en.")

    # image?
    if str(row['relatedto']) != 'nan':
        for i in relatedtos:
            if "png" in i:
                lines.append("fsld:cisite_" +
                             str(row['id']) + "_activity " + "fsl:image" + " <" + i + ">.")
            if "jpg" in i:
                lines.append("fsld:cisite_" +
                             str(row['id']) + "_activity " + "fsl:image" + " <" + i + ">.")

    # prov-o model
    lines.append("fsld:cisite_" + str(row['id']) + " " + "prov:wasGeneratedBy" +
                 " " + "fsld:cisite_" + str(row['id']) + "_activity.")
    lines.append("fsld:cisite_" +
                 str(row['id']) + "_activity " + "prov:used " + "fsld:cisite_" + str(row['id']) + ".")
    for i in agents:
        lines.append(
            "fsld:cisite_" + str(row['id']) + " " + "prov:wasAttributedTo" + " <" + i + ">.")
        lines.append(
            "fsld:cisite_" + str(row['id']) + "_activity " + "prov:wasAssociatedWith" + " <" + i + ">.")

    # license
    lines.append("fsld:cisite_" + str(row['id']) + " " + "dct:license" +
                 " <" + "https://creativecommons.org/licenses/by/4.0/" + "> .")
    lines.append("fsld:cisite_" + str(row['id']) + " " + "dct:creator" +
                 " <" + "https://orcid.org/0000-0002-3246-3531" + "> .")
    lines.append("fsld:cisite_" + str(row['id']) + " " + "dct:creator" +
                 " <" + "https://orcid.org/0000-0003-1100-6494" + "> .")
    lines.append("fsld:cisite_" + str(row['id']) + " " + "dct:rightsHolder" +
                 " <" + "https://orcid.org/0000-0002-3246-3531" + "> .")
    lines.append("fsld:cisite_" + str(row['id']) + " " + "dct:rightsHolder" +
                 " <" + "https://orcid.org/0000-0003-1100-6494" + "> .")

    # prov-o for script
    lines.append("fsld:cisite_" + str(row['id']) + " " +
                 "prov:wasAttributedTo" + " <https://github.com/Research-Squirrel-Engineers/campanian-ignimbrite-geo/blob/main/py/CI.py> .")
    lines.append("fsld:cisite_" + str(row['id']) + " " +
                 "prov:wasDerivedFrom" + " <https://github.com/Research-Squirrel-Engineers/campanian-ignimbrite-geo> .")
    lines.append("fsld:cisite_" + str(row['id']) + " " +
                 "prov:wasGeneratedBy" + " fsld:cisite_" + str(row['id']) + "_pyscript .")
    lines.append("fsld:cisite_" +
                 str(row['id']) + "_pyscript " + "rdf:type" + " <http://www.w3.org/ns/prov#Activity> .")
    lines.append("fsld:cisite_" +
                 str(row['id']) + "_pyscript " + "prov:startedAtTime '" + starttime + "'^^xsd:dateTime .")
    lines.append("fsld:cisite_" +
                 str(row['id']) + "_pyscript " + "prov:endedAtTime '" +
                 datetime.datetime.now().strftime("%Y-%m-%dT%H:%M:%S.%fZ") + "'^^xsd:dateTime .")
    lines.append("fsld:cisite_" +
                 str(row['id']) + "_pyscript " + "prov:wasAssociatedWith" + " <https://github.com/Research-Squirrel-Engineers/campanian-ignimbrite-geo/blob/main/py/CI.py> .")

    lines.append("")

files = (len(lines) / 100000) + 1
print("triples", len(lines), "files", int(files))
thiscount = len(lines)

# write output files
f = 0
step = 100000
prefixes = ""
prefixes += "@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\r\n"
prefixes += "@prefix owl: <http://www.w3.org/2002/07/owl#> .\r\n"
prefixes += "@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\r\n"
prefixes += "@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\r\n"
prefixes += "@prefix geosparql: <http://www.opengis.net/ont/geosparql#> .\r\n"
prefixes += "@prefix dc: <http://purl.org/dc/elements/1.1/> .\r\n"
prefixes += "@prefix dct: <http://purl.org/dc/terms/> .\r\n"
prefixes += "@prefix sf: <http://www.opengis.net/ont/sf#> .\r\n"
prefixes += "@prefix prov: <http://www.w3.org/ns/prov#> .\r\n"
prefixes += "@prefix foaf: <http://xmlns.com/foaf/0.1/> .\r\n"
prefixes += "@prefix skos: <http://www.w3.org/2004/02/skos/core#> .\r\n"
prefixes += "@prefix pleiades: <https://pleiades.stoa.org/places/vocab#> .\r\n"
prefixes += "@prefix wikidata: <http://wikidata.org/entity/> .\r\n"
prefixes += "@prefix osmn: <http://openopenstreetmap.org/node/> .\r\n"
prefixes += "@prefix osmr: <http://openopenstreetmap.org/relation/> .\r\n"
prefixes += "@prefix osmw: <http://openopenstreetmap.org/way/> .\r\n"
prefixes += "@prefix fsl: <http://fuzzy-sl.squirrel.link/ontology/> .\r\n"
prefixes += "@prefix fsld: <http://fuzzy-sl.squirrel.link/data/> .\r\n"
prefixes += "\r\n"

for x in range(1, int(files) + 1):
    strX = str(x)
    filename = dir_path.replace("\\py", "\\rdf") + \
        "\\" + "ci_full.ttl"
    file = codecs.open(filename, "w", "utf-8")
    file.write(
        "# create triples from https://github.com/Research-Squirrel-Engineers/campanian-ignimbrite-geo \r\n")
    file.write(
        "# on " + datetime.datetime.now().strftime("%Y-%m-%d %H:%M") + "\r\n\r\n")
    file.write(prefixes)
    i = f
    for i, line in enumerate(lines):
        if (i > f - 1 and i < f + step):
            file.write(line)
            file.write("\r\n")
    f = f + step
    print(" > ci_full.ttl")
    file.close()

print("*****************************************")
print("SUCCESS: closing script")
print("*****************************************")
