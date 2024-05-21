import os

size = [48, 72, 96, 144, 192]

for s in size:
    os.system(f'convert -geometry {s}x{s} logo.png icon{s}.png')