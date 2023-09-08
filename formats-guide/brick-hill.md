# !! STILL WIP !!

# Brick Hill Set File (.brk)
Brick Hill Set File (.brk) is a text place file format for Brick Hill Workshop version ^0.2.0.0.

> This may include misinformation. I'll be updating when more info is found, if you catch some issues please create an issue or pull request.

## Header
Brick Hill Sets content are usually starting with these (text after hashtag not included, they're just comment):
```
B R I C K  W O R K S H O P  V0.2.0.0     # Version Header

0 0 0                   # Color Ambient RGB
0.1 0.5 0.2 1           # Baseplate Color RGBA
0 0 0                   # Sun Color
0                       # Baseplate size (in X, Z Axis)
300                     # Sun Brightness
```

## Transform
Brick Hill's axis system is a bit different from typical Axis. Instead of X Y Z, Brick Hill takes X Z Y.

## Parts
Parts are defined after the header, 
```
15 13 7 1 1 1 0 0 0 1
	+NAME brick0
	+NOCOLLISION
```
### Brick's Metadata
The number above are the brick's transform and color data. Here's the data in order:
- Position X
- Position Y
- Position Z
- Size X
- Size Y
- Size Z
- Color R
- Color G
- Color B
- Color A

### Object Flags and additional data
Objects can also have flags and additional data attached, like these:
```
	+NAME brick0
```
They're usually tabbed line with plus. very self expandatory. First one is the key name, second one is the value. Value can have spaces. When new line is required it'll be marked as `\n`
