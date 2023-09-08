# !! STILL WIP !!


# Polytoria Place File (.poly)
Polytoria Place File (.poly) is a text place file format for Polytoria Creator version ^1.13 based on XML

> This may include misinformation. I'll be updating when more info is found, if you catch some issues please create an issue or pull request.

## Header
Polytoria place files start like this:
```xml
<?xml version="1.0" encoding="UTF-8"?>		# XML Encoding
<game version="1.3.40">		# Game Root, along with version.
	...
</game>
```

## Object structure
Polytoria object are structured like these:
```xml
<Item class="Environment">
    <Properties>
      ...
    </Properties>
    ...
```
If there's children inside the object, it'll be put inside the parent item, like this:
```xml
<Item class="Environment">
    <Properties>
      ...
    </Properties>
    <Item class="Part">		# Child
    	...
	</Item>
    ...
```