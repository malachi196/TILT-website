import segno
from urllib.request import urlopen

LOCALHOST = "localhost"
PORT = "1040"
HOST1 = "10.0.1.7"
HOST2 = "127.0.0.1"
NAME = "127-0-0-1"

qrcode = segno.make_qr(f"https://malachi196.github.io/TILT-website/templates/index.html")
qrcode.save("qr/website-better.png", scale=5, dark="darkblue", quiet_zone="lightgrey")

