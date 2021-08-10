# Twitch audio only

TODO: try to port this to a browser plugin (or other useful option)

_m3u8 link for the channel can be obtained by inspecting the twitch requests to a m3u8 endpoint_

in one file:

```bash
ffmpeg -i "m3u8 link" -c copy -map a "output.ts"
```

in segments:

```bash
ffmpeg -i "m3u8 link" -c copy -map a -f segment -segment_time 10 "out%d.ts"
```

open output.ts
remove previous played ts files
