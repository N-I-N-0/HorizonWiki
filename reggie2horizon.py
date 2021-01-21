import os, os.path
import sys
from xml.etree import ElementTree as etree
try:
    from PyQt5 import QtCore, QtGui, QtWidgets
except ImportError:
    from PySide2 import QtCore, QtGui, QtWidgets
Qt = QtCore.Qt

app = QtWidgets.QApplication(sys.argv)
path = QtWidgets.QFileDialog.getOpenFileName(None, "Open spridedata.xml", "", "Reggie Sprite Data (*.xml)")[0]
if not path: sys.exit(1)

with open(path, 'r') as file:
    xml = file.read()
root = etree.fromstring(xml)

dev = input("Who programmed these sprites?")
sourceCode = input("Where can it be found?")

files = []
for sprite in root:
    file = '{| class="textbox red grid float-right"\n'
    file += "|+ [[File:ReggieImage{}.png|frameless|25px|link=]]  ''{}: {}''\n".format(sprite.attrib['id'], sprite.attrib['id'], sprite.attrib['name'])
    file += "|-\n"
    file += '!colspan="2" | Screenshot from the game: [[File:Screenshot{}.png|frameless|center|thumb|link=]]\n'.format(sprite.attrib['id'])
    file += "|-\n"
    
    file += '!Type:\n'
    file += '|Describe the type/category of the sprite, for example "Event Controller", "3D Sprite" etc...\n'
    file += '|-\n'

    if dev:
        file += '!Developer(s):\n'
        file += '|{}\n'.format(dev)
        file += '|-\n'
    
    if sourceCode:
        file += '!Source Code:\n'
        file += '|[{} {}]\n'.format(sourceCode, sourceCode)
        file += '|\n'
    
    file = file[:-2]
    file += '}\n\n'

    file += "=Description=\n"
    if "notes" in sprite.attrib:
        if "advancednotes" in sprite.attrib:
            file += "===General===\n"
            file += sprite.attrib['notes']
            file += "\n===Advanced===\n"
            file += sprite.attrib['advancednotes']
        else:
            file += sprite.attrib['notes']
    else:
        if "advancednotes" in sprite.attrib:
            file += sprite.attrib['advancednotes']
        else:
            file += "No description found!"
    
    file += "\n\n"

    file += "=Settings=\n"
    #settingsXml = etree.tostring(sprite).decode()
    #settingsXml = "\n".join(settingsXml.split("\n")[1:-2])
    #file += settingsXml
    print(file)
    #for name in sprite:
    #    print(name)
